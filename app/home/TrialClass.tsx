'use client'
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordian";

// Define the animation options
const textAnimationOptions = {
  scale: { opacity: 0, scale: 0.8 },
  slide: { opacity: 0, y: -50 },
  rotate: { opacity: 0, rotateX: 90 },
};

type AnimationType = keyof typeof textAnimationOptions;

interface TrialClassProps {
  animationType?: AnimationType;
}

const TrialClass: React.FC<TrialClassProps> = ({ animationType = "rotate" }) => {
  const textVariants = {
    hidden: textAnimationOptions[animationType],
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-0 md:px-[2rem] md:py-[1rem] gap-6 md:gap-8">
      <motion.div className="flex flex-col gap-4 p-4" initial="hidden" animate="visible" variants={textVariants}>
        <motion.h1
          className="text-3xl md:text-6xl font-semibold"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          Indian Language. Learning for everyone
        </motion.h1>
        <motion.p
          className="text-base md:text-lg"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.2 }}
        >
          Hindustani Tongue offers immersion–based, conversational online learning with native teachers.
        </motion.p>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Immersion Method</AccordionTrigger>
            <AccordionContent>
              We offer flexibility in scheduling, allowing you to learn at your own pace, whenever and wherever suits
              you best.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger>Flexibility</AccordionTrigger>
            <AccordionContent>
              Surrounding you with authentic materials and real-world interactions to ensure you learn naturally and
              effectively, just as you would in a native-speaking environment.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-3">
            <AccordionTrigger>Certified Instructors</AccordionTrigger>
            <AccordionContent>
              Our certified instructors are not only experienced professionals but also undergo specialized training to
              teach with our immersive method, ensuring you get the best learning experience possible.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>

      <motion.div
        className="p-2 flex justify-center items-center"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <Image
          alt="Trial Class Image"
          src={`https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2024/06/Untitled-design-9.png?fit=930%2C620&ssl=1`}
          height={200}
          width={800}
          className="rounded-md w-full h-auto"
        />
      </motion.div>
    </div>
  );
};

export default TrialClass;
