"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {JOURNEY} from "@/public/assets/assets"

const JourneyItem = ({ item, index }) => {
  const isLeft = index % 2 === 0;

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="flex items-center justify-between mb-12 relative">
      {/* Left Side */}
      <div className="w-1/2 flex justify-end pr-10">
        {isLeft && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-900 shadow-xl p-5 rounded-xl max-w-sm"
          >
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-sm text-orange-500">{item.year}</p>
            <p className="text-sm font-medium">{item.sub}</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
              {item.desc}
            </p>
          </motion.div>
        )}
      </div>

      {/* Center Dot */}
      <div className="w-4 h-4 rounded-full bg-orange-500 shadow-lg z-10" />

      {/* Right Side */}
      <div className="w-1/2 pl-10">
        {!isLeft && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-900 shadow-xl p-5 rounded-xl max-w-sm"
          >
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-sm text-orange-500">{item.year}</p>
            <p className="text-sm font-medium">{item.sub}</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
              {item.desc}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default function JourneySection() {
  return (
    <section className="py-20 px-6 md:px-20 bg-[#FFFFFF] dark:bg-[#11001F]">
      <h2 className="text-center text-4xl font-bold mb-16">
        My Journey
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-orange-500/40 to-transparent transform -translate-x-1/2" />

        {JOURNEY.map((item, index) => (
          <JourneyItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}