import type {Metadata} from 'next'
import { enFont, jaFont } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'サイバーメタルチンピラ',
  description: 'Welcome to underground...',
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="ja">
    <body className={`${enFont.variable} ${jaFont.variable}`}>
    {children}
    </body>
    </html>
  )
}
