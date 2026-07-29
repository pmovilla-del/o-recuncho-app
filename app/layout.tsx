import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "O Recuncho | Vivienda turística en Maceda",
  description:
    "Alojamiento turístico en Maceda. Disfruta de la Ribeira Sacra, Allariz, Ourense y la Serra de San Mamede.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}