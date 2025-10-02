'use client'

import * as Select from '@radix-ui/react-select'
import { Check, ChevronDown, Play } from 'lucide-react'
import type { SoundPreset } from '@/lib/stores/settingsStore'
import { audioManager } from '@/lib/audio/audioManager'
import { useSettingsStore } from '@/lib/stores/settingsStore'

interface SoundSelectorProps {
  value: SoundPreset
  onChange: (preset: SoundPreset) => void
}

const SOUND_OPTIONS: { value: SoundPreset; label: string }[] = [
  { value: 'gentle-bell', label: 'Gentle Bell' },
  { value: 'chime', label: 'Chime' },
  { value: 'soft-alarm', label: 'Soft Alarm' },
  { value: 'digital-beep', label: 'Digital Beep' },
  { value: 'none', label: 'None' },
]

export function SoundSelector({ value, onChange }: SoundSelectorProps) {
  const volume = useSettingsStore((state) => state.volume)

  const handlePreview = (preset: SoundPreset) => {
    audioManager.play(preset, volume)
  }

  const currentLabel = SOUND_OPTIONS.find((opt) => opt.value === value)?.label || 'Select'

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-text-primary">
        Sound
      </label>

      <Select.Root value={value} onValueChange={onChange}>
        <Select.Trigger
          className="flex w-full items-center justify-between rounded-lg border-2 border-bg-secondary bg-white px-4 py-3 text-left text-text-primary shadow-soft transition-colors hover:border-primary-green focus:border-primary-green focus:outline-none focus:ring-2 focus:ring-primary-green"
          aria-label="Select sound"
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
              {SOUND_OPTIONS.map((option) => (
                <Select.Item
                  key={option.value}
                  value={option.value}
                  className="relative flex cursor-pointer items-center justify-between rounded-md px-8 py-2 text-sm text-text-primary outline-none data-[highlighted]:bg-primary-green data-[highlighted]:text-white"
                >
                  <Select.ItemText>{option.label}</Select.ItemText>
                  <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                    <Check className="h-4 w-4" />
                  </Select.ItemIndicator>

                  {option.value !== 'none' && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        handlePreview(option.value)
                      }}
                      className="ml-2 rounded p-1 hover:bg-bg-secondary"
                      aria-label={`Preview ${option.label}`}
                    >
                      <Play className="h-3 w-3" />
                    </button>
                  )}
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}
