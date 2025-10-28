# Sound Files Required for New Notification Sounds

This guide explains which audio files you need to download for the 10 new notification sound presets.

> **Current status (2025-10-08):** ✅ All ten notification presets now use distinct Mixkit recordings. See the replacement summary below for exact sources, durations, and verification results. The steps that follow remain available if future swaps are required.

## Overview

The code implementation is complete, but you need to add 10 new MP3 audio files to the `public/sounds/` directory. Each file should be a short, clear notification sound (1-3 seconds recommended).

## Replacement Summary (2025-10-08)

| Filename               | Description                       | Duration (s) | Source                                                                                                                 |
| ---------------------- | --------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `classic-tone.mp3`     | iPhone-like tri-tone notification | 3.01         | [Mixkit – Magic notification ring 2344](https://mixkit.co/free-sound-effects/discover/magic-notification-ring-2344/)   |
| `bright-ding.mp3`      | Bright, crisp single tone         | 3.36         | [Mixkit – Bell notification 933](https://mixkit.co/free-sound-effects/discover/bell-notification-933/)                 |
| `double-ping.mp3`      | Two quick consecutive pings       | 1.33         | [Mixkit – Software interface back 2575](https://mixkit.co/free-sound-effects/discover/software-interface-back-2575/)   |
| `service-bell.mp3`     | Desk/service bell ding            | 1.18         | [Mixkit – Service bell 931](https://mixkit.co/free-sound-effects/discover/service-bell-931/)                           |
| `alert-beep.mp3`       | Attention-grabbing beep           | 0.70         | [Mixkit – Sci-fi click 900](https://mixkit.co/free-sound-effects/discover/sci-fi-click-900/)                           |
| `ascending-chime.mp3`  | Progressive melodic chime         | 3.02         | [Mixkit – Happy bells notification 937](https://mixkit.co/free-sound-effects/discover/happy-bells-notification-937/)   |
| `notification-pop.mp3` | Modern pop/click notification     | 1.07         | [Mixkit – Message pop alert 2354](https://mixkit.co/free-sound-effects/discover/message-pop-alert-2354/)               |
| `cheerful-chirp.mp3`   | Upbeat chirp tone                 | 1.96         | [Mixkit – Correct answer tone 2870](https://mixkit.co/free-sound-effects/discover/correct-answer-tone-2870/)           |
| `urgent-alert.mp3`     | Prominent escalating alert        | 3.97         | [Mixkit – Clear announce tones 2861](https://mixkit.co/free-sound-effects/discover/clear-announce-tones-2861/)         |
| `melodic-bells.mp3`    | Short melodic bell sequence       | 2.35         | [Mixkit – Software interface start 2574](https://mixkit.co/free-sound-effects/discover/software-interface-start-2574/) |

All files were normalized to 192 kbps MP3 at 44.1 kHz using `ffmpeg`, verified via `file public/sounds/<name>.mp3`.

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
