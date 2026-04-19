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
  title: "Car Repair + Car Rental Gold Coast | Smart Mechanic + Cheap Hire",
  description: "Mechanic workshop + car rental in Gold Coast, Queensland. AI diagnosis, online booking, loan vehicle. 20+ vehicles. Call +61 7 1234 5678",
  keywords: ["car repair Gold Coast", "car rental Gold Coast", "cheap car hire Gold Coast", "mechanic Gold Coast", "auto repair", "vehicle rental", "Gold Coast mechanic", "car service"],
  openGraph: {
    title: "Fix & Rent Gold Coast - Car Repair + Rental",
    description: "Smart mechanic + car rental in Gold Coast. AI diagnosis, instant quotes, loan vehicle.",
    type: "website",
    locale: "en_AU",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}