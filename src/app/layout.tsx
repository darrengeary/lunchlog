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
    title: "School Lunch Ordering App Ireland | LunchLog - Government-Funded School Meals",
    description:
      "LunchLog is Ireland's leading school lunch ordering app for government-funded school meals. Easy online ordering for parents, teachers, and suppliers.",
    url: "https://lunchlog.ie",
    siteName: "LunchLog",
    images: [
      {
        url: "/lunch-log.png",
        width: 1200,
        height: 630,
        alt: "LunchLog logo",
      },
    ],
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "School Lunch Ordering App Ireland | LunchLog - Government-Funded School Meals",
    description:
      "LunchLog is Ireland's leading school lunch ordering app for government-funded school meals. Easy online ordering for parents, teachers, and suppliers.",
    images: ["/lunch-log.png"],
    site: "@LunchLog",
  },
  alternates: {
    canonical: "https://lunchlog.ie",
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
