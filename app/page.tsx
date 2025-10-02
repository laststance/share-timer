'use client'

import { useEffect, useState, useRef } from 'react'
import { Settings } from 'lucide-react'
import { useTimerStore } from '@/lib/stores/timerStore'
import { useSettingsStore } from '@/lib/stores/settingsStore'
import { audioManager } from '@/lib/audio/audioManager'
import { TimerDisplay } from '@/components/timer/TimerDisplay'
import { TimerControls } from '@/components/timer/TimerControls'
import { TimeInput } from '@/components/timer/TimeInput'
import { SettingsPanel } from '@/components/settings/SettingsPanel'

export default function Home() {
  const {
    timeRemaining,
    initialTime,
    isRunning,
    isPaused,
    setTime,
    start,
    pause,
    reset,
    tick,
  } = useTimerStore()

  const { soundPreset, volume } = useSettingsStore()
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const previousTimeRef = useRef(timeRemaining)

  // Set up interval for ticking when timer is running
  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      tick()
    }, 1000)

    return () => clearInterval(interval)
  }, [isRunning, tick])

  // Play sound when timer completes
  useEffect(() => {
    // Detect when timer just hit 0
    if (previousTimeRef.current > 0 && timeRemaining === 0) {
      audioManager.play(soundPreset, volume)
    }
    previousTimeRef.current = timeRemaining
  }, [timeRemaining, soundPreset, volume])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12 p-8">
      <div className="mx-auto w-full max-w-2xl space-y-12">
        {/* Header with Settings Button */}
        <div className="relative text-center">
          <h1 className="text-4xl font-bold text-text-primary">
            Share Timer
          </h1>
          <p className="mt-2 text-text-secondary">
            Simple, relaxing timer for your daily tasks
          </p>

          {/* Settings Button */}
          <button
            onClick={() => setIsSettingsOpen(true)}
            className="absolute right-0 top-0 rounded-full p-2 text-text-secondary transition-colors hover:bg-bg-secondary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-green"
            aria-label="Open settings"
          >
            <Settings className="h-6 w-6" />
          </button>
        </div>

        {/* Timer Display */}
        <TimerDisplay
          timeRemaining={timeRemaining}
          isRunning={isRunning}
          isPaused={isPaused}
          initialTime={initialTime}
        />

        {/* Timer Controls */}
        <TimerControls
          onStart={start}
          onPause={pause}
          onReset={reset}
          isRunning={isRunning}
          isPaused={isPaused}
        />

        {/* Time Input */}
        <TimeInput
          onTimeChange={setTime}
          disabled={isRunning}
          initialMinutes={Math.floor(initialTime / 60)}
          initialSeconds={initialTime % 60}
        />
      </div>

      {/* Settings Panel */}
      <SettingsPanel
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </main>
  )
}
