/**
 * Notification Manager
 * Handles browser notification permissions and display via Service Worker
 */

export type NotificationPermission = 'default' | 'granted' | 'denied'

export interface NotificationOptions {
  title: string
  body: string
  icon?: string
  badge?: string
  tag?: string
  url?: string
}

/**
 * Check if notifications are supported in the browser
 */
export function isNotificationSupported(): boolean {
  if (typeof window === 'undefined') {
    return false
  }
  return (
    'Notification' in window &&
    'serviceWorker' in navigator &&
    'PushManager' in window
  )
}

/**
 * Get current notification permission status
 */
export function getNotificationPermission(): NotificationPermission {
  if (typeof window === 'undefined' || !isNotificationSupported()) {
    return 'denied'
  }
  return Notification.permission as NotificationPermission
}

/**
 * Request notification permission from the user
 */
export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (!isNotificationSupported()) {
    console.warn('[Notifications] Not supported in this browser')
    return 'denied'
  }

  try {
    const permission = await Notification.requestPermission()
    return permission as NotificationPermission
  } catch (error) {
    console.error('[Notifications] Permission request failed:', error)
    return 'denied'
  }
}

/**
 * Register the Service Worker
 */
export async function registerServiceWorker(): Promise<ServiceWorkerRegistration | null> {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    console.warn('[Service Worker] Not supported in this browser')
    return null
  }

  try {
    const registration = await navigator.serviceWorker.register('/sw.js', {
      scope: '/',
      updateViaCache: 'none',
    })

    console.log('[Service Worker] Registered successfully')
    return registration
  } catch (error) {
    console.error('[Service Worker] Registration failed:', error)
    return null
  }
}

/**
 * Show a notification via the Service Worker
 */
export async function showNotification(
  options: NotificationOptions
): Promise<boolean> {
  // Check support
  if (!isNotificationSupported()) {
    console.warn('[Notifications] Not supported')
    return false
  }

  // Check permission
  const permission = getNotificationPermission()
  if (permission !== 'granted') {
    console.warn('[Notifications] Permission not granted:', permission)
    return false
  }

  try {
    // Get the Service Worker registration
    const registration = await navigator.serviceWorker.ready

    // Send message to Service Worker to show notification
    if (registration.active) {
      registration.active.postMessage({
        type: 'SHOW_NOTIFICATION',
        title: options.title,
        body: options.body,
        icon: options.icon || '/icon-192x192.png',
        badge: options.badge || '/badge.png',
        tag: options.tag || 'share-timer-notification',
        url: options.url || window.location.href,
      })

      console.log('[Notifications] Notification sent to Service Worker')
      return true
    }

    console.warn('[Notifications] No active Service Worker')
    return false
  } catch (error) {
    console.error('[Notifications] Failed to show notification:', error)
    return false
  }
}

/**
 * Check if Service Worker is registered and active
 */
export async function isServiceWorkerReady(): Promise<boolean> {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return false
  }

  try {
    const registration = await navigator.serviceWorker.getRegistration()
    return registration !== undefined && registration.active !== null
  } catch (error) {
    console.error('[Service Worker] Status check failed:', error)
    return false
  }
}

/**
 * Unregister Service Worker (for cleanup/testing)
 */
export async function unregisterServiceWorker(): Promise<boolean> {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return false
  }

  try {
    const registration = await navigator.serviceWorker.getRegistration()
    if (registration) {
      const success = await registration.unregister()
      console.log('[Service Worker] Unregistered:', success)
      return success
    }
    return false
  } catch (error) {
    console.error('[Service Worker] Unregister failed:', error)
    return false
  }
}
