import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Structural Engineering",
    description:
      "Analysis and design of load-bearing systems for buildings, bridges, and industrial facilities. We specialize in post-tensioned concrete, steel framing, and seismic-resistant structures that define skylines and withstand geological forces.",
    image: "https://media.base44.com/images/public/6a5028f2f5e8eca8ebc482ba/7343d91dc_generated_c423aa2d.png",
    details: [
      "Finite Element Analysis",
      "Seismic Design & Retrofit",
      "Post-Tensioned Systems",
      "Steel Connection Design",
    ],
  },
  {
    id: "02",
    title: "Geotechnical Engineering",
    description:
      "Deep investigation of subsurface conditions to engineer foundations that transfer massive loads into the earth with surgical precision. From pile driving to slope stabilization, we command the geology beneath every structure.",
    image: "https://media.base44.com/images/public/6a5028f2f5e8eca8ebc482ba/b77defca3_generated_283d0ebd.png",
    details: [
      "Site Investigation & Testing",
      "Deep Foundation Design",
      "Slope Stability Analysis",
      "Ground Improvement",
    ],
  },
  {
    id: "03",
    title: "Transportation Infrastructure",
    description:
      "Planning, design, and delivery of highways, interchanges, rail networks, and urban transit systems. Our transportation solutions move millions while minimizing environmental disruption and maximizing flow capacity.",
    image: "https://media.base44.com/images/public/6a5028f2f5e8eca8ebc482ba/3b8ea11cd_generated_f00be768.png",
    details: [
      "Highway & Interchange Design",
      "Traffic Flow Modeling",
      "Rail & Transit Systems",
      "Pavement Engineering",
    ],
  },
  {
    id: "04",
    title: "Hydraulic & Marine",
    description:
      "Design and construction of dams, seawalls, water treatment facilities, and coastal defense systems. We engineer water—controlling, directing, and harnessing one of nature's most powerful forces for human benefit.",
    image: "https://media.base44.com/images/public/6a5028f2f5e8eca8ebc482ba/2398aaf0b_generated_289e21b3.png",
    details: [
      "Dam & Reservoir Design",
      "Coastal Protection Systems",
      "Water Treatment Facilities",
      "Flood Risk Management",
    ],
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={sectionRef} className="relative py-32 md:py-48 border-t border-steel/20">
      {/* Header */}
      <div className="px-6 md:px-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-[10px] tracking-[0.4em] text-cobalt uppercase">
            003 — Technical Anatomy
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mt-4 tracking-tight text-white">
            Core
            <span className="text-cobalt"> disciplines</span>
          </h2>
        </motion.div>
      </div>

      {/* Service items */}
      <div className="flex flex-col">
        {services.map((service, i) => (
          <ServiceItem key={service.id} service={service} index={i} />
        ))}
      </div>

      {/* Sticky CTA */}
      <div className="fixed bottom-8 right-8 z-30 hidden lg:block">
        <button
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-cobalt text-white px-6 py-3 text-xs tracking-[0.2em] uppercase font-medium hover:bg-cobalt/90 transition-colors shadow-lg shadow-cobalt/20"
        >
          Consult Lead Engineer
        </button>
      </div>
    </section>
  );
}

function ServiceItem({ service, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="border-t border-steel/20 group"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left — sticky title */}
        <div className="lg:col-span-4 px-6 md:px-12 py-12 lg:py-20 lg:sticky lg:top-20 lg:self-start">
          <span className="font-mono text-[10px] tracking-[0.3em] text-cobalt/50">{service.id}</span>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-white mt-3 leading-tight">
            {service.title}
          </h3>
        </div>

        {/* Right — scrolling content */}
        <div className="lg:col-span-8 px-6 md:px-12 lg:pl-0 pb-12 lg:py-20">
          {/* Image */}
          <div className="relative overflow-hidden mb-10 aspect-[4/3]">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-transparent transition-colors duration-500" />
            {/* Blueprint grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.04] group-hover:opacity-0 transition-opacity duration-500"
              style={{
                backgroundImage: `linear-gradient(#0055FF 1px, transparent 1px), linear-gradient(90deg, #0055FF 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <p className="text-concrete/60 text-base leading-relaxed max-w-2xl">
            {service.description}
          </p>

          {/* Technical layers */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.details.map((detail, i) => (
              <div
                key={i}
                className="flex items-center gap-3 py-3 border-b border-steel/15"
              >
                <span className="font-mono text-[9px] text-cobalt/40">
                  {service.id}.{i + 1}
                </span>
                <span className="text-sm text-concrete/50 font-medium">{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}