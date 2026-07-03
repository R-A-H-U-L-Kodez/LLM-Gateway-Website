import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  Sparkles, 
  Cpu, 
  Scale, 
  Zap, 
  EyeOff, 
  Activity, 
  Database,
  Coins,
  Brain
} from 'lucide-react';

export default function DifferenceSection() {
  const comparisonRows = [
    {
      label: "DATA PRIVACY",
      left: {
        value: "Exposed PII & Secrets",
        desc: "Leaks confidential data directly to external providers",
        isNegative: true,
        icon: EyeOff
      },
      right: {
        value: "Absolute Data Privacy",
        desc: "Native redaction of PII & PHI, tokenized in secure vault",
        isNegative: false,
        icon: ShieldCheck
      }
    },
    {
      label: "PROMPT TUNING",
      left: {
        value: "Unrefined Prompts",
        desc: "Raw, unoptimized inputs causing excessive token waste",
        isNegative: true,
        icon: Coins
      },
      right: {
        value: "Intelligent Optimization",
        desc: "Automated pre-flight refining for high-threshold outputs",
        isNegative: false,
        icon: Brain
      }
    },
    {
      label: "MODEL ROUTING",
      left: {
        value: "Rigid Single-Model",
        desc: "Locked in to one provider, manual switching needed",
        isNegative: true,
        icon: Cpu
      },
      right: {
        value: "Complexity-Based Routing",
        desc: "Switches dynamically based on prompt complexity and logic",
        isNegative: false,
        icon: Zap
      }
    },
    {
      label: "GOVERNANCE",
      left: {
        value: "Zero Visibility",
        desc: "No rate limits, no audit logs, no RBAC controls",
        isNegative: true,
        icon: ShieldAlert
      },
      right: {
        value: "Unified Enterprise Control",
        desc: "Control plane for instant policies and token tracking",
        isNegative: false,
        icon: Scale
      }
    },
    {
      label: "COST EFFICIENCY",
      left: {
        value: "Runaway LLM Spend",
        desc: "Paying full price for repetitive or duplicate prompts",
        isNegative: true,
        icon: Database
      },
      right: {
        value: "Smart Caching & Routing",
        desc: "Cached duplicate request matching for near-zero cost",
        isNegative: false,
        icon: Sparkles
      }
    }
  ];

  return (
    <section id="difference" className="relative w-full bg-zinc-950 text-white py-24 sm:py-32 overflow-hidden z-20 border-b border-zinc-900">
      {/* Deep dark emerald/black background with subtle green neon glow grids */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-950/15 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-900/10 rounded-full blur-[140px]" />
        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 flex flex-col items-center">
        {/* Header section with title */}
        <div className="text-center max-w-3xl space-y-4 mb-16 sm:mb-20">
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase font-display leading-tight"
          >
            Same AI prompts. <br />
            Two completely different reads.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-2xl"
          >
            A side-by-side look at what a standard unsecured API integration gets you — versus what MonoAI secures and optimizes natively for your enterprise.
          </motion.p>
        </div>

        {/* Major Comparison Box exactly matching the uploaded mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl rounded-[2.5rem] overflow-hidden border border-zinc-800/50 shadow-2xl bg-zinc-950 grid grid-cols-1 md:grid-cols-2 relative"
        >
          {/* Central VS Badge */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-30">
            <div className="w-16 h-16 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center shadow-2xl text-xs font-black tracking-widest text-emerald-400 bg-gradient-to-b from-zinc-900 to-zinc-950 select-none">
              VS
            </div>
          </div>

          {/* LEFT SIDE: Bloomberg alternative (Raw LLM APIs) */}
          <div className="bg-[#FAF9F6] text-zinc-950 p-8 sm:p-12 md:pr-14 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-200/50 relative">
            <div className="flex items-center justify-between mb-10 sm:mb-12">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-white">
                  <span className="text-sm font-black tracking-tight">R</span>
                </div>
                <h3 className="text-2xl font-black text-zinc-950 tracking-tight font-display">
                  Raw LLM APIs
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-500 text-[10px] sm:text-xs font-black tracking-wider uppercase border border-zinc-200/60 select-none">
                UNREGULATED
              </span>
            </div>

            {/* Comparison elements */}
            <div className="divide-y divide-zinc-200/60 flex-1">
              {comparisonRows.map((row, idx) => {
                const Icon = row.left.icon;
                return (
                  <div key={idx} className="py-6 flex gap-4 items-start first:pt-0 last:pb-0">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-zinc-100 border border-zinc-200/60 flex items-center justify-center text-zinc-600 shadow-sm">
                      <Icon className="h-5 w-5 stroke-[2]" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-black tracking-widest text-zinc-400 uppercase select-none">
                        {row.label}
                      </span>
                      <h4 className="text-base sm:text-lg font-black text-zinc-900 leading-tight">
                        {row.left.value}
                      </h4>
                      <p className="text-zinc-500 text-xs font-medium leading-normal flex items-start gap-1">
                        <span className="text-amber-600 shrink-0 font-bold">×</span>
                        <span>{row.left.desc}</span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 sm:mt-12 pt-6 border-t border-zinc-200/40 text-left text-zinc-400 text-[10px] sm:text-xs font-medium">
              Based on standard multi-provider direct SDK implementations
            </div>
          </div>

          {/* RIGHT SIDE: Short Squeez alternative (MonoAI Gateway) */}
          <div className="bg-gradient-to-b from-[#022c22]/90 to-zinc-950 p-8 sm:p-12 md:pl-14 flex flex-col justify-between relative overflow-hidden">
            {/* Subtle premium mesh overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#10b98110_0%,transparent_50%)] pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

            <div className="flex items-center justify-between mb-10 sm:mb-12 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <span className="text-sm font-black tracking-tight">M</span>
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight font-display">
                  MonoAI Gateway
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] sm:text-xs font-black tracking-wider uppercase border border-emerald-500/20 select-none">
                RECOMMENDED
              </span>
            </div>

            {/* Comparison elements */}
            <div className="divide-y divide-emerald-950/40 flex-1 relative z-10">
              {comparisonRows.map((row, idx) => {
                const Icon = row.right.icon;
                return (
                  <div key={idx} className="py-6 flex gap-4 items-start first:pt-0 last:pb-0">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-[#011c14] border border-emerald-900/30 flex items-center justify-center text-emerald-400 shadow-sm shadow-black/10">
                      <Icon className="h-5 w-5 stroke-[2]" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-black tracking-widest text-emerald-500/80 uppercase select-none">
                        {row.label}
                      </span>
                      <h4 className="text-base sm:text-lg font-black text-white leading-tight">
                        {row.right.value}
                      </h4>
                      <p className="text-zinc-400 text-xs font-medium leading-normal flex items-start gap-1">
                        <span className="text-emerald-400 shrink-0 font-bold">✓</span>
                        <span>{row.right.desc}</span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 sm:mt-12 pt-6 border-t border-emerald-950/40 text-left text-zinc-500 text-[10px] sm:text-xs font-medium relative z-10">
              Trusted by enterprise security officers globally
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
