import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prime Picks | Curated Amazon Finds",
  description:
    "Discover top-rated Amazon products curated for lifestyle, tech, home, and wellness. Hand-picked deals with trusted reviews and affiliate offers.",
  openGraph: {
    title: "Prime Picks | Curated Amazon Finds",
    description:
      "Browse trending Amazon must-haves curated across lifestyle, tech, home, beauty, and wellness categories.",
    url: "https://agentic-3f05343d.vercel.app",
    siteName: "Prime Picks",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime Picks | Curated Amazon Finds",
    description:
      "Browse trending Amazon must-haves curated across lifestyle, tech, home, beauty, and wellness categories."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
