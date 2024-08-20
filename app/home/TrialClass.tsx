import Image from "next/image";
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordian";

const TrialClass = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-0 md:p-[2rem] gap-6 md:gap-8">
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-3xl md:text-6xl font-semibold">Indian Language. Learning for everyone</h1>
        <p className="text-base md:text-lg">
          Hindustani Tongue offers immersion–based, conversational online learning with native teachers.
        </p>
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
      </div>
      <div className="p-2 flex justify-center items-center">
        <Image
          alt="Trial Class Image"
          src={`https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2024/06/Untitled-design-9.png?fit=930%2C620&ssl=1`}
          height={200}
          width={800}
          className="rounded-md border-4 border-custom-orange w-full h-auto"
        />
      </div>
    </div>
  );
};

export default TrialClass;
