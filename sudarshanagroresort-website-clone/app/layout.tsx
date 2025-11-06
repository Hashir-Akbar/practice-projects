import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Lora,
  Playfair_Display,
  Poppins,
} from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
});

const loraItalic = Lora({
  variable: "--font-loraItalic",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfairDisplay",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Sudarshan Resort",
  description:
    "Sudarshan Park and Resort offers a tranquil Nepali-style escape nestled in lush greenery. Experience authentic cuisine, cozy accommodations, and vibrant cultural immersion at affordable rates.",
  keywords:
    "Sudarshan Agro Resort, Agro tourism, Belbari, Biratnagar, Nepali hospitality, Cultural immersion, peaceful, greenery, Authentic cuisine, Comfortable accommodations, authentic Nepali cuisine, clam retreat, Relaxation, Fun activities, Vibrant culture, calm lodging, Koshi,",
  robots: "index, follow",
  authors: [
    {
      name: "Hashir Akbar",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${loraItalic.variable} ${playfairDisplay.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
