import type { MetadataRoute } from 'next';
import { profile } from '../content/profile';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${profile.site.url}/sitemap.xml`,
    host: profile.site.url,
  };
}
