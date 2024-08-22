"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Check } from "lucide-react";
import JoinCourse from "@/components/JoinCourse";
import AnyQuestion from "@/components/AnyQuestion";
import Curriculam from "@/components/Curriculam";

export default function Page({ params }: { params: { name: string } }) {
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const words = ["Immersion", "Acquisition", "Visualization"];
    let index = 0;

    const flipAnimation = (currentWord: string, nextWord: string, onComplete: () => void) => {
      if (!textRef.current) return; // Check if textRef.current is available

      const tl = gsap.timeline({
        onComplete: onComplete,
      });

      const currentChars = currentWord.split("");
      const nextChars = nextWord.split("");
      const maxLength = Math.max(currentChars.length, nextChars.length);

      for (let i = 0; i < maxLength; i++) {
        const currentChar = currentChars[i] || "";
        const nextChar = nextChars[i] || "";
        const element = textRef.current.children[i] as HTMLElement;

        if (element) {
          tl.to(element, {
            duration: 0.3,
            transform: "rotateX(-90deg)",
            opacity: 0,
            onComplete: function () {
              element.innerText = nextChar;
            },
          }).to(
            element,
            {
              duration: 0.3,
              transform: "rotateX(0deg)",
              opacity: 1,
            },
            "-=0.3"
          ); // Overlap the transition with the previous one
        }
      }
    };

    const startAnimation = () => {
      if (!textRef.current) return; // Check if textRef.current is available

      flipAnimation(words[index], words[(index + 1) % words.length], () => {
        setTimeout(() => {
          index = (index + 1) % words.length;
          startAnimation();
        }, 2000); // 2-second delay
      });
    };

    if (textRef.current) {
      textRef.current.innerHTML = words[0]
        .split("")
        .map((char) => `<span>${char}</span>`)
        .join("");
    }

    startAnimation();

    return () => {};
  }, []);

  return (
    <div className="flex flex-col justify-center items-center py-2 px-[5rem]">
      <div className="bg-custom-orange w-full text-center rounded-md p-4 text-white">
        <h1 className="text-3xl">Online {params.name} Lessons</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full px-[2rem] items-center justify-center">
        <Image
          src={`https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2023/11/Red-Giveaway-Gift-Promotion-Instagram-Post-1.gif?fit=800%2C800&ssl=1`}
          width={400}
          height={400}
          alt="language image"
        />
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-bold leading-loose">Experience the power of</h1>
          <h1 className="text-4xl font-bold">
            <span ref={textRef} className="text-custom-blue"></span>
          </h1>
        </div>
      </div>
      <div className="flex flex-row space-2 mt-4 py-[5rem] w-full">
        <div className="flex flex-col space-y-[3rem] w-[70%] items-start">
          <h1 className="text-3xl text-custom-green">About This Course</h1>
          <p>
            Our online Hindi lesson learning course offers a distinctive language learning approach inspired by the way
            children naturally acquire their mother tongue. With 1:1 live lessons led by certified instructors, we
            provide a highly personalized learning experience. The key to our success is the ‘immersion method,’ where
            real-life pictures are used to create an engaging and context-rich learning environment.
          </p>
          <h1 className="text-3xl text-custom-green">Our Method</h1>
          <p>
            You never learn your first language in a university by grammatical rules. Teaching through visualization is
            our main focus where we use pictures based on real-life situations so you can learn subconsciously. That’s
            why here is a series of Online Hindi lessons.
          </p>
          <h1 className="text-3xl text-custom-green">What You'll Learn</h1>
          <div className="grid grid-cols-2 gap-3 p-5">
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2">
                  <Check className="text-white w-3 h-3" />
                </div>
                Basic communication in Hindi in everyday situations.
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2">
                  <Check className="text-white w-3 h-3" />
                </div>
                You will develop excellent understanding and listening skills for this level.
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2">
                  <Check className="text-white w-3 h-3" />
                </div>
                You will learn more than 1000 common words and phrases.
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2">
                  <Check className="text-white w-3 h-3" />
                </div>
                Get in-depth knowledge about India's culture along with learning languages.
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2">
                  <Check className="text-white w-3 h-3" />
                </div>
                Travel - Communicate with locals and fully immerse yourself in the culture.
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2">
                  <Check className="text-white w-3 h-3" />
                </div>
                Get advanced learning storytelling skills.
              </li>
            </ul>
          </div>
          <h1 className="text-3xl text-custom-green">Requirements</h1>
          <ul className="space-y-2 p-5 list-disc">
            <li>No previous knowledge of Hindi is necessary.</li>
            <li>
              For the best quality of learning, you need a good laptop, tablet, or phone with good speakers or
              headphones for correct pronunciation.
            </li>
            <li>
              For good results, it is advisable to take 3-4 lessons every week to maintain continuity in the learning
              process.
            </li>
          </ul>
          <Curriculam />
        </div>
        <div className="flex flex-col space-y-[3rem] w-[30%] items-start">
          <JoinCourse />
          <AnyQuestion />
        </div>
      </div>
    </div>
  );
}
