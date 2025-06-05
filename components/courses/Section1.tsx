import React from "react";
import CourseCard from "@/components/courses/CourseCard";

const Section1 = () => {
  return (
    <div className="w-screen h-dvh z-0">
      <div className="flex justify-between w-4/5 mx-auto mt-24">
        <div className="w-1/3">
          <h1 className="font-bold mb-3 ml-3">Beginner</h1>
          <CourseCard
            title="Foundations of Client Engagement"
            learningPoints={[
              "Understanding client psychology",
              "Structuring your first client meetings",
              "Intro to value-led conversations",
            ]}
          />
        </div>
        <div className="w-1/3">
          <h1 className="font-bold mb-3 ml-3">Intermediate</h1>
          <CourseCard
            title="Strategic Client Relationships"
            learningPoints={[
              "Deepening relationships: Contact to trusted advisor",
              "Designing scalable account strategies",
              "Managing objections and tough conversations",
              "Storytelling & insight selling",
            ]}
          />
        </div>
        <div className="w-1/3">
          <h1 className="font-bold mb-3 ml-3">Advanced</h1>
          <CourseCard
            title="Leadership in Client Origination"
            learningPoints={[
              "High-performance sales strategy",
              "Leading teams through sales cycles",
              "Executive-level influence",
              "Navigating stakeholder complexity",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
