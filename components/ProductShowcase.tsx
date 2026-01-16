"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductShowcase() {
  return (
    <section className="relative min-h-screen w-full bg-black flex items-center justify-center py-20 px-4 overflow-hidden">

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Product Image Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative group cursor-pointer"
        >
          {/* Card Background/Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-3xl transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] border border-white/10" />

          <div className="relative p-8 md:p-12 flex flex-col items-center z-10">
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative w-full aspect-square max-w-md"
            >
              <Image
                src="/images/production_nike.png" // Assuming this is the product image based on file list
                alt="Nike Production Model"
                fill
                className="object-contain drop-shadow-2xl z-10"
              />
              {/* Reflection/Shadow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/50 blur-xl rounded-[100%] opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            </motion.div>
          </div>
        </motion.div>

        {/* Product Details */}
        <div className="flex flex-col space-y-8 text-left">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
              Nike Air Max Dn
            </h2>
            <p className="text-gray-400 text-lg tracking-wide uppercase">
              Dynamic Air Unit System
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-gray-300 leading-relaxed text-xl">
              Experience unreal sensation. Our latest innovation features a dual-pressure air system that reacts to every step, delivering ultimate comfort and futuristic style.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center space-x-6"
          >
            <span className="text-3xl font-mono text-white">$170.00</span>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#000000" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold tracking-wide transition-all duration-200 bg-white/5 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            >
              Add to Cart
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
