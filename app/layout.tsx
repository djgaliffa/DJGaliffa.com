import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://djgaliffa.com"),
  applicationName: "DJ Galiffa",
  category: "Entertainment",
  title: {
    default: "DJ Galiffa | Professional DJ & Live Entertainer",
    template: "%s | DJ Galiffa",
  },
  description:
    "Book DJ Galiffa, Official Pregame DJ for the Pittsburgh Steelers, for elite open-format mixing, live crowd entertainment, and nationwide events.",
  authors: [{ name: "DJ Galiffa", url: "https://djgaliffa.com" }],
  creator: "DJ Galiffa",
  publisher: "DJ Galiffa",
  keywords: [
    "DJ Galiffa",
    "professional DJ",
    "open format DJ",
    "Pittsburgh Steelers DJ",
    "celebrity DJ",
    "nightclub DJ",
    "arena DJ",
    "festival DJ",
    "corporate event DJ",
    "sports DJ",
    "national DJ bookings",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.jpg",
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "DJ Galiffa",
    title: "DJ Galiffa | Mix. Hype. Entertain.",
    description:
      "Official Pregame DJ for the Pittsburgh Steelers. Elite open-format mixing, crowd hype, and full-show energy—available nationwide.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "DJ Galiffa - Mix. Hype. Entertain.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DJ Galiffa | Mix. Hype. Entertain.",
    description:
      "Official Steelers Pregame DJ. Elite open-format mixing, fearless crowd interaction, and full-show energy—available nationwide.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
