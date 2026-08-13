"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = ["All", "Next.Js", "React", "Vanilla JS", "Html & Css"];

const projects = [
  {
    title: "E-Commerce App",
    desc: "An online store built with React, featuring a dynamic product catalog, shopping cart, and seamless checkout experience.",
    img: "https://i.ibb.co/9HwBmbfC/work-1.png",
    link: "https://freshcart-khaki-one.vercel.app/",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    category: "Next.Js",
  },
  {
    title: "Coffee Area",
    desc: "A modern coffee shop landing page built with Next.js, showcasing strong visual identity and responsive layout.",
    img: "https://i.ibb.co/tMB6MWzs/work-2.png",
    link: "https://coffee-area-seven.vercel.app/",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    category: "Next.Js",
  },
  {
    title: "Social Media Platform",
    desc: "A modern social media UI platform with interactive components and responsive design.",
    img: "https://i.ibb.co/zhfDG6Vk/work-3.png",
    link: "https://example.com/",
    tech: ["React", "Tailwind"],
    category: "React",
  },
  {
    title: "Social Media Platform",
    desc: "A modern social media UI platform with interactive components and responsive design.",
    img: "https://i.ibb.co/9qVDyXH/photo-1526509867162-5b0c0d1b4b33-avif-silder-1.jpg",
    link: "https://example.com/",
    tech: ["React", "Tailwind"],
    category: "Vanilla JS",
  },
  {
    title: "Social Media Platform",
    desc: "A modern social media UI platform with interactive components and responsive design.",
    img: "https://i.ibb.co/6JwWyxX9/header-playstation-image.png",
    link: "https://example.com/",
    tech: ["React", "Tailwind"],
    category: "Html & Css",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-slate-950">

      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white"
        >
          Featured{" "}
          <span className="text-orange-500 underline decoration-dotted underline-offset-8">
            Projects
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 dark:text-slate-300 mt-4 text-lg"
        >
          A collection of digital products built with passion and precision.
        </motion.p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center mb-12">
        <div className="flex flex-wrap gap-2 p-2 rounded-2xl bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-lg">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-5 py-2 text-sm font-semibold rounded-xl transition ${
                activeCategory === category
                  ? "text-white"
                  : "text-slate-600 dark:text-slate-300 hover:text-orange-500"
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}

        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

        {filteredProjects.map((project, index) => (
          <div key={index} className="group relative">

            {/* Image */}
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src={project.img}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:opacity-0 transition" />
            </div>

            {/* Card */}
            <div className="relative -mt-16 mx-4 p-5 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-gray-100 dark:border-gray-800 transition group-hover:-translate-y-2">

              {/* Title */}
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold group-hover:text-orange-500">
                  {project.title}
                </h3>

                <Link href={project.link} target="_blank">
                  🚀
                </Link>
              </div>

              {/* Desc */}
              <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 mb-4">
                {project.desc}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center">
                <span className="text-xs text-orange-500 font-bold uppercase">
                  {project.category}
                </span>

                <Link
                  href={project.link}
                  target="_blank"
                  className="text-sm font-semibold hover:text-orange-500"
                >
                  View →
                </Link>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}