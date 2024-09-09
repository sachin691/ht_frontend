"use client";

import { Drawer } from "vaul";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import Image from "next/image";
export function MyDrawer() {
    const router = useRouter();
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger asChild>
        <Menu className="w-6 h-6 cursor-pointer" />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/50 md:hidden" />
        <Drawer.Content className="md:hidden bg-white flex flex-col rounded-t-[10px] h-full w-[300px] fixed bottom-0 right-0 z-[100]">
          <div className="p-4 flex-1 h-full">
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-12">
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
              </Drawer.Title>
              <div className="flex flex-col space-y-4">
                <a href="#" className="hover:text-[#FF671F]" onClick={() => router.push("/my-account")}>
                  My Account
                </a>
                <a href="/contact-us" className="hover:text-[#FF671F]">
                  Contact Us
                </a>
                <a href="#" className="hover:text-[#FF671F]" onClick={() => router.push("/languages")}>
                  Languages
                </a>
                <a href="#">
                  <Button className="bg-[#FF671F] hover:bg-[#046A38] text-base px-6 py-3 w-full">Request Demo</Button>
                </a>
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
