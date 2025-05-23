import { type NextRequest } from 'next/server'
import { updateSession } from './app/utils/supabase/middleware'

console.log("Middleware triggered")

export async function middleware(request: NextRequest) {
  return await updateSession(request)
}

export const config = {
  matcher: ['/chat','/home',
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}