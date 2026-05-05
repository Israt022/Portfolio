import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "Dev Portfolio | Modern & Fluid",
  description: "Web Developer Portfolio built with Next.js, GSAP, and Framer Motion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased selection:bg-primary selection:text-white`}>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
