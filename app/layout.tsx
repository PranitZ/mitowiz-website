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
        <meta property="og:title" content="MitoWiz — Your AI Workforce for Revenue Cycle Management" />
        <meta property="og:description" content="MitoWiz is building an AI workforce for Healthcare Revenue Cycle Management, helping RCM teams automate repetitive payer portal workflows." />
        <meta property="og:image" content="/placeholder-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'MitoWiz',
              url: 'https://mitowiz.com/',
              logo: 'https://mitowiz.com/placeholder-logo.png',
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
