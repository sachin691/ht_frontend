import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Hindustani Tongue",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen flex flex-col bg-background font-sans antialiased", roboto.className)}>
        <Navbar />
        <main className="max-w-7xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

