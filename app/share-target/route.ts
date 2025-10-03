import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const title = url.searchParams.get('title') || ''
  const text = url.searchParams.get('text') || ''
  const sharedUrl = url.searchParams.get('url') || ''

  // Redirect to main app with shared content parameters
  const redirectUrl = new URL('/en', url.origin)
  if (title) redirectUrl.searchParams.set('shared_title', title)
  if (text) redirectUrl.searchParams.set('shared_text', text)
  if (sharedUrl) redirectUrl.searchParams.set('shared_url', sharedUrl)

  return NextResponse.redirect(redirectUrl)
}
