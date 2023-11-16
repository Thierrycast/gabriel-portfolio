import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight:[] })

export const metadata: Metadata = {
  title: 'Gabriel Fotografias',
  description: 'Created by Thierry Castro',
  icons: '/iconpage.svg'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
