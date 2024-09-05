"use client";
import React from "react";
import TrialClass from "./TrialClass";
import { CircleArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HomeCard from "@/components/HomeCard";
import { Users, Rocket, MapPinCheck, Monitor, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

const heroCards = [
  { icon: Users, title: "Expert Tutors" },
  { icon: Rocket, title: "Fastest Method" },
  { icon: MapPinCheck, title: "Anywhere" },
  { icon: Monitor, title: "Online" },
  { icon: CreditCard, title: "Easy Pay" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 }, 
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  }),
};

const HeroSection = () => {
  return (
    <section className="relative bg-white pb-16">
      <div className="relative z-20 p-8">
        <TrialClass />

        <motion.div
          className="flex justify-center mb-12"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          whileHover={{ rotateZ: -5, scale: 1.05 }}
        >
          <Button
            className="relative bg-custom-green text-white font-semibold rounded-md hover:bg-custom-blue transition-all duration-300"
            size={"lg"}
          >
            $0 Trial Class
            <CircleArrowRight className="ml-2" />
          </Button>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {heroCards.map((card, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-center items-center"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <HomeCard icon={card.icon} title={card.title} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
