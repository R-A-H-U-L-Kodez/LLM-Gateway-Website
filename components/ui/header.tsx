import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Flower, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent py-6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300",
            isScrolled 
              ? "bg-emerald-50 border border-emerald-200/60 group-hover:bg-emerald-100/80" 
              : "bg-emerald-500/10 border border-emerald-500/20 group-hover:bg-emerald-500/20"
          )}>
            <Flower className={cn(
              "h-6 w-6 group-hover:rotate-45 transition-transform duration-500",
              isScrolled ? "text-emerald-600" : "text-emerald-400"
            )} />
          </div>
          <span className={cn(
            "text-xl sm:text-2xl font-extrabold tracking-widest uppercase font-display select-none transition-colors duration-300",
            isScrolled ? "text-zinc-900" : "text-white"
          )}>
            Euphoria
          </span>
        </motion.div>

        {/* Desktop Auth Actions */}
        <div className="hidden md:flex items-center gap-6">
          <motion.button
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={cn(
              "font-semibold text-sm transition-colors cursor-pointer py-2 px-4",
              isScrolled 
                ? "text-zinc-600 hover:text-emerald-600" 
                : "text-white hover:text-emerald-300"
            )}
          >
            Sign in
          </motion.button>
          
          <motion.button
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            className={cn(
              "font-bold text-sm px-6 py-2.5 rounded-full shadow-lg transition-colors cursor-pointer",
              isScrolled 
                ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/10" 
                : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/20"
            )}
          >
            Register
          </motion.button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "p-1.5 focus:outline-none transition-colors",
              isScrolled 
                ? "text-zinc-800 hover:text-emerald-600" 
                : "text-white hover:text-emerald-400"
            )}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={cn(
            "md:hidden absolute top-full left-0 right-0 border-b px-6 py-6 flex flex-col gap-4 shadow-2xl transition-colors duration-300",
            isScrolled 
              ? "bg-white/95 border-zinc-200/80 backdrop-blur-xl" 
              : "bg-zinc-950/95 border-zinc-800/80 backdrop-blur-xl"
          )}
        >
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className={cn(
              "w-full text-center py-3 font-semibold text-base transition-colors border-b",
              isScrolled 
                ? "text-zinc-700 hover:text-emerald-600 border-zinc-100" 
                : "text-white hover:text-emerald-400 border-zinc-900"
            )}
          >
            Sign in
          </button>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 rounded-full font-bold text-base shadow-lg shadow-emerald-600/15 transition-colors"
          >
            Register
          </button>
        </motion.div>
      )}
    </header>
  );
}
