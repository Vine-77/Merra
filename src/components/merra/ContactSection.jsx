import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="relative py-32 md:py-48 border-t border-steel/20">
      <div className="px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-mono text-[10px] tracking-[0.4em] text-cobalt uppercase">
            006 — Initiate
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mt-4 tracking-tight text-white">
            Start a
            <span className="text-cobalt"> project</span>
          </h2>
          <p className="mt-4 text-concrete/40 max-w-lg text-base">
            Submit your project specifications. Our lead engineer will respond
            within 24 hours with a preliminary structural assessment.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-24"
          >
            <CheckCircle className="w-16 h-16 text-cobalt mb-6" />
            <h3 className="font-display text-3xl font-bold text-white">
              Transmission received
            </h3>
            <p className="text-concrete/40 mt-4 text-center max-w-md">
              Your project specifications have been logged. A lead engineer from
              Merra will contact you within 24 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl"
          >
            <InputField label="Full Name" name="name" value={form.name} onChange={handleChange} required />
            <InputField label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
            <InputField label="Company / Organization" name="company" value={form.company} onChange={handleChange} />
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] tracking-[0.3em] text-concrete/40 uppercase">
                Project Type
              </label>
              <select
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
                className="bg-transparent border border-steel/30 text-concrete/80 px-4 py-3 text-sm focus:border-cobalt focus:outline-none transition-colors"
              >
                <option value="" className="bg-obsidian">Select discipline</option>
                <option value="structural" className="bg-obsidian">Structural Engineering</option>
                <option value="geotechnical" className="bg-obsidian">Geotechnical Engineering</option>
                <option value="transportation" className="bg-obsidian">Transportation Infrastructure</option>
                <option value="hydraulic" className="bg-obsidian">Hydraulic & Marine</option>
                <option value="other" className="bg-obsidian">Other</option>
              </select>
            </div>
            <div className="lg:col-span-2 flex flex-col gap-2">
              <label className="font-mono text-[10px] tracking-[0.3em] text-concrete/40 uppercase">
                Project Brief
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Describe your project requirements, site conditions, and timeline..."
                className="bg-transparent border border-steel/30 text-concrete/80 px-4 py-3 text-sm focus:border-cobalt focus:outline-none transition-colors resize-none placeholder:text-concrete/20"
                required
              />
            </div>
            <div className="lg:col-span-2">
              <button
                type="submit"
                className="group flex items-center gap-3 bg-cobalt px-10 py-4 text-white font-medium text-sm tracking-[0.15em] uppercase hover:bg-cobalt/90 transition-colors"
              >
                Submit Specifications
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}

function InputField({ label, name, type = "text", value, onChange, required = false }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-mono text-[10px] tracking-[0.3em] text-concrete/40 uppercase">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="bg-transparent border border-steel/30 text-concrete/80 px-4 py-3 text-sm focus:border-cobalt focus:outline-none transition-colors placeholder:text-concrete/20"
      />
    </div>
  );
}