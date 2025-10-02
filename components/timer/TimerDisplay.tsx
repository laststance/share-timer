'use client'

import { motion } from 'framer-motion'

interface TimerDisplayProps {
  timeRemaining: number // seconds
  isRunning: boolean
  isPaused: boolean
  initialTime: number
}

export function TimerDisplay({
  timeRemaining,
  isRunning,
  isPaused,
  initialTime,
}: TimerDisplayProps) {
  // Format time as MM:SS
  const minutes = Math.floor(timeRemaining / 60)
  const seconds = timeRemaining % 60
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`

  // Calculate progress percentage
  const progress = initialTime > 0 ? (timeRemaining / initialTime) * 100 : 0

  // Determine color based on state
  const getColor = () => {
    if (timeRemaining === 0) return '#EF4444' // red when complete
    if (isPaused) return '#FBBF24' // amber when paused
    if (isRunning) return '#10B981' // green when running
    return '#9CA3AF' // gray when idle
  }

  const color = getColor()

  // SVG circle properties
  const size = 300
  const strokeWidth = 12
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="relative"
        animate={isRunning ? { scale: [1, 1.02, 1] } : { scale: 1 }}
        transition={{
          duration: 1,
          repeat: isRunning ? Infinity : 0,
          ease: 'easeInOut',
        }}
      >
        {/* SVG Circular Progress */}
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth={strokeWidth}
          />
          {/* Progress circle */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
        </svg>

        {/* Timer text in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="font-mono text-6xl font-bold"
            style={{ color }}
            animate={
              timeRemaining === 0
                ? { scale: [1, 1.1, 1] }
                : { scale: 1 }
            }
            transition={{ duration: 0.3 }}
          >
            {formattedTime}
          </motion.span>
        </div>
      </motion.div>
    </div>
  )
}
