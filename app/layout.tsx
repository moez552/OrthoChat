import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'OrthoChat - AI-Powered Orthodontic Practice Management',
  description: 'Transform your orthodontic practice with AI-powered WhatsApp scheduling and voice commands. Custom plans from $99/mo.',
  generator: 'OrthoChat',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
