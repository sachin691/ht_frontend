"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MyDrawer } from "./ui/myDrawer";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DemoForm from "./DemoForm";

const Navbar = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div
      className={`bg-white w-full flex justify-between items-center p-4 px-6 md:px-[11rem] z-50 ${
        scrolled ? "sticky top-0 shadow-md" : "sticky top-0"
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

      {/* Drawer for Mobile View */}
      <div className="md:hidden flex items-center h-full">
        <MyDrawer />
      </div>

      {/* Links for Desktop View */}
      <div className="hidden md:flex space-x-4 md:space-x-[2rem] flex-wrap items-center justify-end w-full md:w-auto">
        <Link
          href="#"
          className={`relative text-sm md:text-base ${activeLink === "my-account" ? "text-[#FF671F]" : "text-black"}`}
          onClick={() => handleLinkClick("my-account")}
        >
          My Account
          {activeLink === "my-account" && (
            <motion.div
              layoutId="underline"
              className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF671F]"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.3 }}
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
              layoutId="underline"
              className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF671F]"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.3 }}
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
              layoutId="underline"
              className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF671F]"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </Link>

        <Dialog>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <DialogTrigger className="bg-[#FF671F] hover:bg-[#046A38] text-sm md:text-base text-white px-3 py-2 md:px-6 md:py-2 rounded-md">
              Request Demo
            </DialogTrigger>
          </motion.div>
          <DialogContent className="w-full md:min-w-[60rem] min-h-[30rem] h-auto">
            <DialogHeader>
              <DialogTitle className="text-center text-3xl">Request Demo</DialogTitle>
              <DialogDescription className="h-full">
                <DemoForm />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Navbar;
