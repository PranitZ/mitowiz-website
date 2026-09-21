import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'MitoWiz — Your AI Workforce for Revenue Cycle Management',
  description:
    'MitoWiz is building an AI workforce for Healthcare Revenue Cycle Management, helping RCM teams automate repetitive payer portal workflows.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#09090b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-bg`}>
      <head>
        <link rel="canonical" href="https://mitowiz.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mitowiz.com/" />
        <meta property="og:site_name" content="MitoWiz" />
        <meta property="og:title" content="MitoWiz — Your AI Workforce for Revenue Cycle Management" />
        <meta property="og:description" content="MitoWiz is building an AI workforce for Healthcare Revenue Cycle Management, helping RCM teams automate repetitive payer portal workflows." />
        <meta property="og:image" content="https://mitowiz.com/og-image-1200x630.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MitoWiz — Your AI Workforce for Revenue Cycle Management" />
        <meta name="twitter:description" content="MitoWiz is building an AI workforce for Healthcare Revenue Cycle Management, helping RCM teams automate repetitive payer portal workflows." />
        <meta name="twitter:image" content="https://mitowiz.com/twitter-image-1200x675.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/mask-icon.svg" color="#00D7B0" />
        <meta name="theme-color" content="#ffffff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'MitoWiz',
              url: 'https://mitowiz.com/',
              logo: 'https://mitowiz.com/mitowiz-master-original.png',
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  email: 'hello@mitowiz.com',
                  contactType: 'customer service',
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-bg font-sans text-foreground antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
