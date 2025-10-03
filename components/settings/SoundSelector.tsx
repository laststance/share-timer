'use client'

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
  'gentle-bell',
  'chime',
  'soft-alarm',
  'digital-beep',
  'none',
]

export function SoundSelector({ value, onChange }: SoundSelectorProps) {
  const t = useTranslations('Settings')
  const tPresets = useTranslations('SoundPresets')
  const volume = useSettingsStore((state) => state.volume)

  /**
   * Handles the preview button click to play the selected sound
   * @param e - Mouse event to prevent default select behavior
   * @param preset - The sound preset to preview
   */
  const handlePreview = (e: React.MouseEvent, preset: SoundPreset) => {
    e.preventDefault()
    e.stopPropagation()
    audioManager.play(preset, volume)
  }

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
            className="overflow-hidden rounded-lg border-2 border-bg-secondary bg-white shadow-lg"
            position="popper"
            sideOffset={5}
          >
            <Select.Viewport className="p-1">
              {SOUND_OPTIONS.map((preset) => (
                <div
                  key={preset}
                  className="relative flex items-center justify-between rounded-md px-2 py-2"
                >
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
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}
