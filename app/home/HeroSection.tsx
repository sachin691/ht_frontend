import React from "react";
import TrialClass from "./TrialClass";
import { CircleArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HomeCard from "@/components/HomeCard";
import { Users, Rocket, MapPinCheck, Monitor, CreditCard } from "lucide-react"; // Replace these with appropriate icons

const heroCards = [
  { icon: Users, title: "Expert Tutors" },
  { icon: Rocket, title: "Fastest Method" },
  { icon: MapPinCheck, title: "Anywhere" },
  { icon: Monitor, title: "Online" },
  { icon: CreditCard, title: "Easy Pay" },
];

const HeroSection = () => {
  return (
    <section className="relative bg-white pb-16">
      {/* Semicircle */}
      <div className="absolute inset-x-0 bottom-0 h-[25rem] bg-custom-orange rounded-t-[50%] z-10"></div>

      {/* Content Section */}
      <div className="relative z-20 p-8">
        {/* Trial Class Section */}
        <TrialClass />
        <div className="flex justify-center mb-12">
          <Button
            className="relative bg-custom-green text-white font-semibold rounded-md hover:bg-custom-blue hover:scale-105 transition-all duration-300 animate-bounce duration-800"
            size={"lg"}
          >
            $0 Trial Class
            <CircleArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Cards Section */}
        <div className="mt-8 flex justify-center">
          <div className="flex flex-wrap justify-center gap-5 mt-8 max-w-5xl mx-auto">
            {heroCards.map((card, index) => (
              <HomeCard key={index} icon={card.icon} title={card.title} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
