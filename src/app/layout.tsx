import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TikTok Analytics",
  description: "Track your TikTok performance",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <header className="bg-gray-100 p-4 flex space-x-4">
            <Link href="/" className="font-semibold hover:underline">
              Home
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
          </header>

          <main className="min-h-screen">
            {children}
          </main>

          <footer className="bg-gray-100 p-4 text-center text-sm text-gray-500">
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            {' '}|{' '}
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}