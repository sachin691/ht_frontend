'use client'
import Image from "next/image";
import Navbar from "@/components/Navbar"
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/home')
  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Navbar /> */}
    </main>
  );
}
