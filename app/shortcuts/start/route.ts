import { NextResponse } from 'next/server'

export async function GET() {
  // Redirect to main app with start action
  const redirectUrl = new URL('/en?action=start', process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3009')
  return NextResponse.redirect(redirectUrl)
}
