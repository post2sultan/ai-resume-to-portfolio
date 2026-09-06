import type { MetadataRoute } from 'next';
import { profile } from '../content/profile';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: profile.site.name,
    short_name: profile.site.name,
    description: profile.site.description,
    start_url: '/',
    display: 'standalone',
    background_color: profile.site.themeColor,
    theme_color: profile.site.themeColor,
    icons: [{ src: profile.assets.icon, sizes: '432x543', type: 'image/png', purpose: 'any' }],
  };
}
