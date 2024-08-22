import React from "react";
import { Card, CardContent } from "./ui/card";
import { Phone, Mail } from "lucide-react";

const AnyQuestion = () => {
  return (
    <div className="p-4 w-full">
      <Card className="w-full shadow-md relative overflow-hidden">
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#046A38",
            opacity: 0.60,
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "url(https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2023/04/young-latin-woman-in-black-headphones-teaching-english-online.jpg?fit=2000%2C1335&ssl=1)",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            zIndex: 0,
          }}
        />
        <CardContent className="relative flex flex-col p-[3rem] space-y-4 justify-center items-start z-10">
          <h1 className="text-2xl font-bold text-white">Have Any Questions?</h1>
          <p className="text-lg text-gray-400">
            Feel free to ask us anything about the Course or Curriculum, we would be happy to help you out.
          </p>
          <div className="flex flex-col space-y-2 text-md text-white">
            <div className="flex items-center">
              <Phone className="text-white w-4 h-4 mr-2" />
              +91 829-887-6814
            </div>
            <div className="flex items-center">
              <Phone className="text-white w-4 h-4 mr-2" />
              +1 862-319-2019
            </div>
            <div className="flex items-center">
              <Mail className="text-white w-4 h-4 mr-2" />
              team@hindustanitongue.com
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnyQuestion;
