
"use client";

import { useEffect, useState } from "react";

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
    color: "#504ABE",
    icon: <SiNextdotjs size={42} />,
    left: "70%",
    top: "70%",
  },
];

const Skills = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="skills"
      className="py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-5">
            My <span className="text-orange-500">Technical</span> Skills
          </h2>

          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            I build modern, fast, and scalable web applications using
            the latest frontend technologies and clean development practices.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Floating Icons */}
          <div className="relative h-[500px]">

            {/* Background Glow */}
            <div className="absolute inset-0  bg-orange-500/10 blur-3xl rounded-full" />

            {skills.map((skill, index) => (
              <div
                key={index}
                className="absolute w-24 h-24 rounded-3xl border border-white/10 backdrop-blur-xl bg-white/5 dark:bg-white/5 shadow-xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:-translate-y-2"
                style={{
                  left: skill.left,
                  top: skill.top,
                }}
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-3xl blur-2xl opacity-20"
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
              </div>
            ))}
          </div>

          {/* Skill Bars */}
          <div className="space-y-8">

            {skills.map((skill, index) => (
              <div key={index}>

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
                  <div
                    className="h-full rounded-full transition-all duration-[2000ms]"
                    style={{
                      width: loaded
                        ? `${skill.percentage}%`
                        : "0%",
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`,
                    }}
                  />

                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;