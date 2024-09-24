"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";
import JoinCourse from "@/components/JoinCourse";
import AnyQuestion from "@/components/AnyQuestion";
import Curriculam from "@/components/Curriculam";

export default function Page({ params }: { params: { name: string } }) {
  // State variables for language data
  const [languageData, setLanguageData] = useState({
    name: "",
    aboutThisCourse: "",
    ourMethod: "",
    whatYoullLearn: [] as string[],
    requirements: [] as string[],
  });

  const [index, setIndex] = useState(0);
  const words = ["Immersion", "Acquisition", "Visualization"];

  // Fetch language data
  const fetchLanguage = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/language/${params.name}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch language data: ${response.statusText}`);
      }
      const data = await response.json();
      setLanguageData(data); // Set the fetched data into state
    } catch (error) {
      console.error("Error fetching language data:", error);
    }
  };

  // Call fetchLanguage when the component mounts
  useEffect(() => {
    fetchLanguage();
  }, [params.name]);

  // Text animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, rotateX: -90 },
    visible: {
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col justify-center items-center p-4 lg:px-20"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-custom-orange w-full text-center rounded-md p-4 text-white"
      >
        <h1 className="text-xl md:text-3xl">Online {languageData.name} Lessons</h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-4 items-center justify-center mt-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2023/11/Red-Giveaway-Gift-Promotion-Instagram-Post-1.gif?fit=800%2C800&ssl=1"
            width={400}
            height={400}
            alt="language image"
            className="mx-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col justify-center items-center text-center"
        >
          <h1 className="text-4xl md:text-4xl font-bold leading-normal">Experience the power of</h1>
          <h1 className="text-3xl md:text-4xl font-bold">
            <motion.span
              key={words[index]}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-custom-blue"
            >
              {words[index]}
            </motion.span>
          </h1>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 mt-4 py-8"
      >
        <div className="flex flex-col space-y-8 w-full lg:w-2/3 items-start px-5">
          {/* About This Course */}
          <h1 className="text-2xl md:text-3xl text-custom-green">About This Course</h1>
          <p className="text-sm md:text-base">{languageData.aboutThisCourse}</p>

          {/* Our Method */}
          <h1 className="text-2xl md:text-3xl text-custom-green">Our Method</h1>
          <p className="text-sm md:text-base">{languageData.ourMethod}</p>

          {/* What You'll Learn */}
          <h1 className="text-2xl md:text-3xl text-custom-green">{`What You'll Learn`}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4">
            {/* Left column (first 3 entries) */}
            <ul className="space-y-2">
              {languageData.whatYoullLearn.slice(0, 3).map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2">
                    <Check className="text-white w-3 h-3" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            {/* Right column (remaining entries) */}
            <ul className="space-y-2">
              {languageData.whatYoullLearn.slice(3).map((item, index) => (
                <li key={index + 3} className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2">
                    <Check className="text-white w-3 h-3" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Requirements */}
          <h1 className="text-2xl md:text-3xl text-custom-green">Requirements</h1>
          <ul className="space-y-2 p-4 list-disc">
            {languageData.requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>

          <Curriculam />
        </div>

        <div className="flex flex-col space-y-8 w-full lg:w-1/3 items-start">
          <JoinCourse language={params.name}/>
          <AnyQuestion />
        </div>
      </motion.div>
    </motion.div>
  );
}
