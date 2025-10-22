import type { SoundPreset } from '../stores/settingsStore'

export const SUPPORTED_SOUND_PRESETS = [
  'bright-ding',
  'double-ping',
  'service-bell',
  'alert-beep',
  'ascending-chime',
  'notification-pop',
  'cheerful-chirp',
  'urgent-alert',
  'melodic-bells',
] as const satisfies ReadonlyArray<Exclude<SoundPreset, 'none'>>

const SUPPORTED_SOUND_SET = new Set<SoundPreset>(SUPPORTED_SOUND_PRESETS)

class AudioManager {
  private audio: HTMLAudioElement | null = null
  private progressCallback:
    | ((progress: number, currentTime: number, duration: number) => void)
    | null = null

  /**
   * Play a sound preset at the specified volume with optional progress tracking
   * @param preset - The sound preset to play
   * @param volume - Volume level (0-100)
   * @param onProgress - Optional callback for playback progress updates
   */
  play(
    preset: SoundPreset,
    volume: number,
    onProgress?: (
      progress: number,
      currentTime: number,
      duration: number,
    ) => void,
  ) {
    // Don't play anything if preset is 'none'
    if (preset === 'none') return

    // Skip presets without an available audio file to prevent loading errors
    if (!SUPPORTED_SOUND_SET.has(preset)) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn(
          `Sound preset "${preset}" is not supported. Skipping playback.`,
        )
      }
      return
    }

    // Stop any currently playing audio
    this.stop()

    // Store progress callback
    this.progressCallback = onProgress || null

    // Create new audio element
    this.audio = new Audio(`/sounds/${preset}.mp3`)
    this.audio.volume = volume / 100

    // Set up progress tracking event listeners
    if (this.progressCallback) {
      this.audio.addEventListener('loadedmetadata', this.handleLoadedMetadata)
      this.audio.addEventListener('timeupdate', this.handleTimeUpdate)
      this.audio.addEventListener('ended', this.handleEnded)
    }

    // Play the audio
    this.audio.play().catch((error) => {
      console.error('Error playing audio:', error)
      this.cleanup()
    })
  }

  /**
   * Handle loadedmetadata event to get initial duration
   */
  private handleLoadedMetadata = () => {
    if (this.audio && this.progressCallback) {
      const duration = this.audio.duration
      const currentTime = this.audio.currentTime
      const progress = duration > 0 ? (currentTime / duration) * 100 : 0
      this.progressCallback(progress, currentTime, duration)
    }
  }

  /**
   * Handle timeupdate event to track playback progress
   */
  private handleTimeUpdate = () => {
    if (this.audio && this.progressCallback) {
      const duration = this.audio.duration
      const currentTime = this.audio.currentTime
      const progress = duration > 0 ? (currentTime / duration) * 100 : 0
      this.progressCallback(progress, currentTime, duration)
    }
  }

  /**
   * Handle ended event when playback completes
   */
  private handleEnded = () => {
    if (this.progressCallback) {
      this.progressCallback(100, 0, 0)
    }
    this.cleanup()
  }

  /**
   * Stop the currently playing audio
   */
  stop() {
    this.cleanup()
  }

  /**
   * Clean up audio element and event listeners
   */
  private cleanup() {
    if (this.audio) {
      this.audio.removeEventListener(
        'loadedmetadata',
        this.handleLoadedMetadata,
      )
      this.audio.removeEventListener('timeupdate', this.handleTimeUpdate)
      this.audio.removeEventListener('ended', this.handleEnded)
      this.audio.pause()
      this.audio.currentTime = 0
      this.audio = null
    }
    this.progressCallback = null
  }
}

// Export singleton instance
export const audioManager = new AudioManager()
