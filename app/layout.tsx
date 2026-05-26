import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dronescope.ro"),
  title: "Drone Scope | Filmări și Fotografii Aeriene Premium | Constanța",
  description: "Filmări și fotografii aeriene profesionale cu dronă în Constanța și toată România. Peste 10 ani experiență în imobiliare, nunți, evenimente, construcții și conținut de marketing. Calitate cinematografică.",
  keywords: [
    "filmări cu dronă",
    "fotografii aeriene",
    "drone photography",
    "aerial cinematography",
    "filmări imobiliare",
    "nunți cu dronă",
    "drone Constanța",
    "videoclipuri aeriene",
    "drone România",
  ],
  authors: [{ name: "Drone Scope" }],
  openGraph: {
    title: "Drone Scope | Filmări și Fotografii Aeriene Premium",
    description: "Viziune de la înălțime. Filmări și fotografii aeriene cinematografice pentru imobiliare, evenimente și branduri premium din România.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Drone Scope - Filmări aeriene premium",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-bg text-text antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
