'use client'
import React, { useEffect } from 'react'
import HeroSection from './HeroSection'
import ChooseLanguageCard from './ChooseLanguageCard';
import { OurStudents } from './OurStudents';

const languagesData = [
  {
    imageSrc:
      "https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2023/10/Learn-Hindi-Online.gif?fit=1024%2C680&ssl=1",
    language: "Hindi",
    description: "1:1 live Hindi classes with native and professional teachers.",
  },
  {
    imageSrc:
      "https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2023/10/Learn-Punjabi-Online-1-1.gif?fit=1024%2C680&ssl=1",
    language: "Punjabi",
    description: "1:1 live Punjabi classes with native and professional teachers.",
  },
  {
    imageSrc:
      "https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2023/10/Learn-Bengali-Online-.gif?fit=1024%2C680&ssl=1",
    language: "Bengali",
    description: "1:1 live Bengali classes with native and professional teachers.",
  },
  {
    imageSrc:
      "https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2023/10/Learn-Marathi-Online-.gif?fit=1024%2C680&ssl=1",
    language: "Marathi",
    description: "1:1 live Marathi classes with native and professional teachers.",
  },
  {
    imageSrc:
      "https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2023/10/Learn-Gujarati-Online-.gif?fit=1024%2C680&ssl=1",
    language: "Gujarati",
    description: "1:1 live Gujarati classes with native and professional teachers.",
  },
  {
    imageSrc:
      "https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2023/10/Learn-English-Online-.gif?fit=1024%2C680&ssl=1",
    language: "English",
    description: "1:1 live English classes with native and professional teachers.",
  },
  {
    imageSrc:
      "https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2023/10/Learn-Tamil-Online-.gif?fit=1024%2C680&ssl=1",
    language: "Tamil",
    description: "1:1 live Tamil classes with native and professional teachers.",
  },
  {
    imageSrc:
      "https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2023/10/Learn-Telugu-Online-.gif?fit=1024%2C680&ssl=1",
    language: "Telugu",
    description: "1:1 live Telugu classes with native and professional teachers.",
  },
  {
    imageSrc:
      "https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2023/10/Learn-Kannada-Online-1-1.gif?fit=1024%2C680&ssl=1",
    language: "Kannada",
    description: "1:1 live Kannada classes with native and professional teachers.",
  },
];

const page = () => {
  const getUserTimezone = () => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log("User's timezone:", timezone);
    return timezone;
  };
  const getUserCountry = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    console.log("User's country:", data.country_name);
    return data.country_name;
  };

  useEffect(() => {
    getUserTimezone();
    getUserCountry();
  }, []);
  return (
    <div className=''>
      <HeroSection />
      <section className="bg-gray-100 p-4 py-8">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-[4rem]">Choose Your Language</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2rem] md:gap-[5rem]">
            {languagesData.map((language) => (
              <ChooseLanguageCard
                key={language.language}
                imageSrc={language.imageSrc}
                language={language.language}
                description={language.description}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-col p-4 gap-y-[2rem] justify-center items-center">
        <div className="flex items-center justify-center w-full mt-4">
          <div className="w-8 h-[2px] bg-custom-orange"></div>
          <h1 className="font-semibold text-xl uppercase tracking-wide text-custom-orange px-5">{`Let's hear From`}</h1>
          <div className="w-8 h-[2px] bg-custom-orange"></div>
        </div>
        <h2 className="font-bold text-4xl md:text-5xl uppercase tracking-wide text-center">Our Students</h2>
        <OurStudents />
      </section>
    </div>
  );
}

export default page
