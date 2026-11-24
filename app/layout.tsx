import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "@/components/navbar";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Synq — Missed-Call Backup for Septic Companies",
  description:
    "Simple missed-call backup for septic companies. Answers calls when you're on a truck or closed after 5 PM and books jobs straight onto your calendar. Flat $199/month.",
  openGraph: {
    title: "Synq — Missed-Call Backup for Septic Companies",
    description:
      "When your crew is out on a pump truck or closed after 5 PM, Synq answers the calls you miss, grabs the homeowner's address and issue, and puts the job straight on your calendar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} antialiased`}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
