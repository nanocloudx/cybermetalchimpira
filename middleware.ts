import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization')

  if (!basicAuth) {
    return new NextResponse('[WARNING] Your cyberbrain has been destroyed.', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Offensive firewall"',
      },
    })
  }

  const authValue = basicAuth.split(' ')[1]
  const [user, password] = Buffer.from(authValue, 'base64').toString().split(':')

  if (user !== 'chimpira' || password !== '2525') {
    return new NextResponse('[WARNING] Your cyberbrain has been destroyed.', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Offensive firewall"',
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
