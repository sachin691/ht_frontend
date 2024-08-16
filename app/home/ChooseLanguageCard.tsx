import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/saperator";
import Image from "next/image";
import React from "react";

interface ChooseLanguageCardProps {
  imageSrc: string;
  language: string;
  description: string;
}

const ChooseLanguageCard: React.FC<ChooseLanguageCardProps> = ({ imageSrc, language, description }) => {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden border-t-custom-blue border-b-custom-orange border-2">
      <CardHeader className="p-0">
        <Image src={imageSrc} height={300} width={400} alt={`${language} image`} className="w-full h-64 object-cover" />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl font-bold text-custom-orange mb-2 text-center">{language}</CardTitle>
        <p className="text-gray-600">{description}</p>
        <Separator className="mt-2" />
      </CardContent>
      <CardFooter className="p-4 justify-center">
        <Button className="bg-custom-green hover:bg-custom-orange text-white py-2 px-4 rounded transition-colors duration-300">
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ChooseLanguageCard;
