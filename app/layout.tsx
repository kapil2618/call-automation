import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "@/components/navbar";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Synq — White-Label AI Dispatch Infrastructure",
  description:
    "Wholesale AI voice receptionists for home service marketing agencies. Flat $150/month per location.",
  openGraph: {
    title: "Synq — White-Label AI Dispatch Infrastructure",
    description:
      "Add $150+ in pure recurring profit per plumbing & HVAC client. We handle the AI, webhooks, and telecom.",
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
