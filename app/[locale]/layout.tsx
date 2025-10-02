import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { ServiceWorkerRegistration } from '@/components/notifications/ServiceWorkerRegistration'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Share Timer',
  description: 'Simple, relaxing timer application with web push notifications',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'ShareTimer',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#10B981',
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className="bg-bg-primary text-text-primary antialiased">
        <ServiceWorkerRegistration />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
