import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  // Stagger variants for a beautifully timed mount animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 22,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto space-y-6 select-none"
    >
      {/* Decorative ambient glowing ring reacting to mount */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0.15, 0.25, 0.15], scale: [0.95, 1.05, 0.95] }}
        transition={{
          opacity: { duration: 0.6 },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute -z-10 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"
      />

      {/* Main Statement Headings */}
      <div className="space-y-4">
        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-none font-display uppercase flex flex-col gap-2 md:gap-3 px-2"
        >
          <span className="block whitespace-normal sm:whitespace-nowrap break-words">MAXIMIZE AI PRODUCTIVITY</span>
          <span className="block whitespace-normal sm:whitespace-nowrap break-words text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300">
            MINIMIZE SECURITY RISKS
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-zinc-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed font-sans"
        >
          Secure your generative AI workflows. Automatically detect PII, enforce custom data governance, and control context access across LLM prompts and outputs.
        </motion.p>
      </div>

      {/* Buttons container with spring-loaded items */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto"
      >
        {/* Create account button (green button, white arrow) */}
        <motion.button
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold cursor-pointer shadow-lg shadow-emerald-600/35 transition-colors active:scale-95"
        >
          <span>Create account</span>
          <ArrowRight className="h-4.5 w-4.5 text-white" />
        </motion.button>

        {/* Watch Tutorial button (white button, green play icon) */}
        <motion.button
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-950 text-sm font-bold cursor-pointer transition-colors active:scale-95 shadow-lg shadow-black/10"
        >
          <Play className="h-4 w-4 text-emerald-600 fill-emerald-600" />
          <span>Watch Tutorial</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

