import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CODEFUSE 2.0 — Intra-Faculty Coding Marathon",
  description:
    "The landing page and web IDE platform for the CODEFUSE 2.0 Intra-Faculty Coding Marathon hackathon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/*
       * Google Fonts are imported via globals.css @import (runtime loading).
       * This approach works in all build environments, including those without
       * internet access at build time.  When migrating to next/font/google for
       * build-time optimisation, add the variables here instead:
       *   - Bebas Neue  → var(--font-bebas-neue)  → font-heading
       *   - Fira Code   → var(--font-fira-code)   → font-mono
       *   - Inter       → var(--font-inter)        → font-body
       */}
      <body className="font-body antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

