
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
          title="Bachelor Degree"
        >
          <p>B.Sc in CSE</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;