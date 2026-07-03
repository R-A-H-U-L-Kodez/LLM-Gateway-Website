import React, { useState } from 'react';
import { Info, Briefcase, DollarSign, Building2, BookOpen } from 'lucide-react';
import ShaderBackground from '@/components/ui/shader-background';
import { NavBar } from '@/components/ui/tubelight-navbar';
import HeroSection from '@/components/ui/hero-section';
import PillarsSection from '@/components/ui/pillars-section';
import FeaturesSection from '@/components/ui/features-section';
import DifferenceSection from '@/components/ui/difference-section';
import Header from '@/components/ui/header';

export default function App() {
  const [activeTab, setActiveTab] = useState('About');

  const navItems = [
    { name: 'About', url: '#about', icon: Info },
    { name: 'Services', url: '#services', icon: Briefcase },
    { name: 'Difference', url: '#difference', icon: DollarSign },
    { name: 'Company', url: '#company', icon: Building2 },
    { name: 'Resources', url: '#resources', icon: BookOpen }
  ];

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden w-full selection:bg-emerald-500/30 selection:text-white scroll-smooth">
      {/* Premium Dynamic Top Header with brand logo & sign in / register actions */}
      <Header />

      {/* GPU-accelerated WebGL Plasma Shader Background */}
      <ShaderBackground />

      {/* Main viewport with a responsive golden-ratio layout to keep HeroSection positioned perfectly higher up */}
      <main className="relative z-10 w-full px-4 min-h-screen flex items-start justify-center pt-[15vh] sm:pt-[22vh] pb-16">
        <HeroSection />
      </main>

      {/* Dynamic Key Value Pillars Section */}
      <PillarsSection />

      {/* Elegant Key Features section with glowing aurora lighting on a crisp white backdrop */}
      <FeaturesSection />

      {/* Side-by-side comparison difference section */}
      <DifferenceSection />

      {/* Premium tactile Tubelight Navbar */}
      <NavBar items={navItems} activeTab={activeTab} onChange={setActiveTab} />
    </div>
  );
}
