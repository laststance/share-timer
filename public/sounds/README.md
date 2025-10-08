# Sound Preset Files

This directory contains the audio files for the timer completion sounds.

## Sound Presets

| Filename               | Description                        | Duration (s) | Source                                                                                                                 |
| ---------------------- | ---------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `gentle-bell.mp3`      | Soft, calming bell sound           | 31.87        | Built-in legacy asset                                                                                                  |
| `chime.mp3`            | Wind chime sound                   | 31.87        | Built-in legacy asset                                                                                                  |
| `soft-alarm.mp3`       | Gentle wake-up alarm               | 31.87        | Built-in legacy asset                                                                                                  |
| `digital-beep.mp3`     | Modern digital beep sound          | 31.87        | Built-in legacy asset                                                                                                  |
| `classic-tone.mp3`     | iOS-style tri-tone notification    | 3.01         | [Mixkit – Magic notification ring 2344](https://mixkit.co/free-sound-effects/discover/magic-notification-ring-2344/)   |
| `bright-ding.mp3`      | Bright single notification ding    | 3.36         | [Mixkit – Bell notification 933](https://mixkit.co/free-sound-effects/discover/bell-notification-933/)                 |
| `double-ping.mp3`      | Two-tone digital ping              | 1.33         | [Mixkit – Software interface back 2575](https://mixkit.co/free-sound-effects/discover/software-interface-back-2575/)   |
| `service-bell.mp3`     | Classic desk bell ding             | 1.18         | [Mixkit – Service bell 931](https://mixkit.co/free-sound-effects/discover/service-bell-931/)                           |
| `alert-beep.mp3`       | Attention-grabbing electronic beep | 0.70         | [Mixkit – Sci-fi click 900](https://mixkit.co/free-sound-effects/discover/sci-fi-click-900/)                           |
| `ascending-chime.mp3`  | Progressive multi-note chime       | 3.02         | [Mixkit – Happy bells notification 937](https://mixkit.co/free-sound-effects/discover/happy-bells-notification-937/)   |
| `notification-pop.mp3` | Modern pop/click notification      | 1.07         | [Mixkit – Message pop alert 2354](https://mixkit.co/free-sound-effects/discover/message-pop-alert-2354/)               |
| `cheerful-chirp.mp3`   | Upbeat positive chirp              | 1.96         | [Mixkit – Correct answer tone 2870](https://mixkit.co/free-sound-effects/discover/correct-answer-tone-2870/)           |
| `urgent-alert.mp3`     | Prominent escalation alert         | 3.97         | [Mixkit – Clear announce tones 2861](https://mixkit.co/free-sound-effects/discover/clear-announce-tones-2861/)         |
| `melodic-bells.mp3`    | Pleasant melodic bell sequence     | 2.35         | [Mixkit – Software interface start 2574](https://mixkit.co/free-sound-effects/discover/software-interface-start-2574/) |

## File Specifications

- **Format**: MP3
- **Duration**: 2-5 seconds recommended
- **Quality**: Medium quality (128-192 kbps) for balance between quality and file size
- **Volume**: Normalize to consistent levels

## Where to Get Sound Files

### Free Sources:

- [Freesound.org](https://freesound.org/) - Community-uploaded sounds (Creative Commons)
- [Pixabay](https://pixabay.com/sound-effects/) - Royalty-free sound effects
- [Zapsplat](https://www.zapsplat.com/) - Free sound effects library
- [BBC Sound Effects](https://sound-effects.bbcrewind.co.uk/) - BBC archive

### Search Keywords:

- "notification tone"
- "bell ding"
- "digital ping"
- "alert beep"
- "ascending chime"

## License Requirements

Ensure any sounds you add comply with:

- Commercial use permissions (if applicable)
- Attribution requirements (add to ATTRIBUTION.md if needed)
- No restrictions on modification

## Testing

After updating sound files, test them using:

- Open the app settings panel
- Select each sound preset
- Click the preview button (play icon)
- Adjust volume to ensure consistent levels

## Implementation Note

The application expects files at these exact paths (lowercase, hyphenated):

- `/sounds/gentle-bell.mp3`
- `/sounds/chime.mp3`
- `/sounds/soft-alarm.mp3`
- `/sounds/digital-beep.mp3`
- `/sounds/classic-tone.mp3`
- `/sounds/bright-ding.mp3`
- `/sounds/double-ping.mp3`
- `/sounds/service-bell.mp3`
- `/sounds/alert-beep.mp3`
- `/sounds/ascending-chime.mp3`
- `/sounds/notification-pop.mp3`
- `/sounds/cheerful-chirp.mp3`
- `/sounds/urgent-alert.mp3`
- `/sounds/melodic-bells.mp3`
