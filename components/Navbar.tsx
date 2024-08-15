"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from '../components/ui/button'
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="bg-white fixed top-0 left-0 w-full flex justify-between items-center p-4 shadow-md px-[6rem] z-50">
      <div className="text-black text-lg font-semibold">
        <Image
          src={`https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2022/09/Hindustani-Tongue-Horizontal-Color.png?fit=3646%2C1298&ssl=1`}
          alt="logo"
          width={150}
          height={100}
          className="cursor-pointer"
          onClick={() => router.push("/home")}
        />
      </div>
      <div className="space-x-[2rem] mt-2">
        <Link href="#" className="hover:text-[#FF671F]">
          My Account
        </Link>
        <Link href="#" className="hover:text-[#FF671F]">
          Contact Us
        </Link>
        <Link href="#" className="hover:text-[#FF671F]">
          Languages
        </Link>
        <Link href="#">
          <Button className="bg-[#FF671F] hover:bg-[#046A38] hover:scale-105">Request Demo</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
