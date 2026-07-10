import React, { useState, useEffect } from "react";

const offices = [
  { city: "Dubai", timezone: "Asia/Dubai" },
  { city: "Amman", timezone: "Asia/Amman" },
  { city: "Kabul", timezone: "Asia/Kabul" },
  { city: "Cairo", timezone: "Africa/Cairo" },
];

function LiveClock({ timezone, city }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: timezone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="flex flex-col">
      <span className="font-mono text-[9px] tracking-[0.3em] text-concrete/30 uppercase">
        {city}
      </span>
      <span className="font-mono text-sm text-concrete/60 mt-1">{time}</span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-steel/20 bg-obsidian">
      <div className="px-6 md:px-12 py-16 md:py-20">
        {/* Top row — clocks & project counter */}
        <div className="flex flex-wrap items-start justify-between gap-12 mb-16">
          {/* Office times */}
          <div className="flex flex-wrap gap-10 md:gap-16">
            {offices.map((office) => (
              <LiveClock key={office.city} {...office} />
            ))}
          </div>

          {/* Project counter */}
          <div className="flex flex-col items-end">
            <span className="font-mono text-[9px] tracking-[0.3em] text-concrete/30 uppercase">
              Active Projects
            </span>
            <span className="font-display text-4xl font-bold text-cobalt mt-1">
              47
            </span>
          </div>
        </div>

        {/* Middle row — links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mb-16">
          <div>
            <span className="font-mono text-[9px] tracking-[0.3em] text-cobalt/50 uppercase mb-4 block">
              Navigation
            </span>
            {["Projects", "Services", "Impact", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" })}
                className="block text-sm text-concrete/40 hover:text-cobalt transition-colors mt-3"
              >
                {item}
              </button>
            ))}
          </div>
          <div>
            <span className="font-mono text-[9px] tracking-[0.3em] text-cobalt/50 uppercase mb-4 block">
              Disciplines
            </span>
            {["Structural", "Geotechnical", "Transportation", "Hydraulic & Marine"].map((item) => (
              <p key={item} className="text-sm text-concrete/40 mt-3">{item}</p>
            ))}
          </div>
          <div>
            <span className="font-mono text-[9px] tracking-[0.3em] text-cobalt/50 uppercase mb-4 block">
              Connect
            </span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-concrete/40 hover:text-cobalt transition-colors mt-3">LinkedIn</a>
            <a href="mailto:contact@merra.engineering" className="block text-sm text-concrete/40 hover:text-cobalt transition-colors mt-3">Email</a>
            <a href="tel:+97141234567" className="block text-sm text-concrete/40 hover:text-cobalt transition-colors mt-3">+971 4 123 4567</a>
          </div>
          <div>
            <span className="font-mono text-[9px] tracking-[0.3em] text-cobalt/50 uppercase mb-4 block">
              Legal
            </span>
            <a href="https://merra.engineering/privacy" target="_blank" rel="noopener noreferrer" className="block text-sm text-concrete/40 hover:text-cobalt transition-colors mt-3">Privacy Policy</a>
            <a href="https://merra.engineering/terms" target="_blank" rel="noopener noreferrer" className="block text-sm text-concrete/40 hover:text-cobalt transition-colors mt-3">Terms of Service</a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-t border-steel/15 pt-8 gap-4">
          <div className="flex items-center gap-4">
            <span className="font-display text-xl font-bold tracking-[0.3em] text-white">
              MERRA
            </span>
            <span className="text-[10px] text-concrete/20 font-mono">
              CIVIL ENGINEERING
            </span>
          </div>
          <span className="font-mono text-[10px] text-concrete/20">
            © {new Date().getFullYear()} Merra Engineering. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}