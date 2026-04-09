type RateLimitResult = {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
};

// In-memory store: Map<IP, { count: number, resetTime: number }>
const rateLimitCache = new Map<string, { count: number; resetTime: number }>();

export function rateLimit(
  ip: string,
  limit: number = 5,
  windowMs: number = 60 * 1000 // default 1 minute
): RateLimitResult {
  const now = Date.now();

  // Cleanup expired entries periodically (optional, but good for memory)
  if (Math.random() < 0.1) {
    for (const [key, value] of rateLimitCache.entries()) {
      if (now > value.resetTime) {
        rateLimitCache.delete(key);
      }
    }
  }

  const record = rateLimitCache.get(ip);

  if (!record || now > record.resetTime) {
    // New IP or window expired
    rateLimitCache.set(ip, {
      count: 1,
      resetTime: now + windowMs,
    });
    return {
      success: true,
      limit,
      remaining: limit - 1,
      reset: now + windowMs,
    };
  }

  // Existing record within window
  const newCount = record.count + 1;
  record.count = newCount;
  rateLimitCache.set(ip, record);

  return {
    success: newCount <= limit,
    limit,
    remaining: Math.max(0, limit - newCount),
    reset: record.resetTime,
  };
}
