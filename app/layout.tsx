import type {Metadata} from 'next'
import {enFont, jaFont, minchoFont} from './fonts'
import './globals.scss'

export const metadata: Metadata = {
  title: 'サイバーメタルチンピラ',
  description: 'Welcome to underground...',
  robots: {
    index: false,
    follow: false,
  }
}

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
    <body className={`${enFont.variable} ${jaFont.variable} ${minchoFont.variable}`}>
    {children}
    </body>
    </html>
  )
}
