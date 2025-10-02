'use client'

import { useState } from 'react'

interface TimeInputProps {
  onTimeChange: (minutes: number, seconds: number) => void
  disabled: boolean
  initialMinutes?: number
  initialSeconds?: number
}

export function TimeInput({
  onTimeChange,
  disabled,
  initialMinutes = 5,
  initialSeconds = 0,
}: TimeInputProps) {
  const [minutes, setMinutes] = useState(initialMinutes)
  const [seconds, setSeconds] = useState(initialSeconds)

  const handleMinutesChange = (value: string) => {
    const num = parseInt(value) || 0
    const clamped = Math.max(0, Math.min(99, num))
    setMinutes(clamped)
    onTimeChange(clamped, seconds)
  }

  const handleSecondsChange = (value: string) => {
    const num = parseInt(value) || 0
    const clamped = Math.max(0, Math.min(59, num))
    setSeconds(clamped)
    onTimeChange(minutes, clamped)
  }

  return (
    <div className="flex items-center justify-center gap-6">
      {/* Minutes Input */}
      <div className="flex flex-col items-center gap-2">
        <label
          htmlFor="minutes"
          className="text-sm font-medium text-text-secondary"
        >
          Minutes
        </label>
        <input
          id="minutes"
          type="number"
          min="0"
          max="99"
          value={minutes}
          onChange={(e) => handleMinutesChange(e.target.value)}
          disabled={disabled}
          className="w-24 rounded-lg border-2 border-bg-secondary bg-white px-4 py-3 text-center text-2xl font-semibold text-text-primary shadow-soft transition-colors focus:border-primary-green focus:outline-none focus:ring-2 focus:ring-primary-green disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>

      {/* Separator */}
      <span className="mt-6 text-3xl font-bold text-text-secondary">:</span>

      {/* Seconds Input */}
      <div className="flex flex-col items-center gap-2">
        <label
          htmlFor="seconds"
          className="text-sm font-medium text-text-secondary"
        >
          Seconds
        </label>
        <input
          id="seconds"
          type="number"
          min="0"
          max="59"
          value={seconds}
          onChange={(e) => handleSecondsChange(e.target.value)}
          disabled={disabled}
          className="w-24 rounded-lg border-2 border-bg-secondary bg-white px-4 py-3 text-center text-2xl font-semibold text-text-primary shadow-soft transition-colors focus:border-primary-green focus:outline-none focus:ring-2 focus:ring-primary-green disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    </div>
  )
}
