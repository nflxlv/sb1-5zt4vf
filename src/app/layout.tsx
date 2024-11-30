import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'latin-ext'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.glukofin.pl'),
  title: 'Glukofin ▷ Naturalny Sposób na Cukier | -87% | Opinie 2024',
  description: 'Glukofin - skuteczne wsparcie w kontrolowaniu poziomu cukru ✓ 87% skuteczności ✓ Badania kliniczne ✓ Naturalne składniki ✓ Efekty w 14 dni ➤ Sprawdź!',
  keywords: 'glukofin, glukofin cena, glukofin opinie, glukofin gdzie kupić, poziom cukru we krwi, naturalne wsparcie cukru',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  openGraph: {
    title: 'Glukofin ▷ Naturalny Sposób na Cukier | -87% | Opinie 2024',
    description: 'Glukofin - skuteczne wsparcie w kontrolowaniu poziomu cukru ✓ 87% skuteczności ✓ Badania kliniczne ✓ Naturalne składniki',
    url: 'https://www.glukofin.pl',
    siteName: 'Glukofin',
    locale: 'pl_PL',
    type: 'website',
    images: [{
      url: 'https://i.ibb.co/XxNXv4t/glukofin.png',
      width: 800,
      height: 600,
      alt: 'Glukofin - Suplement diety na poziom cukru'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glukofin ▷ Naturalny Sposób na Cukier | -87% | Opinie 2024',
    description: 'Glukofin - skuteczne wsparcie w kontrolowaniu poziomu cukru',
    images: ['https://i.ibb.co/XxNXv4t/glukofin.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.glukofin.pl'
  },
  authors: [{ name: 'Zespół Glukofin' }],
  category: 'Zdrowie',
  verification: {
    google: 'google-site-verification-code',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-96x96.png" type="image/png" sizes="96x96" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#15803d" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}