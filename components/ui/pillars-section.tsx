import React from 'react';
import { motion } from 'motion/react';
import { Shield, Brain, Cpu, Settings, ArrowRight } from 'lucide-react';

export default function PillarsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 18,
      },
    },
  };

  return (
    <section id="about" className="relative w-full bg-white text-zinc-950 py-20 sm:py-28 overflow-hidden z-20 border-b border-zinc-100">
      {/* Aurora Glow effects matching the white-to-green palette */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft upper emerald ray */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-3xl" />
        {/* Delicate lower teal glow */}
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-teal-50/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context, Title and CTA matching the uploaded layout style */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left space-y-6 sm:space-y-8 lg:sticky lg:top-28">
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-black tracking-wider uppercase"
              >
                Core Features
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900 leading-tight uppercase font-sans"
              >
                Features enhance <br className="hidden sm:inline" />
                your AI strategies.
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-zinc-600 text-base sm:text-lg leading-relaxed max-w-lg font-sans"
              >
                Deploy large language models safely across your enterprise. Maximize user productivity while maintaining absolute data sovereignty and compliance.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Neon Lime/Emerald Button matching the screenshot style */}
              <motion.button 
                whileHover={{ scale: 1.03, x: 2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#a3e635] hover:bg-[#84cc16] text-zinc-950 text-sm font-extrabold shadow-md shadow-lime-500/20 hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Explore Pillars</span>
                <ArrowRight className="h-4 w-4 text-zinc-950 stroke-[2.5]" />
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column: Asymmetric Grid of cards representing the Core Value Pillars */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Pillar 1: Absolute Data Privacy */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.03), 0 8px 10px -6px rgb(0 0 0 / 0.03)" }}
              className="bg-white/40 hover:bg-white/60 border border-zinc-200/40 hover:border-zinc-200/80 backdrop-blur-md p-8 rounded-3xl flex flex-col justify-between min-h-[260px] transition-all duration-300 shadow-sm shadow-zinc-100/40"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/80 border border-zinc-200/50 backdrop-blur-sm flex items-center justify-center text-emerald-600 shadow-sm">
                    <Shield className="h-6 w-6 stroke-[2]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-zinc-900 tracking-tight">
                    Absolute Data Privacy
                  </h3>
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed font-sans">
                  High-accuracy PII & PHI redaction in English and Arabic. MonoAI detects and removes sensitive information, securing it in a tokenized vault so it never exposes sensitive information to external AI providers.
                </p>
              </div>
            </motion.div>

            {/* Pillar 2: Intelligent Prompt Optimization */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.03), 0 8px 10px -6px rgb(0 0 0 / 0.03)" }}
              className="bg-white/40 hover:bg-white/60 border border-zinc-200/40 hover:border-zinc-200/80 backdrop-blur-md p-8 rounded-3xl flex flex-col justify-between min-h-[260px] transition-all duration-300 shadow-sm shadow-zinc-100/40"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/80 border border-zinc-200/50 backdrop-blur-sm flex items-center justify-center text-emerald-600 shadow-sm">
                    <Brain className="h-6 w-6 stroke-[2]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-zinc-900 tracking-tight">
                    Intelligent Prompt Optimization
                  </h3>
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed font-sans">
                  Maximize quality, minimize costs. Prompts are automatically refined pre-flight to lower token usage and ensure high-threshold outputs before ever reaching the LLM.
                </p>
              </div>
            </motion.div>

            {/* Pillar 3: Complexity-Based Routing */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.03), 0 8px 10px -6px rgb(0 0 0 / 0.03)" }}
              className="bg-white/40 hover:bg-white/60 border border-zinc-200/40 hover:border-zinc-200/80 backdrop-blur-md p-8 rounded-3xl flex flex-col justify-between min-h-[260px] transition-all duration-300 shadow-sm shadow-zinc-100/40"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/80 border border-zinc-200/50 backdrop-blur-sm flex items-center justify-center text-emerald-600 shadow-sm">
                    <Cpu className="h-6 w-6 stroke-[2]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-zinc-900 tracking-tight">
                    Complexity-Based Routing
                  </h3>
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed font-sans">
                  MonoAI chooses the best AI model based on prompt complexity and deterministic logic. Seamless multi-provider support dynamically switches models to optimize both cost and performance.
                </p>
              </div>
            </motion.div>

            {/* Pillar 4: Unified Enterprise Governance */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.03), 0 8px 10px -6px rgb(0 0 0 / 0.03)" }}
              className="bg-white/40 hover:bg-white/60 border border-zinc-200/40 hover:border-zinc-200/80 backdrop-blur-md p-8 rounded-3xl flex flex-col justify-between min-h-[260px] transition-all duration-300 shadow-sm shadow-zinc-100/40"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/80 border border-zinc-200/50 backdrop-blur-sm flex items-center justify-center text-emerald-600 shadow-sm">
                    <Settings className="h-6 w-6 stroke-[2]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-zinc-900 tracking-tight">
                    Unified Enterprise Governance
                  </h3>
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed font-sans">
                  Maintain organization-wide control over AI usage from a single dashboard. Instantly deploy custom policies, enforce Enterprise RBAC, and monitor token usage across your entire infrastructure.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
