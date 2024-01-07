import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const allowedOrigins = ['https://app.contentful.com', 'https://paolojulian.dev/']

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV === 'production') {
    const origin = request.headers.get('origin');
    if (origin && !allowedOrigins.includes(origin)) {
      return new NextResponse(`Bad origin ${origin}`, {
        status: 400,
        statusText: 'CORS',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
  }
  const response = NextResponse.next()

  return response
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/revalidate',
}