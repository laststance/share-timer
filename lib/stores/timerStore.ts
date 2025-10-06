import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface TimerState {
  // State
  timeRemaining: number // seconds
  initialTime: number // seconds
  isRunning: boolean
  isPaused: boolean

  // Actions
  setTime: (minutes: number, seconds: number) => void
  start: () => void
  pause: () => void
  reset: () => void
  tick: () => void
}

export const useTimerStore = create<TimerState>()(
  persist(
    (set, get) => ({
      // Initial state
      timeRemaining: 300, // 5 minutes default
      initialTime: 300,
      isRunning: false,
      isPaused: false,

      // Actions
      setTime: (minutes: number, seconds: number) => {
        const totalSeconds = minutes * 60 + seconds
        set({
          timeRemaining: totalSeconds,
          initialTime: totalSeconds,
          isRunning: false,
          isPaused: false,
        })
      },

      start: () => {
        set({
          isRunning: true,
          isPaused: false,
        })
      },

      pause: () => {
        set({
          isRunning: false,
          isPaused: true,
        })
      },

      reset: () => {
        const { initialTime } = get()
        set({
          timeRemaining: initialTime,
          isRunning: false,
          isPaused: false,
        })
      },

      tick: () => {
        const { timeRemaining, isRunning } = get()
        if (isRunning && timeRemaining > 0) {
          set({ timeRemaining: timeRemaining - 1 })

          // Auto-stop when reaching zero
          if (timeRemaining - 1 === 0) {
            set({ isRunning: false })
          }
        }
      },
    }),
    {
      name: 'timer-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
