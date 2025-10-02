import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Share Timer',
  description: 'Simple, relaxing timer application with web push notifications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  )
}
