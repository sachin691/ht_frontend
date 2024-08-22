import React from "react";
import { Card, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

const Curriculam = () => {
  return (
    <>
      <div className="flex items-center justify-between px-8 w-full">
        <h1 className="text-2xl font-bold">Curriculum</h1>
        <h1 className="text-lg font-medium">
          <span className="text-custom-orange">50 Lessons</span>/Live 1:1
        </h1>
      </div>
      <div className="flex flex-col p-4 space-y-[3rem] w-full">
        <Card className="flex flex-col p-4 space-y-[3rem] bg-gray-100">
          <Card className="shadow-lg cursor-pointer">
            <CardHeader className="text-custom-blue font-bold">Introduction</CardHeader>
          </Card>
          <Card className="shadow-lg cursor-pointer">
            <CardHeader className="text-custom-blue font-bold">Lesson 1 : Basic vocabulary and Greetings</CardHeader>
          </Card>
          <Card className="shadow-lg cursor-pointer">
            <CardHeader className="text-custom-blue font-bold">
              Lesson 2 : Expressing Gratitude and Asking Questions
            </CardHeader>
          </Card>
          <Button className="bg-custom-green hover:bg-custom-orange duration-500" size={"lg"}>
            Download Full Curriculum
          </Button>
        </Card>
      </div>
    </>
  );
};

export default Curriculam;
