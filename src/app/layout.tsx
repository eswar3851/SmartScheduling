import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SmartScheduling - AI-Driven Appointment & Patient Dashboard',
  description: 'Modern appointment scheduling and patient management system for clinics and telehealth services. Features AI-powered insights, analytics, and seamless booking experience.',
  keywords: 'appointment scheduling, healthcare, telehealth, patient dashboard, clinic management, medical booking',
  authors: [{ name: 'SmartScheduling Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'SmartScheduling - AI-Driven Appointment & Patient Dashboard',
    description: 'Modern appointment scheduling and patient management system for clinics and telehealth services.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmartScheduling - AI-Driven Appointment & Patient Dashboard',
    description: 'Modern appointment scheduling and patient management system for clinics and telehealth services.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
