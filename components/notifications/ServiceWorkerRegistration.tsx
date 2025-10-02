'use client'

import { useEffect } from 'react'
import { useNotificationStore } from '@/lib/stores/notificationStore'
import {
  registerServiceWorker,
  getNotificationPermission,
} from '@/lib/notifications/notificationManager'

/**
 * ServiceWorkerRegistration Component
 * Registers the Service Worker on app load and syncs notification permission state
 */
export function ServiceWorkerRegistration() {
  const { setPermission } = useNotificationStore()

  useEffect(() => {
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
  }, [setPermission])

  // This component doesn't render anything
  return null
}
