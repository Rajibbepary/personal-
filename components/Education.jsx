
"use client";

import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold mb-4">My Journey</h1>

      <VerticalTimeline>
       
         <VerticalTimelineElement
          date="2020 - 2023"
          contentStyle={{
            background: "#F3E8FF",
            color: "#6A0DAD",
          }}
          iconStyle={{
            background: "#6A0DAD",
            color: "#fff",
          }}
        
        >
          <h3 className="text-xl font-bold">
            Bachelor of Computer Science
          </h3>

          <p>B.Sc in Computer Science & Engineering</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;