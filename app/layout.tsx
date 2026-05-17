import type { Metadata } from 'next'
import { Header } from '../components/header'
import ThemeProvider from '../components/ui/ThemeProvider'
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
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
