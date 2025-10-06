'use client'

import * as React from 'react'
import * as Select from '@radix-ui/react-select'
import { Check, ChevronDown, Play } from 'lucide-react'
import { useTranslations } from 'next-intl'
import type { SoundPreset } from '@/lib/stores/settingsStore'
import { audioManager } from '@/lib/audio/audioManager'
import { useSettingsStore } from '@/lib/stores/settingsStore'

interface SoundSelectorProps {
  value: SoundPreset
  onChange: (preset: SoundPreset) => void
}

const SOUND_OPTIONS: SoundPreset[] = [
  // Existing relaxing sounds
  'gentle-bell',
  'chime',
  'soft-alarm',
  'digital-beep',
  // New noticeable notification sounds
  'classic-tone',
  'bright-ding',
  'double-ping',
  'service-bell',
  'alert-beep',
  'ascending-chime',
  'notification-pop',
  'cheerful-chirp',
  'urgent-alert',
  'melodic-bells',
  'none',
]

export function SoundSelector({ value, onChange }: SoundSelectorProps) {
  const t = useTranslations('Settings')
  const tPresets = useTranslations('SoundPresets')
  const volume = useSettingsStore((state) => state.volume)

  // Track preview playback state
  const [previewingSound, setPreviewingSound] = React.useState<SoundPreset | null>(null)
  const [previewProgress, setPreviewProgress] = React.useState(0)

  /**
   * Handles the preview button click to play the selected sound
   * @param e - Mouse event to prevent default select behavior
   * @param preset - The sound preset to preview
   */
  const handlePreview = (e: React.MouseEvent, preset: SoundPreset) => {
    e.preventDefault()
    e.stopPropagation()

    setPreviewingSound(preset)
    setPreviewProgress(0)

    audioManager.play(preset, volume, (progress) => {
      setPreviewProgress(progress)

      // Reset state when playback completes
      if (progress >= 100) {
        setTimeout(() => {
          setPreviewingSound(null)
          setPreviewProgress(0)
        }, 100)
      }
    })
  }

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      audioManager.stop()
    }
  }, [])

  const currentLabel = tPresets(value)

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-text-primary">
        {t('sound')}
      </label>

      <Select.Root value={value} onValueChange={onChange}>
        <Select.Trigger
          className="flex w-full items-center justify-between rounded-lg border-2 border-bg-secondary bg-white px-4 py-3 text-left text-text-primary shadow-soft transition-colors hover:border-primary-green focus:border-primary-green focus:outline-none focus:ring-2 focus:ring-primary-green"
          aria-label={t('selectSound')}
        >
          <Select.Value>{currentLabel}</Select.Value>
          <Select.Icon>
            <ChevronDown className="h-4 w-4 text-text-secondary" />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            className="overflow-scroll h-64 rounded-lg border-2 border-bg-secondary bg-white shadow-lg"
            position="popper"
            sideOffset={5}
          >
            <Select.Viewport className="p-1">
              {SOUND_OPTIONS.map((preset) => (
                <div
                  key={preset}
                  className="relative flex flex-col"
                >
                  <div className="flex items-center justify-between rounded-md px-2 py-2">
                    <Select.Item
                      value={preset}
                      className="flex-1 cursor-pointer rounded-md px-6 py-1 text-sm text-text-primary outline-none data-[highlighted]:bg-primary-green data-[highlighted]:text-white"
                    >
                      <Select.ItemText>{tPresets(preset)}</Select.ItemText>
                      <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                        <Check className="h-4 w-4" />
                      </Select.ItemIndicator>
                    </Select.Item>

                    {preset !== 'none' && (
                      <button
                        type="button"
                        onPointerDown={(e) => handlePreview(e, preset)}
                        className="ml-2 rounded p-2 text-text-primary hover:bg-bg-secondary hover:text-primary-green transition-colors"
                        aria-label={t('previewSound', { sound: tPresets(preset) })}
                      >
                        <Play className="h-3 w-3 fill-current" />
                      </button>
                    )}
                  </div>

                  {/* Progress bar - shown when this sound is previewing */}
                  {previewingSound === preset && (
                    <div className="mx-2 mb-2 px-2">
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-bg-secondary">
                        <div
                          className="h-full rounded-full bg-primary-green transition-all duration-100 ease-linear"
                          style={{ width: `${previewProgress}%` }}
                          role="progressbar"
                          aria-valuenow={Math.round(previewProgress)}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={t('previewProgress')}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}
