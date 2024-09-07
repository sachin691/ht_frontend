"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import { MyDrawer } from "./ui/myDrawer"; // Import the MyDrawer component

const Navbar = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false); // Track scroll position
  const [activeLink, setActiveLink] = useState(""); // Track active link

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    // You can use `router.push` here if you want to navigate
  };

  return (
    <div
      className={`bg-white w-full flex justify-between items-center p-4 px-6 md:px-[11rem] z-50 relative top-0 ${
        scrolled ? "sticky shadow-md" : "absolute "
      } transition-all duration-300`}
    >
      <div className="text-black text-lg font-semibold flex-shrink-0">
        <Image
          src="https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2022/09/Hindustani-Tongue-Horizontal-Color.png?fit=3646%2C1298&ssl=1"
          alt="logo"
          width={150}
          height={100}
          className="cursor-pointer"
          onClick={() => router.push("/home")}
        />
      </div>

      <div className="md:hidden flex items-center h-full">
        <MyDrawer /> {/* Use the new MyDrawer component */}
      </div>

      <div className="hidden md:flex space-x-4 md:space-x-[2rem] mt-2 md:mt-0 flex-wrap items-center justify-end w-full md:w-auto">
        <Link
          href="#"
          className={`relative text-sm md:text-base ${activeLink === "my-account" ? "text-[#FF671F]" : "text-black"}`}
          onClick={() => handleLinkClick("my-account")}
        >
          My Account
          {activeLink === "my-account" && (
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF671F] origin-left" />
          )}
        </Link>
        <Link
          href="/contact-us"
          className={`relative text-sm md:text-base ${activeLink === "contact-us" ? "text-[#FF671F]" : "text-black"}`}
          onClick={() => handleLinkClick("contact-us")}
        >
          Contact Us
          {activeLink === "contact-us" && (
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF671F] origin-left" />
          )}
        </Link>
        <Link
          href="#"
          className={`relative text-sm md:text-base ${activeLink === "languages" ? "text-[#FF671F]" : "text-black"}`}
          onClick={() => handleLinkClick("languages")}
        >
          Languages
          {activeLink === "languages" && (
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF671F] origin-left" />
          )}
        </Link>
        <Link href="#">
          <Button className="bg-[#FF671F] hover:bg-[#046A38] hover:scale-105 text-sm md:text-base px-3 py-2 md:px-6 md:py-3">
            Request Demo
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
