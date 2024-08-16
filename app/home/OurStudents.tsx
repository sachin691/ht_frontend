'use client'
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

export function OurStudents() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="max-w-[70rem]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="flex items-center justify-center w-full">
            <Image
              alt="image"
              height={1000}
              width={1000}
              className="w-[60rem] h-[15rem] rounded-md"
              src={`https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2024/07/Image-11-07-24-at-2.36-AM.jpeg?fit=640%2C195&ssl=1`}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
