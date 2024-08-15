'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/saperator";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react"; // Import Lucide icons
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const languages = ["Hindi", "Bengali", "Punjabi", "Marathi", "Gujarati", "English", "Tamil", "Telugu"];

  const moreInfo = [
    "Blogs",
    "Free Resources",
    "About us",
    "Contact us",
    "Affiliate Login",
    "Become an Affiliate",
    "Privacy Policy",
    "Terms & Conditions",
    "Refund Policy",
  ];

  const socialMedia = [
    { name: "Instagram", icon: Instagram, link: "https://www.instagram.com" },
    { name: "Facebook", icon: Facebook, link: "https://www.facebook.com" },
    { name: "Twitter", icon: Twitter, link: "https://www.twitter.com" },
    { name: "Youtube", icon: Youtube, link: "https://www.youtube.com" },
  ];

  return (
    <footer className="bg-custom-blue text-white py-10 px-6 md:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div>
          <Image
            src="https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2022/09/Hindustani-Tongue-Horizontal-Color.png?fit=3646%2C1298&ssl=1"
            alt="Hindustani Tongue Logo"
            width={200}
            height={50}
            className="bg-white rounded-full p-5 cursor-pointer"
            onClick={() => router.push("/home")}
          />
        </div>

        {/* Languages Section */}
        <div className="flex flex-col gap-y-2">
          <h2 className="font-semibold text-xl mb-4 text-custom-orange">Languages</h2>
          <Separator />
          <ul>
            {languages.map((language) => (
              <li key={language} className="mb-2 hover:text-custom-orange relative group">
                <Link
                  href={`/${language.toLowerCase()}`}
                  className="block transition-all duration-300 transform group-hover:translate-x-2"
                >
                  {language}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* More Info Section */}
        <div className="flex flex-col gap-y-2">
          <h2 className="font-semibold text-xl mb-4 text-custom-orange">More Info</h2>
          <Separator />
          <ul>
            {moreInfo.map((info) => (
              <li key={info} className="mb-2 hover:text-custom-orange relative group">
                <Link
                  href={`/${info.toLowerCase().replace(/ /g, "-")}`}
                  className="block transition-all duration-300 transform group-hover:translate-x-2 group-hover:text-custom-orange"
                >
                  {info}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Stay Connected Section */}
        <div className="flex flex-col gap-y-2">
          <h2 className="font-semibold text-xl mb-4 text-custom-orange">Stay Connected</h2>
          <Separator />
          <form className="flex flex-col gap-4">
            <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-md text-black" />
            <Button className="bg-custom-green hover:bg-custom-orange">Subscribe</Button>
          </form>
        </div>
      </div>

      <Separator className="m-4" />

      {/* Social Media Icons */}
      <div className="flex justify-center gap-6 mt-6">
        {socialMedia.map(({ name, icon: Icon, link }) => (
          <Link key={name} href={link} target="_blank" rel="noopener noreferrer">
            <Icon className="text-white hover:text-custom-orange" size={24} />
          </Link>
        ))}
      </div>

      <div className="text-center mt-8 text-sm font-semibold">
        Copyright © {new Date().getFullYear()} Hindustani Tongue | Powered by Hindustani Tongue
      </div>
    </footer>
  );
};

export default Footer;
