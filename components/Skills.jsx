

"use client";

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
    position: "left-[10%] top-[10%]",
  },
  {
    name: "CSS3",
    percentage: 90,
    color: "#1572B6",
    icon: <FaCss3Alt size={42} />,
    position: "left-[40%] top-[10%]",
  },
  {
    name: "Tailwind",
    percentage: 95,
    color: "#06B6D4",
    icon: <SiTailwindcss size={42} />,
    position: "left-[70%] top-[10%]",
  },
  {
    name: "JavaScript",
    percentage: 88,
    color: "#F7DF1E",
    icon: <FaJs size={42} />,
    position: "left-[10%] top-[70%]",
  },
  {
    name: "React",
    percentage: 92,
    color: "#61DAFB",
    icon: <FaReact size={42} />,
    position: "left-[40%] top-[70%]",
  },
  {
    name: "Next.js",
    percentage: 87,
    color: "#000000",
    icon: <SiNextdotjs size={42} />,
    position: "left-[70%] top-[70%]",
  },
];

const Skills = () => {
  return (
    <section
    //   id="skills"
      className="py-24 px-6 bg-white dark:bg-[#0B1120] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-5">
            My <span className="text-orange-500">Technical</span> Skills
          </h2>

          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Expertise in building modern web applications with focus on
            performance, scalability, and clean code architecture.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Floating Icons */}
          <div className="relative h-[500px] hidden lg:block">

            {/* Glow */}
            <div className="absolute inset-0 bg-orange-500/5 rounded-full blur-3xl" />

            {skills.map((skill, index) => (
              <div
                key={index}
                className={`absolute ${skill.position} w-24 h-24 rounded-3xl border border-white/20 dark:border-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex items-center justify-center group hover:scale-110 transition-all duration-500`}
                style={{
                  background: "rgba(255,255,255,0.08)",
                }}
              >
                {/* Glow Effect */}
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
          <div className="space-y-7">
            {skills.map((skill, index) => (
              <div key={index} className="relative">

                {/* Top */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-slate-700 dark:text-slate-200">
                    {skill.name}
                  </h3>

                  <span className="font-mono text-orange-500 font-semibold">
                    {skill.percentage}%
                  </span>
                </div>

                {/* Progress Background */}
                <div className="h-3 w-full rounded-full overflow-hidden border border-gray-200 dark:border-slate-700 bg-gray-100 dark:bg-slate-800">

                  {/* Progress */}
                  <div
                    className="h-full rounded-full relative transition-all duration-1000"
                    style={{
                      width: `${skill.percentage}%`,
                      backgroundColor: skill.color,
                    }}
                  >
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </div>
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