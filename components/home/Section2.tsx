import React from "react";
import Image from "next/image";

const Section2 = () => {
  return (
    <div className="w-screen h-dvh">
      <div className="flex h-full items-center justify-between p-32 gap-x-12">
        <div className="w-2/5">
          <Image
            src="/images/home-section2.png"
            alt="home section 2 graphic"
            width={400}
            height={400}
          />
        </div>
        <div className="w-3/5 flex flex-col gap-y-10">
          <h2 className="text-3xl font-bold">What You'll Learn:</h2>
          <ul className="list-disc list-inside text-lg font-medium">
            <li className="mb-5">
              Proven frameworks and techniques for closing deals in-person
            </li>
            <li className="mb-5">
              Practical sales psychology and communication tips
            </li>
            <li className="mb-5">Real-world scenarios and pitch breakdowns</li>
            <li>
              Expert insights from Peter Prowse, a sales leader with over 20
              years of hands-on experience in high-stakes client origination
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section2;
