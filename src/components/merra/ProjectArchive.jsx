import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "Tharwa River Crossing",
    category: "Bridge Engineering",
    year: "2024",
    coords: "34.68°N, 69.21°E",
    image: "https://media.base44.com/images/public/6a5028f2f5e8eca8ebc482ba/85e9f3bcc_generated_0bbe2ea1.png",
    specs: "640m span — Post-tensioned concrete",
  },
  {
    title: "Al-Baraka Dam Complex",
    category: "Hydraulic Structures",
    year: "2023",
    coords: "31.95°N, 35.93°E",
    image: "https://media.base44.com/images/public/6a5028f2f5e8eca8ebc482ba/2398aaf0b_generated_289e21b3.png",
    specs: "120m height — 2.4M m³ reservoir",
  },
  {
    title: "Metro Ring Interchange",
    category: "Transportation",
    year: "2024",
    coords: "25.20°N, 55.27°E",
    image: "https://media.base44.com/images/public/6a5028f2f5e8eca8ebc482ba/3b8ea11cd_generated_f00be768.png",
    specs: "4 levels — 12 lane capacity",
  },
  {
    title: "Meridian Tower Foundation",
    category: "Structural Engineering",
    year: "2023",
    coords: "40.71°N, 74.01°W",
    image: "https://media.base44.com/images/public/6a5028f2f5e8eca8ebc482ba/7343d91dc_generated_c423aa2d.png",
    specs: "380m height — Deep pile system",
  },
  {
    title: "Coastal Seawall Defense",
    category: "Marine Engineering",
    year: "2025",
    coords: "36.89°N, 10.19°E",
    image: "https://media.base44.com/images/public/6a5028f2f5e8eca8ebc482ba/1f3611cf4_generated_1cb51e55.png",
    specs: "4.2km length — Tetrapod armoring",
  },
];

export default function ProjectArchive() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const scrollRef = useRef(null);

  return (
    <section id="projects" ref={sectionRef} className="relative py-32 md:py-48">
      {/* Section header */}
      <div className="px-6 md:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-[10px] tracking-[0.4em] text-cobalt uppercase">
            002 — Project Archive
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mt-4 tracking-tight text-white">
            Built
            <span className="text-cobalt"> legacy</span>
          </h2>
          <p className="mt-4 text-concrete/40 max-w-md text-base">
            A catalogue of structural interventions spanning bridges, dams,
            highways, and high-rise foundations across three continents.
          </p>
        </motion.div>
      </div>

      {/* Horizontal scroll gallery */}
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto snap-scroll-x px-6 md:px-12 pb-8"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project, i) => (
          <ProjectSliver key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectSliver({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex-shrink-0 cursor-pointer overflow-hidden transition-all duration-700 ease-out"
      style={{ width: hovered ? "500px" : "120px", height: "70vh", minHeight: "500px" }}
    >
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
          hovered ? "scale-105 grayscale-0" : "grayscale"
        }`}
      />

      {/* Blueprint overlay on hover */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          hovered ? "opacity-0" : "opacity-40"
        }`}
        style={{
          background: `linear-gradient(180deg, #0D0E10 0%, transparent 40%, transparent 60%, #0D0E10 100%)`,
        }}
      />
      <div className={`absolute inset-0 bg-obsidian/60 transition-opacity duration-500 ${hovered ? "opacity-30" : "opacity-50"}`} />

      {/* Vertical title (collapsed) */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"}`}>
        <span
          className="font-display text-sm font-bold tracking-[0.3em] uppercase text-concrete/60"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          {project.title}
        </span>
      </div>

      {/* Expanded content */}
      <div className={`absolute inset-0 flex flex-col justify-end p-8 transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`}>
        <span className="font-mono text-[9px] tracking-[0.3em] text-cobalt uppercase">
          {project.coords} — {project.year}
        </span>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-white mt-2 leading-tight">
          {project.title}
        </h3>
        <p className="text-sm text-concrete/50 mt-1">{project.category}</p>
        <p className="font-mono text-[11px] text-concrete/40 mt-3 border-t border-steel/30 pt-3">
          {project.specs}
        </p>
      </div>

      {/* Index number */}
      <div className="absolute top-6 left-6">
        <span className="font-mono text-[10px] text-cobalt/50">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </motion.div>
  );
}