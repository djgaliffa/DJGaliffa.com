import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://djgaliffa.com"),
  title: {
    default: "DJ Galiffa | Professional DJ & Live Entertainer",
    template: "%s | DJ Galiffa",
  },
  description:
    "DJ Galiffa combines elite open-format mixing, commanding microphone work, and high-energy crowd interaction in one unforgettable live show.",
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
    title: "DJ Galiffa | Mix. Hype. Entertain.",
    description:
      "Elite mixing. Crowd hype. Full-show energy. The Official Pregame DJ for the Pittsburgh Steelers is available nationwide.",
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
      "Elite open-format mixing, fearless crowd interaction, and full-show energy—available nationwide.",
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
