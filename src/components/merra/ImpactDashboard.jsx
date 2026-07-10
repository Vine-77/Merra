import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 1200000, suffix: "", prefix: "", label: "Tons of Carbon Diverted", unit: "tons", format: "1.2M" },
  { value: 340, suffix: "+", prefix: "", label: "Infrastructure Projects Delivered", unit: "projects", format: "340" },
  { value: 53, suffix: "", prefix: "", label: "Countries Impacted", unit: "countries", format: "53" },
  { value: 28, suffix: "", prefix: "", label: "Years of Engineering Excellence", unit: "years", format: "28" },
];

function AnimatedCounter({ target, format, inView }) {
  const [count, setCount] = useState(0);
  const [vibrating, setVibrating] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
        setVibrating(true);
        setTimeout(() => setVibrating(false), 200);
      }
      setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  const display = () => {
    if (target >= 1000000) {
      return (count / 1000000).toFixed(1) + "M";
    }
    return count.toLocaleString();
  };

  return (
    <span className={vibrating ? "count-vibrate" : ""}>
      {display()}
    </span>
  );
}

export default function ImpactDashboard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" ref={ref} className="relative py-32 md:py-48 border-t border-steel/20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/6a5028f2f5e8eca8ebc482ba/7bcf711f1_generated_b9eb97c5.png"
          alt="Aerial view of an urban masterplan showing geometric engineering precision"
          className="w-full h-full object-cover opacity-[0.06]"
        />
      </div>

      <div className="relative px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <span className="font-mono text-[10px] tracking-[0.4em] text-cobalt uppercase">
            004 — Impact Dashboard
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mt-4 tracking-tight text-white">
            Measured
            <span className="text-cobalt"> results</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-12 max-w-5xl">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="border-l-2 border-cobalt/30 pl-8"
            >
              <div className="font-display text-6xl md:text-7xl lg:text-[10vw] xl:text-[8rem] font-bold text-cobalt leading-none">
                <AnimatedCounter target={stat.value} format={stat.format} inView={isInView} />
                {stat.suffix}
              </div>
              <p className="mt-4 text-sm tracking-[0.15em] uppercase text-concrete/40 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}