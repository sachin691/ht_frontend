"use client";

import { Drawer } from "vaul";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";
export function MyDrawer() {
    const router = useRouter();
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger asChild>
        <Menu className="w-6 h-6 cursor-pointer" />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/50" />
        <Drawer.Content className="bg-white flex flex-col rounded-t-[10px] h-full w-[300px] fixed bottom-0 right-0 z-[100]">
          <div className="p-4 flex-1 h-full">
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-4">Navigation</Drawer.Title>
              <p className="text-zinc-600 mb-2">Use the navigation links below.</p>
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
