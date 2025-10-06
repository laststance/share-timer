# Sound Files Required for New Notification Sounds

This guide explains which audio files you need to download for the 10 new notification sound presets.

## Overview

The code implementation is complete, but you need to add 10 new MP3 audio files to the `public/sounds/` directory. Each file should be a short, clear notification sound (1-3 seconds recommended).

## Required Files

Place these files in the `public/sounds/` directory:

### 1. classic-tone.mp3
**Description**: iPhone-like standard notification sound (tri-tone or similar)
**Characteristics**: Clear, standard, familiar notification tone
**Recommended sources**:
- Search: "tri-tone notification sound" or "classic notification sound"
- Example: Similar to iOS default notification

### 2. bright-ding.mp3
**Description**: Sharp, clear single ding sound
**Characteristics**: Bright, crisp, single tone
**Recommended sources**:
- Search: "bright ding sound" or "service bell ding"

### 3. double-ping.mp3
**Description**: Two-tone ping sequence
**Characteristics**: Two quick consecutive pings
**Recommended sources**:
- Search: "double ping notification" or "two-tone ping"

### 4. service-bell.mp3
**Description**: Desk/service bell sound
**Characteristics**: Classic "ding" like a reception desk bell
**Recommended sources**:
- Search: "service bell sound" or "desk bell"

### 5. alert-beep.mp3
**Description**: Clear beep pattern
**Characteristics**: Electronic beep, attention-grabbing
**Recommended sources**:
- Search: "alert beep sound" or "notification beep"

### 6. ascending-chime.mp3
**Description**: Progressive chime sound (quiet to louder)
**Characteristics**: Melodic, ascending notes
**Recommended sources**:
- Search: "ascending chime" or "progressive notification"

### 7. notification-pop.mp3
**Description**: Modern pop/click sound
**Characteristics**: Short, crisp, modern notification
**Recommended sources**:
- Search: "notification pop sound" or "modern notification"

### 8. cheerful-chirp.mp3
**Description**: Upbeat chirp sound
**Characteristics**: Pleasant, positive, cheerful tone
**Recommended sources**:
- Search: "cheerful notification" or "positive chirp"

### 9. urgent-alert.mp3
**Description**: Attention-grabbing alert
**Characteristics**: More prominent than others, urgent feeling
**Recommended sources**:
- Search: "urgent alert sound" or "attention notification"

### 10. melodic-bells.mp3
**Description**: Short melodic bell sequence
**Characteristics**: Musical, pleasant bell melody (2-3 notes)
**Recommended sources**:
- Search: "melodic bells notification" or "bell chime sequence"

## Recommended Sound Libraries

### Free Royalty-Free Sources:
1. **Freesound.org** - https://freesound.org/
   - Large collection of Creative Commons sounds
   - Search for "notification" or specific sound types
   - Download as MP3 or convert from WAV

2. **Pixabay** - https://pixabay.com/sound-effects/
   - Free for commercial use
   - Search: "notification sound"
   - Direct MP3 downloads available

3. **Zapsplat** - https://www.zapsplat.com/
   - Free with attribution (or paid for no attribution)
   - Large notification sound collection
   - Search by category: Notifications/Alerts

4. **Mixkit** - https://mixkit.co/free-sound-effects/notification/
   - Free notification sounds
   - No attribution required
   - Direct downloads

## Sound Specifications

### Technical Requirements:
- **Format**: MP3
- **Duration**: 1-3 seconds (recommended)
- **Quality**: 128kbps or higher
- **Volume**: Normalized (consistent across all files)

### Design Characteristics:
- **Clarity**: Sounds should be clear and distinct
- **Noticeability**: More prominent than existing relaxing sounds
- **Variety**: Different types (bells, beeps, tones, chimes)
- **Professional**: Avoid harsh or jarring sounds

## Installation Steps

1. Download 10 MP3 files matching the descriptions above
2. Rename them to match the exact filenames listed (e.g., `classic-tone.mp3`)
3. Place all files in the `public/sounds/` directory
4. Test each sound using the preview button in the settings panel
5. Adjust volume levels if needed (app has volume control 0-100%)

## Current Existing Sounds

These sounds are already in `public/sounds/`:
- gentle-bell.mp3
- chime.mp3
- soft-alarm.mp3
- digital-beep.mp3

Make sure your new sounds are more noticeable than these existing relaxing sounds.

## Verification

After adding the files:
1. Start the dev server: `pnpm dev`
2. Open http://localhost:3009
3. Click settings (gear icon)
4. Open the Sound dropdown
5. Click the preview button (▶) for each new sound
6. Verify all 14 sounds play correctly

## Notes

- The application will attempt to play these sounds even if they don't exist (but will fail silently)
- All translations are already implemented (English/Japanese)
- The UI is fully responsive across mobile/tablet/desktop
- Volume control applies to all sounds
