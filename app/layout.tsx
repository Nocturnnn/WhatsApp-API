import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Manrope,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-headline",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Conduit API | WhatsApp Marketing Elite",
  description: "Transforme cliques em conversas instantaneas.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${plusJakartaSans.variable} ${manrope.variable} ${cormorantGaramond.variable}`}
    >
      <body
        className="bg-background font-body text-on-surface antialiased selection:bg-primary/30 selection:text-primary"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
