'use client'

import { useEffect, useState, useRef } from 'react'
import { Settings } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useTimerStore } from '@/lib/stores/timerStore'
import { useSettingsStore } from '@/lib/stores/settingsStore'
import { useNotificationStore } from '@/lib/stores/notificationStore'
import { audioManager } from '@/lib/audio/audioManager'
import { showNotification } from '@/lib/notifications/notificationManager'
import { TimerDisplay } from '@/components/timer/TimerDisplay'
import { TimerControls } from '@/components/timer/TimerControls'
import { TimeInput } from '@/components/timer/TimeInput'
import { SettingsPanel } from '@/components/settings/SettingsPanel'
import { LanguageToggle } from '@/components/LanguageToggle'
import { NotificationTest } from '@/components/notifications/NotificationTest'

export default function Home() {
  const t = useTranslations('App')
  const tNotifications = useTranslations('Notifications')
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
  const { enabled: notificationsEnabled, permission } = useNotificationStore()
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

  // Play sound and show notification when timer completes
  useEffect(() => {
    // Detect when timer just hit 0
    if (previousTimeRef.current > 0 && timeRemaining === 0) {
      // Play sound
      audioManager.play(soundPreset, volume)

      // Show notification if enabled and permission granted
      if (notificationsEnabled && permission === 'granted') {
        showNotification({
          title: tNotifications('timerCompleteTitle'),
          body: tNotifications('timerCompleteBody'),
        }).catch((error) => {
          console.error('[Timer] Failed to show notification:', error)
        })
      }
    }
    previousTimeRef.current = timeRemaining
  }, [timeRemaining, soundPreset, volume, notificationsEnabled, permission, tNotifications])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12 p-8">
      <div className="mx-auto w-full max-w-2xl space-y-12">
        {/* Header with Language and Settings */}
        <div className="relative text-center">
          <h1 className="text-4xl font-bold text-text-primary">{t('title')}</h1>
          <p className="mt-2 text-text-secondary">{t('description')}</p>

          {/* Language Toggle - Left Side */}
          <div className="absolute left-0 top-0">
            <LanguageToggle />
          </div>

          {/* Settings Button - Right Side */}
          <button
            onClick={() => setIsSettingsOpen(true)}
            className="absolute right-0 top-0 rounded-full p-3 text-text-secondary transition-colors hover:bg-bg-secondary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-green"
            aria-label={t('description')}
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

        {/* Notification Test - Development/Testing UI */}
        <div className="mt-8 border-t border-bg-secondary pt-8">
          <NotificationTest />
        </div>
      </div>

      {/* Settings Panel */}
      <SettingsPanel
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </main>
  )
}
