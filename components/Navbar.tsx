"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // Track scroll position
  const [activeLink, setActiveLink] = useState(""); // Track active link
  const controls = useAnimation();

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

  useEffect(() => {
    if (scrolled) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 1, y: -10 });
    }
  }, [scrolled, controls]);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <motion.div
      className={`bg-white w-full flex justify-between items-center p-4 px-6 md:px-[11rem] z-50 relative ${
        scrolled ? "sticky top-0 shadow-md" : "absolute top-0"
      } transition-all duration-300`}
      initial={{ opacity: 0, y: -20 }}
      animate={controls}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
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

      <div className="md:hidden flex items-center">
        <Menu className="w-6 h-6 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </div>

      <div className="hidden md:flex space-x-4 md:space-x-[2rem] mt-2 md:mt-0 flex-wrap items-center justify-end w-full md:w-auto">
        <Link
          href="#"
          className={`relative text-sm md:text-base ${activeLink === "my-account" ? "text-[#FF671F]" : "text-black"}`}
          onClick={() => handleLinkClick("my-account")}
        >
          My Account
          {activeLink === "my-account" && (
            <motion.div
              className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF671F] origin-left"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          )}
        </Link>
        <Link
          href="/contact-us"
          className={`relative text-sm md:text-base ${activeLink === "contact-us" ? "text-[#FF671F]" : "text-black"}`}
          onClick={() => handleLinkClick("contact-us")}
        >
          Contact Us
          {activeLink === "contact-us" && (
            <motion.div
              className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF671F] origin-left"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          )}
        </Link>
        <Link
          href="#"
          className={`relative text-sm md:text-base ${activeLink === "languages" ? "text-[#FF671F]" : "text-black"}`}
          onClick={() => handleLinkClick("languages")}
        >
          Languages
          {activeLink === "languages" && (
            <motion.div
              className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF671F] origin-left"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          )}
        </Link>
        <Link href="#">
          <Button className="bg-[#FF671F] hover:bg-[#046A38] hover:scale-105 text-sm md:text-base px-3 py-2 md:px-6 md:py-3">
            Request Demo
          </Button>
        </Link>
      </div>

      {isMenuOpen && (
        <motion.div
          className="fixed top-14 right-0 w-full max-w-xs bg-white shadow-lg md:hidden z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="flex flex-col p-4">
            <Link href="#" className="hover:text-[#FF671F] text-base mb-4" onClick={() => setIsMenuOpen(false)}>
              My Account
            </Link>
            <Link
              href="/contact-us"
              className="hover:text-[#FF671F] text-base mb-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link href="#" className="hover:text-[#FF671F] text-base mb-4" onClick={() => setIsMenuOpen(false)}>
              Languages
            </Link>
            <Link href="#">
              <Button className="bg-[#FF671F] hover:bg-[#046A38] hover:scale-105 text-base px-6 py-3 w-full">
                Request Demo
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;
