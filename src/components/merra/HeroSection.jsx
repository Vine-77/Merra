import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HERO_IMAGE = "https://media.base44.com/images/public/6a5028f2f5e8eca8ebc482ba/85e9f3bcc_generated_0bbe2ea1.png";

const metadata = {
  project: "Tharwa River Crossing",
  location: "34.6°N, 69.2°E",
  elevation: "1,842m ASL",
  span: "640m",
  material: "Post-Tensioned Concrete",
  load: "45,000 kN"
};

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showMeta, setShowMeta] = useState(false);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setShowMeta(true)}
      onMouseLeave={() => setShowMeta(false)}
    >
      {/* Background image with parallax */}
      <motion.div style={{ y: imageY }} className="absolute inset-0 -top-[10%] -bottom-[10%]">
        <img
          src={HERO_IMAGE}
          alt="Massive cable-stayed bridge spanning a river valley at blue hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-obsidian/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/30 via-transparent to-obsidian" />
      </motion.div>

      {/* Oversized MERRA text */}
      <motion.div style={{ y: textY, opacity }} className="absolute inset-0 flex items-center justify-center">
        <h1 className="font-display font-bold text-[18vw] md:text-[14vw] leading-none tracking-[0.08em] text-white/[0.07] select-none">
          MERRA
        </h1>
      </motion.div>

      {/* Content overlay */}
      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-12">
        {/* Micro coordinates */}
        <div className="mb-4">
          <span className="font-mono text-[10px] tracking-[0.3em] text-cobalt/60 uppercase">
            34.6841°N — 69.2074°E — Elev. 1,842m
          </span>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-white max-w-4xl"
        >
          Engineering
          <br />
          <span className="text-cobalt">structural</span> impact
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 text-base md:text-lg text-concrete/60 max-w-xl font-medium"
        >
          Where geological permanence meets surgical precision.
          We orchestrate the physics of the future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 flex items-center gap-8"
        >
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group flex items-center gap-3 bg-cobalt px-8 py-4 text-white font-medium text-sm tracking-[0.15em] uppercase hover:bg-cobalt/90 transition-colors"
          >
            View Projects
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-sm tracking-[0.15em] uppercase text-concrete/50 hover:text-cobalt transition-colors font-medium border-b border-concrete/20 pb-1"
          >
            Start a project
          </button>
        </motion.div>
      </motion.div>

      {/* Crosshair metadata on hover (desktop) */}
      {showMeta && (
        <div
          className="hidden md:block fixed z-50 pointer-events-none"
          style={{ left: mousePos.x + 20, top: mousePos.y + 20 }}
        >
          <div className="bg-obsidian/90 border border-steel/50 px-4 py-3 backdrop-blur-sm">
            <div className="font-mono text-[9px] tracking-[0.2em] text-cobalt uppercase mb-2">
              Project Data
            </div>
            {Object.entries(metadata).map(([key, val]) => (
              <div key={key} className="flex justify-between gap-6 font-mono text-[10px] text-concrete/50">
                <span className="uppercase tracking-wider">{key}</span>
                <span className="text-concrete/80">{val}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ArrowDown className="w-5 h-5 text-concrete/30" />
      </motion.div>
    </section>
  );
}