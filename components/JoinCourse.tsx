import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Book, User, Video, CheckCircle, ShieldCheck } from "lucide-react";

const JoinCourse = () => {
  return (
    <div className="p-4 w-full">
      <Card className="w-full shadow-md">
        <CardContent className="flex flex-col p-0 justify-center items-center">
          <iframe
            src="https://www.youtube.com/embed/ZRXndx5iYq?autoplay=1&mute=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-[15rem] rounded-md"
          ></iframe>
          <div className="flex flex-col gap-y-[3rem] items-center justify-center py-[2rem]">
            <Button className="px-[6rem] bg-custom-orange hover:bg-custom-blue duration-500">Join Course</Button>
            <Button className="px-[4rem] bg-custom-green hover:bg-custom-blue duration-500">Trial Lesson</Button>
          </div>
          <div className="flex flex-col px-[1rem] py-[2rem] justify-center items-center">
            <h1 className="text-3xl text-custom-green mb-4">This Course Includes</h1>
            <ul className="w-full max-w-4xl">
              <li className="flex items-start text-md mb-3">
                <Book className="text-custom-blue w-4 h-4 mr-3 mt-1" />
                <span>50 live Lessons</span>
              </li>
              <li className="flex items-start text-md mb-3">
                <User className="text-custom-blue w-4 h-4 mr-3 mt-1" />
                <span>Personalized Google Classroom</span>
              </li>
              <li className="flex items-start text-md mb-3">
                <Video className="text-custom-blue w-4 h-4 mr-3 mt-1" />
                <span>Class recordings & study materials</span>
              </li>
              <li className="flex items-start text-md mb-3">
                <CheckCircle className="text-custom-blue w-4 h-4 mr-3 mt-1" />
                <span>Tests and Quizzes</span>
              </li>
              <li className="flex items-start text-md mb-3">
                <ShieldCheck className="text-custom-blue w-4 h-4 mr-3 mt-1" />
                <span>Certificate of Completion</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JoinCourse;
