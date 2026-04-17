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
  title: "MANSCAPED | Barbershop Premium untuk Pria Modern",
  description: "Rasakan seni perawatan pria di MANSCAPED. Kami menawarkan potong rambut premium, cukur jenggot klasik, dan layanan eksekutif dalam suasana modern yang elegan.",
  openGraph: {
    title: "MANSCAPED | Barbershop Premium",
    description: "Rasakan seni perawatan pria di MANSCAPED.",
    url: "https://manscaped-barber.id",
    siteName: "MANSCAPED",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-zinc-950 text-zinc-50 antialiased`}>
        {children}
      </body>
    </html>
  );
}
