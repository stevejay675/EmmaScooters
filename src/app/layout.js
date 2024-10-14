import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import TidioChat from "@/components/widget/Tidochat";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Emma scooters",
  description: "Affordable mobility scooters and wheelchairs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <TidioChat />
        <Analytics />
      </body>
    </html>
  );
}
