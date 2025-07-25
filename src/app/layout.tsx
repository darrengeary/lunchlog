import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "School Lunch Ordering App Ireland | LunchLog",
  description:
    "LunchLog is Ireland's leading school lunch ordering app for government-funded school meals. Easy online ordering for parents, teachers, and suppliers. Track allergies, dietary needs, and simplify school lunch delivery.",
  keywords: [
    "school lunch ordering app",
    "Ireland",
    "school meals",
    "government-funded lunches",
    "parents",
    "teachers",
    "suppliers",
    "allergies",
    "dietary needs",
    "LunchLog",
    "online school lunch",
    "school lunch delivery",
    "secure school lunch app",
  ],
  openGraph: {
    title: "School Lunch Ordering App Ireland | LunchLog",
    description:
      "LunchLog is Ireland's leading school lunch ordering app for government-funded school meals. Easy online ordering for parents, teachers, and suppliers.",
    url: "https://lunchlog.ie",
    siteName: "LunchLog",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "LunchLog preview",
      },
    ],
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "School Lunch Ordering App Ireland | LunchLog",
    description:
      "LunchLog is Ireland's leading school lunch ordering app for government-funded school meals. Easy online ordering for parents, teachers, and suppliers.",
    images: ["/preview.png"],
    site: "@LunchLog",
  },
  alternates: {
    canonical: "https://lunchlog.ie",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/android-chrome-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/android-chrome-512x512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
