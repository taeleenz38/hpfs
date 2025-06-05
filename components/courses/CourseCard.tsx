import React from "react";
import { Button } from "@/components/ui/button";

type CourseCardProps = {
  title: string;
  learningPoints: string[];
};

const CourseCard: React.FC<CourseCardProps> = ({ title, learningPoints }) => {
  return (
    <div className="w-11/12 h-96 p-6 flex flex-col gap-y-4 border-[#5409DA] justify-between bg-white shadow-lg border-2 rounded-xl">
      <div>
        <h2 className="text-xl font-semibold mb-6 text-primary">{title}</h2>
        <p className="font-medium text-md text-gray-700 mb-2">What you'll learn:</p>
        <ul className="list-disc list-inside text-md text-gray-700 space-y-1">
          {learningPoints.map((point, index) => (
            <li key={index} className="pl-6 [text-indent:-1.25rem]">
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full flex justify-between gap-x-2">
        <Button className="w-1/2 hover:cursor-pointer bg-background hover:bg-background border-1 hover:border-2 hover:border-primary text-primary text-md p-4">Learn More</Button>
        <Button className="w-1/2 hover:cursor-pointer text-md p-4">Purchase</Button>
      </div>
    </div>
  );
};

export default CourseCard;
