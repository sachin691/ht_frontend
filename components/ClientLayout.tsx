"use client"; // Mark this component as client-side

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Define routes where you don't want to show the Navbar and Footer
  const noNavFooterRoutes = ["/request-demo"];

  const hideNavFooter = noNavFooterRoutes.includes(pathname);

  return (
    <>
      {!hideNavFooter && <Navbar />}
      {children}
      {!hideNavFooter && <Footer />}
    </>
  );
}
