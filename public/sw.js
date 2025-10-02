// Service Worker for Share Timer Notifications
// Handles notification display and click events

const CACHE_NAME = 'share-timer-v1'

// Install event - cache essential resources
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...')
  self.skipWaiting()
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...')
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    })
  )
  return self.clients.claim()
})

// Handle notification display requests from the main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
    const { title, body, icon, badge, tag } = event.data

    const options = {
      body: body || 'Your timer has finished!',
      icon: icon || '/icon-192x192.png',
      badge: badge || '/badge.png',
      tag: tag || 'timer-notification',
      vibrate: [200, 100, 200],
      requireInteraction: true, // Keep notification visible until user interacts
      data: {
        dateOfArrival: Date.now(),
        url: event.data.url || '/',
      },
    }

    event.waitUntil(
      self.registration.showNotification(title || 'Share Timer', options)
    )
  }
})

// Handle notification click events
self.addEventListener('notificationclick', (event) => {
  console.log('[Service Worker] Notification clicked')

  event.notification.close()

  // Focus or open the app window
  event.waitUntil(
    clients
      .matchAll({
        type: 'window',
        includeUncontrolled: true,
      })
      .then((clientList) => {
        // If a window is already open, focus it
        for (const client of clientList) {
          if (client.url === event.notification.data.url && 'focus' in client) {
            return client.focus()
          }
        }
        // Otherwise, open a new window
        if (clients.openWindow) {
          return clients.openWindow(event.notification.data.url)
        }
      })
  )
})

// Handle push events (for future Web Push integration)
self.addEventListener('push', (event) => {
  console.log('[Service Worker] Push received')

  if (event.data) {
    const data = event.data.json()
    const options = {
      body: data.body || 'You have a new notification',
      icon: data.icon || '/icon-192x192.png',
      badge: '/badge.png',
      vibrate: [200, 100, 200],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey || '1',
      },
    }

    event.waitUntil(
      self.registration.showNotification(data.title || 'Share Timer', options)
    )
  }
})

// Fetch event - network first, then cache (for future offline support)
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return
  }

  // For now, just use network
  event.respondWith(fetch(event.request))
})
