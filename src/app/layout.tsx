import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reparación + Alquiler Coches Gold Coast | Taller Inteligente",
  description: "Taller mecánico + alquiler de vehículos en Gold Coast. Diagnóstico IA, reservas online, vehículo de sustitución. Llama al +61 7 1234 5678",
  keywords: ["car repair Gold Coast", "car rental Gold Coast", "cheap car hire Gold Coast", "mechanic Gold Coast", "taller mecánico Australia"],
  openGraph: {
    title: "Repara & Alquila Gold Coast",
    description: "Taller inteligente + alquiler de vehículos en Gold Coast",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${dmSans.variable}`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}