import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldAlert, 
  Fingerprint, 
  ShieldCheck, 
  Workflow, 
  Scale, 
  Building2, 
  Cpu, 
  Plug
} from 'lucide-react';

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

const features: FeatureItem[] = [
  {
    id: 'sensitive-data',
    title: 'Sensitive Data Detection',
    description: 'Automatically detect PII, PHI, and confidential enterprise data across prompts, documents, and AI outputs.',
    icon: ShieldAlert,
  },
  {
    id: 'context-access',
    title: 'Context-Based Access Control',
    description: 'Control who can see what information during AI interactions based on identity, role, and context.',
    icon: Fingerprint,
  },
  {
    id: 'privacy-tokenization',
    title: 'Privacy-Preserving Tokenization',
    description: 'Protect sensitive values while preserving semantic meaning so AI models maintain accuracy.',
    icon: ShieldCheck,
  },
  {
    id: 'secure-rag',
    title: 'Secure RAG & Agent Workflows',
    description: 'Protect data flowing through RAG pipelines, MCP tools, and multi-agent systems.',
    icon: Workflow,
  },
  {
    id: 'policy-governance',
    title: 'Policy-Driven Governance',
    description: 'Define policies once and enforce them automatically across AI prompts, responses, and workflows.',
    icon: Scale,
  },
  {
    id: 'enterprise-compliance',
    title: 'Enterprise Compliance',
    description: 'Built-in support for regulations like HIPAA, GDPR, PDPL, and DPDP with full audit trails.',
    icon: Building2,
  },
  {
    id: 'ai-stack',
    title: 'AI Stack Integration',
    description: 'Integrates with LLM platforms, orchestration frameworks, vector databases, and model gateways.',
    icon: Cpu,
  },
  {
    id: 'flexible-deployment',
    title: 'Flexible Deployment',
    description: 'Run Adopt AI in SaaS, private VPC, or fully on-premise environments.',
    icon: Plug,
  }
];

export default function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="services" className="relative w-full bg-white text-zinc-950 py-24 sm:py-32 overflow-hidden z-20">
      {/* Aurora Lighting (Emerald/Teal gradient glows on top of white background) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft emerald radial glow top left */}
        <div className="absolute -top-48 -left-48 w-96 h-96 sm:w-[600px] sm:h-[600px] bg-emerald-100/40 rounded-full blur-3xl" />
        {/* Soft teal radial glow bottom right */}
        <div className="absolute -bottom-48 -right-48 w-96 h-96 sm:w-[600px] sm:h-[600px] bg-teal-100/30 rounded-full blur-3xl" />
        {/* Center glowing streak resembling an aurora ray */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-4/5 h-[350px] bg-gradient-to-tr from-emerald-50/10 via-teal-50/20 to-emerald-50/5 rounded-full blur-2xl transform rotate-3" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header section with refined typography and subtle animations */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900 font-sans uppercase mb-4"
          >
            Key Features
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-600 text-base sm:text-lg font-sans"
          >
            Core capabilities that make <span className="font-bold text-zinc-900">Adopt AI</span> the most advanced AI data security platform
          </motion.p>
        </div>

        {/* Continuous Grid of Features with integrated borders */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-zinc-200/60 bg-white/40 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl shadow-emerald-950/5"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                variants={cardVariants}
                whileHover={{ y: -4, backgroundColor: 'rgba(16, 185, 129, 0.04)' }}
                className="group border-r border-b border-zinc-200/60 p-8 sm:p-10 flex flex-col items-start text-left transition-all duration-300 relative overflow-hidden"
              >
                {/* Micro glow behind icon on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Styled icon box inside subtle emerald block */}
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm shadow-emerald-600/10">
                  <Icon className="h-6 w-6 stroke-[2]" />
                </div>

                {/* Feature Title */}
                <h4 className="text-lg font-extrabold text-zinc-900 mb-3 tracking-tight group-hover:text-emerald-900 transition-colors">
                  {feature.title}
                </h4>

                {/* Feature Description */}
                <p className="text-zinc-600 text-sm leading-relaxed font-sans">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
