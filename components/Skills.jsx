"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
} from "react-icons/fa";

import {
  SiTailwindcss,
   SiNextdotjs,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    percentage: 95,
    color: "#E34F26",
    icon: <FaHtml5 size={42} />,
    left: "10%",
    top: "10%",
  },
  {
    name: "CSS3",
    percentage: 90,
    color: "#1572B6",
    icon: <FaCss3Alt size={42} />,
    left: "40%",
    top: "10%",
  },
  {
    name: "Tailwind CSS",
    percentage: 95,
    color: "#06B6D4",
    icon: <SiTailwindcss size={42} />,
    left: "70%",
    top: "10%",
  },
  {
    name: "JavaScript",
    percentage: 88,
    color: "#F7DF1E",
    icon: <FaJs size={42} />,
    left: "10%",
    top: "70%",
  },
  {
    name: "React",
    percentage: 92,
    color: "#61DAFB",
    icon: <FaReact size={42} />,
    left: "40%",
    top: "70%",
  },
  {
    name: "Next.js",
    percentage: 87,
    color: "#000000",
    icon:<SiNextdotjs size={42} />,
    left: "70%",
    top: "70%",
  },
];

const Skills = () => {

  const [startAnimation, setStartAnimation] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setStartAnimation(true);
    }
  }, [inView]);

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
     
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-5">
            My <span className="text-orange-500">Technical</span> Skills
          </h2>

          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            I build modern, fast, and scalable web applications using
            the latest frontend technologies and clean development practices.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Floating Icons */}
          <div className="relative h-[300px]">

            {/* Background Glow */}
            <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-full" />

            {skills.map((skill, index) => (
              <motion.div
                key={index}
                animate={{ y:[20, 100, 50], x:[20, 100, 50], rotate:[5]}}
               transition={{duration:10, delay:[5], repeat:Infinity}}
                className="absolute w-20 h-20 rounded-2xl border border-white/10 backdrop-blur-xl bg-white/5 dark:bg-white/5 shadow-2xl flex items-center justify-center  hover:scale-110 transition-all duration-500"
                style={{
                  left: skill.left,
                  top: skill.top,
                }}
              >

                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-2xl blur-2xl opacity-30"
                  style={{
                    backgroundColor: skill.color,
                  }}
                />

                {/* Icon */}
                <div
                  className="relative z-10"
                  style={{
                    color: skill.color,
                  }}
                >
                  {skill.icon}
                </div>

              </motion.div>
            ))}


          </div>

          {/* Skill Bars */}
          <div className="space-y-8">

            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: 50,
                }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        x: 0,
                      }
                    : {}
                }
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
              >

                {/* Top Info */}
                <div className="flex items-center justify-between mb-3">

                  <h3 className="font-semibold text-slate-700 dark:text-slate-200">
                    {skill.name}
                  </h3>

                  <span className="text-sm font-bold text-orange-500">
                    {skill.percentage}%
                  </span>

                </div>

                {/* Progress Background */}
                <div className="w-full h-3 bg-gray-200 dark:bg-slate-800 rounded-full overflow-hidden">

                  {/* Progress Fill */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: startAnimation
                        ? `${skill.percentage}%`
                        : "0%",
                    }}
                    transition={{
                      duration: 1.8,
                      delay: index * 0.2,
                      ease: "easeOut",
                    }}
                    className="h-full rounded-full relative"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`,
                    }}
                  >

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />

                  </motion.div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;