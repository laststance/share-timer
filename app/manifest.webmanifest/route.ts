import { NextResponse } from 'next/server'
import manifest from '../manifest'

export async function GET() {
  const manifestData = manifest()

  return NextResponse.json(manifestData, {
    headers: {
      'Content-Type': 'application/manifest+json',
    },
  })
}
