import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://o-recuncho-app.vercel.app"),

  title: {
    default: "O Recuncho | Vivienda turística en Maceda",
    template: "%s | O Recuncho",
  },

  description:
    "Vivienda turística en Maceda (Ourense). Disfruta de la Ribeira Sacra, Allariz, Ourense y la Serra de San Mamede desde un alojamiento cómodo y tranquilo.",

  keywords: [
    "O Recuncho",
    "Maceda",
    "Ourense",
    "Ribeira Sacra",
    "Allariz",
    "Casa rural",
    "Vivienda turística",
    "Alojamiento Galicia",
  ],

  authors: [{ name: "O Recuncho" }],

  creator: "O Recuncho",

  publisher: "O Recuncho",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://o-recuncho-app.vercel.app",
    siteName: "O Recuncho",
    title: "O Recuncho | Vivienda turística en Maceda",
    description:
      "Descubre Maceda, la Ribeira Sacra, Allariz y Ourense desde un alojamiento tranquilo y acogedor.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Salón de O Recuncho",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "O Recuncho",
    description: "Vivienda turística en Maceda (Ourense).",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${playfair.variable}`}>
        {/* <StructuredData /> */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}