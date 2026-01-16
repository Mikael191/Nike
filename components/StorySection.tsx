"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax for image: moves slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-black flex items-center py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Image Section - Left */}
        <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden rounded-lg group">
          <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
             <Image
              src="/images/story_nike.png"
              alt="Athlete Story"
              fill
              className="object-cover object-center opacity-0 transition-opacity duration-700 delay-200"
              onLoadingComplete={(img) => img.classList.remove("opacity-0")}
            />
          </motion.div>

          {/* Hover Overlay */}
           <motion.div
            className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
           />

           {/* Reveal Animation Wrapper */}
           <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="absolute inset-0 bg-black z-10 pointer-events-none"
             onAnimationComplete={() => {
               // This hack removes the black overlay after animation
                 // In a real scenario, I'd animate height or clip-path for a reveal
             }}
             style={{ display: "none" }} // Disabling this simple overlay approach for a cleaner opacity fade in component
           />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
                {/* Re-implementing the image here to ensure clean animation control if needed,
                    but the parallax div above handles the image.
                    Let's just apply a zoom effect on the container.
                */}
            </motion.div>
        </div>

        {/* Text Section - Right */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <h3 className="text-gray-400 font-medium tracking-widest uppercase mb-4">
              The Legacy
            </h3>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-none">
              Defy the <br /> Impossible
            </h2>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="prose prose-invert prose-lg text-gray-300 mb-8"
          >
            <p>
              Greatness isn&apos;t born. It&apos;s made. Mile after mile, rep after rep.
              Our athletes don&apos;t just compete; they change the game.
              Designed for those who refuse to settle, this collection embodies
              the spirit of relentless progress.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            <a href="#" className="inline-block text-white font-bold text-lg group relative overflow-hidden">
              <span className="relative z-10">Read the Story</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
