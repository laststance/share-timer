import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type SoundPreset =
  | 'gentle-bell'
  | 'chime'
  | 'soft-alarm'
  | 'digital-beep'
  | 'none'

interface SettingsState {
  // State
  soundPreset: SoundPreset
  volume: number // 0-100

  // Actions
  setSoundPreset: (preset: SoundPreset) => void
  setVolume: (volume: number) => void
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      // Initial state
      soundPreset: 'gentle-bell',
      volume: 70,

      // Actions
      setSoundPreset: (preset: SoundPreset) => {
        set({ soundPreset: preset })
      },

      setVolume: (volume: number) => {
        // Clamp volume between 0-100
        const clampedVolume = Math.max(0, Math.min(100, volume))
        set({ volume: clampedVolume })
      },
    }),
    {
      name: 'settings-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
