import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        // Block major AI bots from scraping proprietary content
        userAgent: ['GPTBot', 'CCBot', 'ClaudeBot', 'anthropic-ai', 'PerplexityBot'],
        disallow: '/',
      },
    ],
    sitemap: 'https://indu.life/sitemap.xml',
    host: 'https://indu.life',
  };
}
