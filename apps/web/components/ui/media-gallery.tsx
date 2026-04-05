"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Maximize2, X, ChevronLeft, ChevronRight, Play } from "lucide-react";

interface MediaGalleryProps {
  images: string[];
  video?: string;
}

export function MediaGallery({ images, video }: MediaGalleryProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Combine video and images for slider logic
  const mediaItems = video ? [{ type: "video", url: video }, ...images.map(url => ({ type: "image", url }))] : images.map(url => ({ type: "image", url }));

  // Intersection observer to pause video when out of viewport
  useEffect(() => {
    if (!videoRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            videoRef.current?.pause();
          } else {
            // Only auto-play if it's the current slide
            if (mediaItems[currentIndex]?.type === "video") {
              videoRef.current?.play().catch(() => {});
            }
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, [currentIndex, mediaItems]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "1rem" }}>
      {/* Main Preview Container */}
      <div 
        className="group bg-card"
        style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border)" }}
      >
        {mediaItems[currentIndex]!.type === "video" ? (
          <video
            ref={videoRef}
            src={mediaItems[currentIndex]!.url}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <Image
            src={mediaItems[currentIndex]!.url}
            alt={`Preview ${currentIndex}`}
            fill
            style={{ objectFit: "cover" }}
            priority={currentIndex < 3} // Eager load first 3
            sizes="(max-width: 768px) 100vw, 800px"
          />
        )}

        {/* Floating Controls */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem", opacity: 0, transition: "opacity 0.3s" }} 
             onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
             onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
             className="floating-controls"
        >
          <button 
            onClick={handlePrev}
            style={{ padding: "0.5rem", borderRadius: "50%", background: "rgba(0,0,0,0.5)", color: "white", backdropFilter: "blur(4px)", border: "1px solid var(--border)", cursor: "pointer" }}
          >
            <ChevronLeft size={20} />
          </button>
          
          <div style={{ display: "flex", gap: "0.5rem", height: "100%", alignItems: "flex-start", paddingTop: "0.5rem" }}>
            <button 
              onClick={() => setIsModalOpen(true)}
              style={{ padding: "0.5rem", borderRadius: "8px", background: "rgba(0,0,0,0.5)", color: "white", backdropFilter: "blur(4px)", border: "1px solid var(--border)", cursor: "pointer" }}
            >
              <Maximize2 size={16} />
            </button>
          </div>

          <button 
            onClick={handleNext}
            style={{ padding: "0.5rem", borderRadius: "50%", background: "rgba(0,0,0,0.5)", color: "white", backdropFilter: "blur(4px)", border: "1px solid var(--border)", cursor: "pointer" }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Thumbnail Navigation (Grid) */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))", gap: "0.5rem" }}>
        {mediaItems.slice(0, 12).map((item, idx) => (
          <button
            key={item.url}
            onClick={() => setCurrentIndex(idx)}
            style={{ position: "relative", aspectRatio: "1/1", borderRadius: "8px", overflow: "hidden", border: `2px solid ${currentIndex === idx ? '#FF7A00' : 'transparent'}`, opacity: currentIndex === idx ? 1 : 0.6, cursor: "pointer", transition: "all 0.3s" }}
            onMouseEnter={(e) => { if (currentIndex !== idx) e.currentTarget.style.opacity = '1'; }}
            onMouseLeave={(e) => { if (currentIndex !== idx) e.currentTarget.style.opacity = '0.6'; }}
          >
            {item.type === "video" ? (
              <div style={{ width: "100%", height: "100%", backgroundColor: "var(--bg-card)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Play size={16} style={{ color: "rgba(255,255,255,0.6)" }} />
              </div>
            ) : (
              <Image
                src={item.url}
                alt={`Thumbnail ${idx}`}
                fill
                style={{ objectFit: "cover" }}
                loading={idx < 4 ? "eager" : "lazy"}
                sizes="100px"
              />
            )}
          </button>
        ))}
      </div>

      {/* Expand Modal */}
      {isModalOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem", backgroundColor: "rgba(0,0,0,0.9)", backdropFilter: "blur(4px)" }}>
          <button 
            onClick={() => setIsModalOpen(false)}
            style={{ position: "absolute", top: "1.5rem", right: "1.5rem", padding: "0.5rem", borderRadius: "50%", background: "rgba(255,255,255,0.1)", color: "white", zIndex: 50, cursor: "pointer", border: "none" }}
          >
            <X size={24} />
          </button>
          
          <div style={{ position: "relative", width: "100%", maxWidth: "1152px", aspectRatio: "16/9", backgroundColor: "black", borderRadius: "8px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)" }}>
            {mediaItems[currentIndex]!.type === "video" ? (
              <video
                src={mediaItems[currentIndex]!.url}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                controls
                autoPlay
                loop
                playsInline
              />
            ) : (
              <Image
                src={mediaItems[currentIndex]!.url}
                alt={`Expanded preview ${currentIndex}`}
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            )}
            
            <button 
              onClick={handlePrev}
              style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", padding: "0.75rem", borderRadius: "50%", background: "rgba(0,0,0,0.5)", color: "white", backdropFilter: "blur(4px)", cursor: "pointer", border: "none" }}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNext}
              style={{ position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)", padding: "0.75rem", borderRadius: "50%", background: "rgba(0,0,0,0.5)", color: "white", backdropFilter: "blur(4px)", cursor: "pointer", border: "none" }}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
