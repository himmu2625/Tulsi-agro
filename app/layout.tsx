import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LoadingProvider } from "@/components/LoadingProvider"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title:
    "Tulsi Agro - Premium Wholesale Grains & Agricultural Services | India",
  description:
    "Leading wholesale grain supplier in India. Premium basmati rice, wheat, pulses & agricultural services. Trusted by restaurants, retailers & food service buyers across India.",
  keywords:
    "wholesale grains India, premium basmati rice supplier, bulk wheat supplier India, organic grain wholesaler, buy rice in bulk online, agricultural services India, grain trading company, wholesale pulses India, food service grain supplier, restaurant grain supplier, retail grain distributor",
  authors: [{ name: "Tulsi Agro" }],
  creator: "Tulsi Agro",
  publisher: "Tulsi Agro",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://tulsiagro.com",
    title:
      "Tulsi Agro - Premium Wholesale Grains & Agricultural Services | India",
    description:
      "Leading wholesale grain supplier in India. Premium basmati rice, wheat, pulses & agricultural services trusted by businesses nationwide.",
    siteName: "Tulsi Agro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tulsi Agro - Premium Wholesale Grains & Agricultural Services",
    description:
      "Leading wholesale grain supplier in India. Premium quality, competitive prices, nationwide delivery.",
  },
  alternates: {
    canonical: "https://tulsiagro.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://tulsiagro.com" />
        {/* Structured data for Organization schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Tulsi Agro",
              description:
                "Premium wholesale grains supplier offering wheat and rice",
              url: "https://tulsiagro.com",
              logo: "https://tulsiagro.com/Tulsi Agro logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8810593717",
                contactType: "Sales",
                areaServed: "IN",
                availableLanguage: ["en", "hi"],
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61576971985992",
                "https://www.instagram.com/tulsi.agro/",
                "https://www.youtube.com/@TULSIAGRO.96",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingProvider>{children}</LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
