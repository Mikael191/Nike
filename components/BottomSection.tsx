"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";

export default function BottomSection() {
  const links = ["Find a Store", "Become a Member", "Sign Up for Email", "Send Us Feedback"];
  const helpLinks = ["Order Status", "Shipping and Delivery", "Returns", "Payment Options", "Contact Us"];
  const aboutLinks = ["News", "Careers", "Investors", "Sustainability"];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="relative bg-black text-white pt-20 pb-10 overflow-hidden">
      {/* Background Image - Deep Black / Texture */}
      <div className="absolute inset-0 z-0 opacity-30">
         <Image
            src="/images/bottom_nike.png"
            alt="Footer Background"
            fill
            className="object-cover object-bottom"
          />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20"
        >
          {/* Column 1 - Primary Links */}
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <motion.a
                key={link}
                href="#"
                variants={itemVariants}
                className="font-bold uppercase text-sm tracking-widest hover:text-gray-300 transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Column 2 - Help */}
          <div className="flex flex-col space-y-4">
             <motion.h4 variants={itemVariants} className="font-bold text-gray-400 uppercase text-xs tracking-wider mb-2">Get Help</motion.h4>
            {helpLinks.map((link) => (
              <motion.a
                key={link}
                href="#"
                variants={itemVariants}
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Column 3 - About */}
          <div className="flex flex-col space-y-4">
            <motion.h4 variants={itemVariants} className="font-bold text-gray-400 uppercase text-xs tracking-wider mb-2">About Nike</motion.h4>
             {aboutLinks.map((link) => (
              <motion.a
                key={link}
                href="#"
                variants={itemVariants}
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Column 4 - Socials */}
          <div className="flex space-x-6 justify-start md:justify-end">
            {[Twitter, Facebook, Youtube, Instagram].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                variants={itemVariants}
                whileHover={{ scale: 1.1, color: "#ffffff", textShadow: "0 0 8px rgba(255,255,255,0.5)" }}
                className="text-gray-400 transition-colors"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.8 }}
           className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500"
        >
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span>© 2024 Nike, Inc. All Rights Reserved</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-white">Guides</a>
            <a href="#" className="hover:text-white">Terms of Sale</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Nike Privacy Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
