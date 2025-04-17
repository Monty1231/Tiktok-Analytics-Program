// app/api/tiktok/route.ts
import { NextResponse } from 'next/server'
import { mockTikTokData } from '@/lib/mock-data'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const _profileUrl = searchParams.get('url')  // e.g. "https://www.tiktok.com/@user"
  // — here you could call a real TikTok‐scraper or an SDK —
  return NextResponse.json(mockTikTokData)
}
