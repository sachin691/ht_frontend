"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";


const studentsArray = [
  "https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2024/07/Image-11-07-24-at-2.36-AM.jpeg?fit=640%2C195&ssl=1",
  "https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2024/07/Image-11-07-24-at-2.37-AM.jpeg?fit=640%2C177&ssl=1",
  "https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2024/07/Image-11-07-24-at-2.39-AM.jpeg?fit=640%2C168&ssl=1",
  "https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2024/07/Screenshot-2024-07-11-at-2.25.36-AM.png?fit=640%2C176&ssl=1",
  "https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2024/07/Image-11-07-24-at-2.29-AM.jpeg?fit=640%2C191&ssl=1",
  "https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2024/07/Image-11-07-24-at-2.31-AM.jpeg?fit=640%2C177&ssl=1",
];

export function OurStudents() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="max-w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {studentsArray.map((link, index) => (
          <CarouselItem key={index} className="flex items-center justify-center w-full h-60 sm:h-72 md:h-96">
            <Image
              alt="Student Image"
              height={500}
              width={1000}
              className="rounded-md"
              quality={100}
              src={link}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
