'use client'

import { useEffect } from 'react'
import { useNotificationStore } from '@/lib/stores/notificationStore'
import useStore from '@/lib/hooks/useStore'
import {
  registerServiceWorker,
  getNotificationPermission,
} from '@/lib/notifications/notificationManager'

/**
 * ServiceWorkerRegistration Component
 * Registers the Service Worker on app load and syncs notification permission state
 */
export function ServiceWorkerRegistration() {
  const notificationStore = useStore(useNotificationStore, (state) => state)

  useEffect(() => {
    const setPermission = notificationStore?.setPermission ?? (() => {})
    
    // Register Service Worker
    registerServiceWorker().then((registration) => {
      if (registration) {
        console.log('[App] Service Worker registered successfully')
      }
    })

    // Sync initial permission state
    const permission = getNotificationPermission()
    setPermission(permission)

    // Listen for permission changes (some browsers support this)
    if ('permissions' in navigator) {
      navigator.permissions
        .query({ name: 'notifications' as PermissionName })
        .then((permissionStatus) => {
          permissionStatus.addEventListener('change', () => {
            setPermission(getNotificationPermission())
          })
        })
        .catch((error) => {
          console.warn('[Notifications] Permission monitoring not supported:', error)
        })
    }
  }, [notificationStore])

  // This component doesn't render anything
  return null
}
