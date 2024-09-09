"use client";

import { useState } from "react";
import { Drawer } from "vaul";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DemoForm from "../DemoForm";

export function MyDrawer() {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDrawerOpen(false); // Close the drawer
    setDialogOpen(true); // Open the dialog
  };

  return (
    <Drawer.Root direction="right" open={drawerOpen} onOpenChange={setDrawerOpen}>
      <Drawer.Trigger asChild>
        <Menu className="w-6 h-6 cursor-pointer" onClick={() => setDrawerOpen(true)} />
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
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button
                    className="bg-[#FF671F] hover:bg-[#046A38] text-sm md:text-base text-white px-3 py-2 md:px-6 md:py-2 rounded-md"
                    onClick={handleOpenDialog}
                  >
                    Request Demo
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>

      {dialogOpen && (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="min-w-[60rem] min-h-[30rem] h-auto">
            <DialogHeader>
              <DialogTitle className="text-center text-3xl">Request Demo</DialogTitle>
              <DialogDescription className="h-full">
                <DemoForm />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </Drawer.Root>
  );
}
