import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "MANSCAPED | Premium Barbershop for the Modern Gentleman",
  description: "Experience the art of grooming at MANSCAPED. We offer premium haircuts, classic beard trims, and executive shaves in a modern, elegant atmosphere.",
  openGraph: {
    title: "MANSCAPED | Premium Barbershop",
    description: "Experience the art of grooming at MANSCAPED.",
    url: "https://manscaped-barber.com",
    siteName: "MANSCAPED",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-zinc-950 text-zinc-50 antialiased`}>
        {children}
      </body>
    </html>
  );
}
