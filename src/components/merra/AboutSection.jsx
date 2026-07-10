import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-32 md:py-48 border-t border-steel/20">
      <div className="px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-[10px] tracking-[0.4em] text-cobalt uppercase">
            005 — Who We Are
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mt-12">
          {/* Left — large text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight">
              We don't just build
              <br />
              infrastructure.
              <br />
              <span className="text-cobalt">We orchestrate
              <br />
              the physics
              <br />
              of the future.</span>
            </h2>
          </motion.div>

          {/* Right — description */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 flex flex-col justify-end"
          >
            <p className="text-concrete/50 text-base leading-relaxed">
              Merra is a multinational civil engineering practice with a legacy spanning
              nearly three decades. Operating from offices across the Middle East,
              North Africa, and Central Asia, our engineering solutions have shaped
              infrastructure in 53 countries.
            </p>
            <p className="text-concrete/50 text-base leading-relaxed mt-6">
              We are structural engineers, geotechnical specialists, transportation
              planners, and hydraulic designers united by a singular conviction: that
              precision engineering is the foundation of human progress.
            </p>

            {/* Key facts */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              {[
                { label: "Founded", value: "1998" },
                { label: "Offices", value: "12" },
                { label: "Engineers", value: "860+" },
                { label: "Countries", value: "53" },
              ].map((fact) => (
                <div key={fact.label} className="border-t border-steel/20 pt-4">
                  <span className="font-mono text-[9px] tracking-[0.3em] text-cobalt/50 uppercase">
                    {fact.label}
                  </span>
                  <p className="font-display text-2xl font-bold text-white mt-1">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Full-width image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 relative overflow-hidden aspect-[21/9]"
        >
          <img
            src="https://media.base44.com/images/public/6a5028f2f5e8eca8ebc482ba/670fffc6b_generated_877af9b4.png"
            alt="Macro detail of poured concrete texture with formwork patterns"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-obsidian/20" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(#0055FF 1px, transparent 1px), linear-gradient(90deg, #0055FF 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}