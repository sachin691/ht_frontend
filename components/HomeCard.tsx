import React from "react";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface HomeCardProps {
  icon: LucideIcon;
  title: string;
}

const HomeCard: React.FC<HomeCardProps> = ({ icon: Icon, title }) => {
  return (
    <Card className="flex flex-col items-center justify-center p-4 bg-white hover:bg-white/10 rounded-md shadow-md hover:scale-105 w-[14rem]">
      <CardContent>
        <Icon className="w-[3rem] h-[4rem] text-custom-blue" />
      </CardContent>
      <CardFooter className="text-center">
        <p className="text-xl font-bold">{title}</p>
      </CardFooter>
    </Card>
  );
};

export default HomeCard;
