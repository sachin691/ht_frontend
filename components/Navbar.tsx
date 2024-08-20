"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react"; // Import the hamburger icon

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu

  return (
    <div className="bg-white w-full flex justify-between items-center p-4 shadow-md px-6 md:px-[6rem] z-50">
      <div className="text-black text-lg font-semibold flex-shrink-0">
        <Image
          src={`https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2022/09/Hindustani-Tongue-Horizontal-Color.png?fit=3646%2C1298&ssl=1`}
          alt="logo"
          width={150}
          height={100}
          className="cursor-pointer"
          onClick={() => router.push("/home")}
        />
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="md:hidden">
        <Menu className="w-6 h-6 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </div>

      {/* Links and Button for Medium Screens and Above */}
      <div className="hidden md:flex space-x-4 md:space-x-[2rem] mt-2 md:mt-0 flex-wrap items-center justify-end w-full md:w-auto">
        <Link href="#" className="hover:text-[#FF671F] text-sm md:text-base">
          My Account
        </Link>
        <Link href="#" className="hover:text-[#FF671F] text-sm md:text-base">
          Contact Us
        </Link>
        <Link href="#" className="hover:text-[#FF671F] text-sm md:text-base">
          Languages
        </Link>
        <Link href="#" className="mt-2 md:mt-0">
          <Button className="bg-[#FF671F] hover:bg-[#046A38] hover:scale-105 text-sm md:text-base px-3 py-2 md:px-6 md:py-3">
            Request Demo
          </Button>
        </Link>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 mt-2 w-full bg-white shadow-lg md:hidden">
          <div className="flex flex-col space-y-4 p-4">
            <Link href="#" className="hover:text-[#FF671F] text-base" onClick={() => setIsMenuOpen(false)}>
              My Account
            </Link>
            <Link href="#" className="hover:text-[#FF671F] text-base" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Link>
            <Link href="#" className="hover:text-[#FF671F] text-base" onClick={() => setIsMenuOpen(false)}>
              Languages
            </Link>
            <Link href="#">
              <Button className="bg-[#FF671F] hover:bg-[#046A38] hover:scale-105 text-base px-6 py-3">
                Request Demo
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
