"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax: background moves slower than foreground
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);
  const textY = useTransform(scrollY, [0, 1000], [0, 100]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero_nike.png"
          alt="Nike Hero Background"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </motion.div>

      {/* Particle Effect Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-20 animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full opacity-20 animate-bounce" />
         {/* More subtle particles could be added here or via canvas */}
      </div>

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-4 text-white text-glow"
        >
          Just Do It
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl font-light tracking-widest text-gray-200 mb-10"
        >
          Engineered for the Unstoppable
        </motion.p>

        <motion.button
          whileHover={{ scale: 1 }}
          initial={{ scale: 0.9 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-wider rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        >
          <span className="relative z-10">Experience Now</span>
          <div className="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </motion.div>
    </section>
  );
}
