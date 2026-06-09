import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BookMyHut - Luxury Mountain Huts in Pakistan",
  description: "Discover luxurious mountain huts for your perfect escape. Book your retreat in Naran, Murree, and more.",
  keywords: "mountain huts, luxury retreats, Pakistan, Naran, Murree, vacation rental",
  openGraph: {
    title: "BookMyHut - Luxury Mountain Huts",
    description: "Book your perfect mountain escape today",
    url: "https://bookmyhut.pk",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} bg-background`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
