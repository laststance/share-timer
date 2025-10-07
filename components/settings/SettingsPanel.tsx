'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useSettingsStore } from '@/lib/stores/settingsStore'
import useStore from '@/lib/hooks/useStore'
import { SoundSelector } from './SoundSelector'
import { VolumeControl } from './VolumeControl'
import { NotificationToggle } from './NotificationToggle'

interface SettingsPanelProps {
  isOpen: boolean
  onClose: () => void
}

export function SettingsPanel({ isOpen, onClose }: SettingsPanelProps) {
  const t = useTranslations('Settings')
  const settingsState = useStore(useSettingsStore, (state) => state)
  const soundPreset = settingsState?.soundPreset ?? 'gentle-bell'
  const volume = settingsState?.volume ?? 70
  const setSoundPreset = settingsState?.setSoundPreset ?? (() => {})
  const setVolume = settingsState?.setVolume ?? (() => {})

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-md translate-x-[-50%] translate-y-[-50%] rounded-lg bg-bg-primary p-6 shadow-lg focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <Dialog.Title className="text-2xl font-bold text-text-primary">
              {t('title')}
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                className="rounded-full p-3 text-text-secondary transition-colors hover:bg-bg-secondary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-green"
                aria-label={t('close')}
              >
                <X className="h-5 w-5" />
              </button>
            </Dialog.Close>
          </div>

          {/* Settings Content */}
          <div className="space-y-6">
            <SoundSelector value={soundPreset} onChange={setSoundPreset} />
            <VolumeControl value={volume} onChange={setVolume} />
            <NotificationToggle />
          </div>

          {/* Footer */}
          <div className="mt-6 flex justify-end">
            <Dialog.Close asChild>
              <button className="rounded-lg bg-primary-green px-6 py-3 font-semibold text-white shadow-soft transition-colors hover:bg-primary-green-dark focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2">
                {t('done')}
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
