import React from "react";
import Navbar from "@/components/merra/Navbar";
import HeroSection from "@/components/merra/HeroSection";
import ProjectArchive from "@/components/merra/ProjectArchive";
import ServicesSection from "@/components/merra/ServicesSection";
import ImpactDashboard from "@/components/merra/ImpactDashboard";
import AboutSection from "@/components/merra/AboutSection";
import ContactSection from "@/components/merra/ContactSection";
import Footer from "@/components/merra/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-obsidian relative">
      {/* Datum Line */}
      <div className="datum-line hidden lg:block" />

      <Navbar />
      <HeroSection />
      <ProjectArchive />
      <ServicesSection />
      <ImpactDashboard />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}