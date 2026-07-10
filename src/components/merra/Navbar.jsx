import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Impact", href: "#impact" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-obsidian/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-5">
          <button onClick={() => handleNav("#hero")} className="relative z-50">
            <span className="font-display text-2xl font-bold tracking-[0.3em] text-white">
              MERRA
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-sm font-medium tracking-[0.15em] uppercase text-concrete/70 hover:text-cobalt transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative z-50 flex flex-col gap-1.5 p-2"
          >
            <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[4.5px]" : ""}`} />
            <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[1.5px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-obsidian/95 menu-backdrop flex items-center justify-center"
          >
            {/* Grid background */}
            <div className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(#E8E9EB 1px, transparent 1px), linear-gradient(90deg, #E8E9EB 1px, transparent 1px)`,
                backgroundSize: "80px 80px",
              }}
            />

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center gap-8"
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  onClick={() => handleNav(link.href)}
                  className="font-display text-4xl md:text-6xl font-bold tracking-[0.2em] uppercase text-concrete/80 hover:text-cobalt transition-colors duration-300"
                >
                  {link.label}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}