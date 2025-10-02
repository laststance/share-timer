'use client'

import { useEffect } from 'react'
import { useTimerStore } from '@/lib/stores/timerStore'
import { TimerDisplay } from '@/components/timer/TimerDisplay'
import { TimerControls } from '@/components/timer/TimerControls'
import { TimeInput } from '@/components/timer/TimeInput'

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

  // Set up interval for ticking when timer is running
  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      tick()
    }, 1000)

    return () => clearInterval(interval)
  }, [isRunning, tick])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12 p-8">
      <div className="mx-auto w-full max-w-2xl space-y-12">
        {/* App Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-text-primary">
            Share Timer
          </h1>
          <p className="mt-2 text-text-secondary">
            Simple, relaxing timer for your daily tasks
          </p>
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
    </main>
  )
}
