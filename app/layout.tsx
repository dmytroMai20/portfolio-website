import type { Metadata } from 'next'
import { Header } from '../components/header'
import ThemeProvider from '../components/ui/ThemeProvider'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dmytromai.com'

export const metadata: Metadata = {
  title: {
    default: 'Dmytro Mai — Software Engineer',
    template: '%s | Dmytro Mai',
  },
  description:
    'Software Engineer specialising in full-stack development and C++. Explore my projects, experience, and get in touch.',
  keywords: [
    'Dmytro Mai',
    'Software Engineer',
    'Portfolio',
    'Full-Stack Developer',
    'Next.js',
    'React',
    'TypeScript',
    'C++',
    'Multithreading',
    'Performance Optimization',
    'System Design',
    'Cache-aware Design',
  ],
  authors: [{ name: 'Dmytro Mai' }],
  creator: 'Dmytro Mai',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: '/',
    siteName: 'Dmytro Mai — Portfolio',
    title: 'Dmytro Mai — Software Engineer',
    description:
      'Software Engineer specialising in full-stack development and C++. Explore my projects, experience, and get in touch.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dmytro Mai — Software Engineer',
    description:
      'Software Engineer specialising in full-stack development and C++. Explore my projects, experience, and get in touch.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
