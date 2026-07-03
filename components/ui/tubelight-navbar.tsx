"use client"

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
  activeTab?: string;
  onChange?: (name: string) => void;
}

export function NavBar({ items, className, activeTab: customActiveTab, onChange }: NavBarProps) {
  const [internalActiveTab, setInternalActiveTab] = useState(items[0].name);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const activeTab = customActiveTab !== undefined ? customActiveTab : internalActiveTab;
  const setActiveTab = (name: string) => {
    if (customActiveTab === undefined) {
      setInternalActiveTab(name);
    }
    if (onChange) {
      onChange(name);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    handleResize();
    handleScroll();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-6 sm:top-6 sm:bottom-auto left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out",
        className,
      )}
    >
      <div 
        className={cn(
          "flex items-center gap-2 border backdrop-blur-lg py-1.5 px-2 rounded-full transition-all duration-300 ease-in-out",
          isScrolled 
            ? "bg-white/80 border-zinc-200/80 shadow-lg shadow-emerald-950/5 text-zinc-800" 
            : "bg-zinc-950/40 border-zinc-800/60 shadow-2xl shadow-black/40 text-zinc-200"
        )}
      >
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={(e) => {
                // If it is a simple hash link, prevent default and trigger change internally
                if (item.url.startsWith("#")) {
                  e.preventDefault();
                }
                setActiveTab(item.name);
              }}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 py-2 sm:px-6 rounded-full transition-all duration-300",
                isScrolled 
                  ? "text-zinc-500 hover:text-zinc-900" 
                  : "text-zinc-400 hover:text-white",
                isActive && (
                  isScrolled 
                    ? "text-emerald-700 font-extrabold" 
                    : "text-white"
                ),
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden flex items-center justify-center">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className={cn(
                    "absolute inset-0 w-full rounded-full -z-10 transition-colors duration-300",
                    isScrolled ? "bg-emerald-500/5" : "bg-white/5"
                  )}
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div 
                    className={cn(
                      "absolute -top-2 sm:-top-2 sm:bottom-auto bottom-auto left-1/2 -translate-x-1/2 w-8 h-1 rounded-t-full transition-colors duration-300",
                      isScrolled ? "bg-emerald-500" : "bg-white"
                    )}
                  >
                    <div 
                      className={cn(
                        "absolute w-12 h-6 rounded-full blur-md -top-2 -left-2 transition-colors duration-300",
                        isScrolled ? "bg-emerald-500/25" : "bg-white/15"
                      )} 
                    />
                    <div 
                      className={cn(
                        "absolute w-8 h-6 rounded-full blur-md -top-1 transition-colors duration-300",
                        isScrolled ? "bg-emerald-500/25" : "bg-white/15"
                      )} 
                    />
                    <div 
                      className={cn(
                        "absolute w-4 h-4 rounded-full blur-sm top-0 left-2 transition-colors duration-300",
                        isScrolled ? "bg-emerald-500/20" : "bg-white/15"
                      )} 
                    />
                  </div>
                </motion.div>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}
