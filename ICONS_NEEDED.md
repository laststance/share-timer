# Required Icons for PWA

The following icon files need to be added to the `/public` directory for the PWA to work properly:

## Required Files

1. **icon-192x192.png** - 192x192 pixels
   - Standard app icon
   - Used for notifications
   - Purpose: any, maskable

2. **icon-512x512.png** - 512x512 pixels
   - High-resolution app icon
   - Used for PWA installation
   - Purpose: any

3. **badge.png** - 96x96 pixels (recommended)
   - Badge icon for notifications
   - Monochrome/simple design works best

## Design Guidelines

- **Color Scheme**: Use primary green (#10B981) or brand colors
- **Background**: Light gray (#F9FAFB) or transparent
- **Content**: Timer icon, clock, or simple "ST" monogram
- **Style**: Clean, minimal, recognizable at small sizes

## Temporary Workaround

The app will work without these icons, but:
- Notifications will use browser default icons
- PWA installation may not work on some devices
- Icon references in manifest.ts should be updated once icons are added

## Creating Icons

You can use tools like:
- [PWA Asset Generator](https://github.com/elegantapp/pwa-asset-generator)
- [RealFaviconGenerator](https://realfavicongenerator.net/)
- Design tools: Figma, Sketch, Adobe Illustrator

Example command using pwa-asset-generator:
```bash
npx pwa-asset-generator logo.svg public --manifest app/manifest.ts
```
