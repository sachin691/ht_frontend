import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ClientLayout from "@/components/ClientLayout";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hindustani Tongue",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen p-0 flex flex-col bg-background font-sans antialiased", roboto.className)}>
        <ClientLayout>
          <main className="max-w-7xl mx-auto">{children}</main>
        </ClientLayout>
      </body>
    </html>
  );
}
