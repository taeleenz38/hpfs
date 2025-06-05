import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Section1 = () => {
  return (
    <div className="w-screen h-dvh bg-[url('/home-bg.jpg')] bg-cover bg-center bg-no-repeat z-0 text-white">
      <div className="flex justify-between">
        <div className="w-3/5 flex flex-col p-20 gap-y-11">
          <h1 className="text-4xl font-bold">
            Master the art of in-person sales with expert-led training designed
            for those who are ready to level up their game.
          </h1>
          <h2 className="text-xl font-light">
            At ExCEL, we go beyond theory. This is a results-driven sales course
            built for ambitious individuals who want to learn the most effective
            strategies in offline, face-to-face selling — directly from one of
            the best in the business.
          </h2>
          <h2 className="text-xl font-light">
            Whether you're just starting out or looking to sharpen your skills,
            the ExCEL course gives you the tools, confidence, and mindset needed
            to excel in high-performance sales.
          </h2>
          <div className="flex gap-3">
            <Link href="/courses">
              <Button className="hover:cursor-pointer text-lg p-6">
                Explore Courses
              </Button>
            </Link>
            <Link href="/about">
              <Button className="hover:cursor-pointer text-lg p-6">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
        <Image
          src="/images/LOGO.svg"
          alt="ExCEL"
          width={500}
          height={500}
          className="w-2/5 p-10"
        />
      </div>
    </div>
  );
};

export default Section1;
