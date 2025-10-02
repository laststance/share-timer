import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { NotificationPermission } from '../notifications/notificationManager'

interface NotificationState {
  // State
  enabled: boolean
  permission: NotificationPermission

  // Actions
  setEnabled: (enabled: boolean) => void
  setPermission: (permission: NotificationPermission) => void
}

export const useNotificationStore = create<NotificationState>()(
  persist(
    (set) => ({
      // Initial state
      enabled: true, // User preference to enable/disable notifications
      permission: 'default',

      // Actions
      setEnabled: (enabled: boolean) => {
        set({ enabled })
      },

      setPermission: (permission: NotificationPermission) => {
        set({ permission })
      },
    }),
    {
      name: 'notification-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
