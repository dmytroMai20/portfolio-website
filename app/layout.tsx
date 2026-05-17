import type { Metadata } from 'next'
import { Header } from '../components/header'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dmytro Mai — Portfolio',
  description: 'Personal portfolio website showcasing projects, blog, and contact information.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
