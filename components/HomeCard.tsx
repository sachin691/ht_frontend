import React from "react";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface HomeCardProps {
  icon: LucideIcon;
  title: string;
  className?: string;
}

const cardVariants = {
  initial: {
    rotate: 0,
    borderRadius: "0%",
    backgroundColor: "#ffffff",
    color: "#000000",
    scale: 1,
  },
  hover: {
    rotate: 360,
    borderRadius: "50%",
    backgroundColor: "#FF671F",
    color: "#ffffff",
    scale: 1.1,
    transition: {
      type: "tween",
      ease: "easeInOut",
      stiffness: 300,
      damping: 20,
      duration: 0.1,
    },
  },
};

const HomeCard: React.FC<HomeCardProps> = ({ icon: Icon, title, className }) => {
  return (
    <motion.div
      className={cn(
        "flex flex-col items-center justify-center p-4 shadow-md w-[12rem] h-[12rem] transition-all",
        className
      )}
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
    >
      <CardContent>
        <Icon className="w-[3rem] h-[4rem] text-custom-blue" />
      </CardContent>
      <CardFooter className="text-center">
        <p className="text-xl font-bold">{title}</p>
      </CardFooter>
    </motion.div>
  );
};

export default HomeCard;
