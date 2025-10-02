import type { SoundPreset } from '../stores/settingsStore'

class AudioManager {
  private audio: HTMLAudioElement | null = null

  /**
   * Play a sound preset at the specified volume
   * @param preset - The sound preset to play
   * @param volume - Volume level (0-100)
   */
  play(preset: SoundPreset, volume: number) {
    // Don't play anything if preset is 'none'
    if (preset === 'none') return

    // Stop any currently playing audio
    this.stop()

    // Create new audio element
    this.audio = new Audio(`/sounds/${preset}.mp3`)
    this.audio.volume = volume / 100

    // Play the audio
    this.audio.play().catch((error) => {
      console.error('Error playing audio:', error)
    })
  }

  /**
   * Stop the currently playing audio
   */
  stop() {
    if (this.audio) {
      this.audio.pause()
      this.audio.currentTime = 0
      this.audio = null
    }
  }
}

// Export singleton instance
export const audioManager = new AudioManager()
