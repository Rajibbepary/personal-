"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "Next.Js", "React", "Vanilla JS", "Html & Css"];

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "Next.Js",
  },
  {
    id: 2,
    title: "E-Commerce API",
    category: "React",
  },
  {
    id: 3,
    title: "QuickCart",
    category: "Full Stack",
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
          transition={{ duration: 0.6 }}
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
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 dark:text-slate-300 mt-4 text-lg"
        >
          A collection of digital products built with passion and precision.
        </motion.p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center mb-12">
        <div className="relative flex flex-wrap items-center justify-center gap-2 p-2 rounded-2xl bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-lg shadow-black/5">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-6 py-2 text-sm font-semibold rounded-xl transition-colors duration-300 ${
                activeCategory === category
                  ? "text-white"
                  : "text-slate-600 dark:text-slate-300 hover:text-orange-500"
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 shadow-[0_8px_25px_rgba(249,115,22,0.35)]"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}

              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg"
          >
            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
              {project.title}
            </h3>

            <span className="inline-block px-3 py-1 text-sm rounded-full bg-orange-100 text-orange-600 dark:bg-orange-500/10">
              {project.category}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}