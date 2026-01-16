"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function TechSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Layered Parallax
  const backLayerY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const midLayerY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const frontLayerY = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center">

      {/* Background Elements (0.1x) */}
      <motion.div style={{ y: backLayerY }} className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
      </motion.div>

      {/* Main Tech Visual - Centered */}
      <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col items-center">

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative w-full aspect-video md:aspect-[21/9]"
        >
          {/* Using the tech image provided */}
          <Image
            src="/images/tech_nike.png"
            alt="Advanced Technology"
            fill
            className="object-contain"
          />

          {/* Interactive Hotspots / Abstract Overlays */}
          <motion.div
            style={{ y: midLayerY }}
            className="absolute top-1/2 left-1/4 w-4 h-4 bg-white rounded-full cursor-pointer"
            whileHover={{ scale: 1.5, boxShadow: "0 0 20px rgba(255,255,255,0.8)" }}
          >
             <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 hover:opacity-100 whitespace-nowrap">
               Carbon Fiber Plate
             </div>
          </motion.div>

           <motion.div
            style={{ y: frontLayerY }}
            className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-white rounded-full cursor-pointer"
            whileHover={{ scale: 1.5, boxShadow: "0 0 20px rgba(255,255,255,0.8)" }}
          >
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 text-xs text-white opacity-0 hover:opacity-100 whitespace-nowrap">
               ZoomX Foam
             </div>
          </motion.div>
        </motion.div>

        <div className="mt-12 text-center z-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Precision Engineering
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Data-driven design meets artistic expression. Every curve, every material is chosen for optimal performance and aesthetics.
          </motion.p>
        </div>

      </div>
    </section>
  );
}
