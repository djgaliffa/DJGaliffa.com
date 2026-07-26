import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://djgaliffa.com"),
  title: {
    default: "DJ Galiffa | Professional DJ & Live Entertainer",
    template: "%s | DJ Galiffa",
  },
  description:
    "Official Pregame DJ for the Pittsburgh Steelers. DJ Galiffa is a stadium-proven open-format DJ and live entertainer available for national bookings.",
  keywords: [
    "DJ Galiffa",
    "professional DJ",
    "open format DJ",
    "Pittsburgh Steelers DJ",
    "celebrity DJ",
    "nightclub DJ",
    "national DJ bookings",
  ],
  alternates: {
    canonical: "/",
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
    title: "DJ Galiffa | Built for the Big Stage",
    description:
      "Stadium-proven. Crowd-first. Available nationwide for nightclubs, arenas, brands, festivals, and high-profile events.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "DJ Galiffa - Built for the Big Stage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DJ Galiffa | Built for the Big Stage",
    description:
      "Official Pregame DJ for the Pittsburgh Steelers. Available nationwide.",
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
