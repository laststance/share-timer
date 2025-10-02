import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Share Timer',
    short_name: 'ShareTimer',
    description: 'Simple, relaxing timer application with web push notifications',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#F9FAFB',
    theme_color: '#10B981',
    categories: ['productivity', 'utilities', 'lifestyle'],
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-192x192-maskable.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/badge.png',
        sizes: '96x96',
        type: 'image/png',
        purpose: 'monochrome',
      },
    ],
  }
}
