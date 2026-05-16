import Header from '../components/Header'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
