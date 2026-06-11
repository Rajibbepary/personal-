"use client";

import { useState } from "react";

const categories = ["All", "Frontend", "Backend", "Full Stack"];

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "Frontend",
  },
  {
    id: 2,
    title: "E-Commerce API",
    category: "Backend",
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
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`relative px-4 py-1 rounded-xl font-medium transition-all duration-300 border
              ${
                activeCategory === category
                  ? "bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-500/20"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-orange-500 hover:text-orange-500"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-2">
              {project.title}
            </h3>

            <span className="inline-block px-3 py-1 text-sm rounded-full bg-orange-100 text-orange-600 dark:bg-orange-500/10">
              {project.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}