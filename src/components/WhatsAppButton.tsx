"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 120 }}
      className="fixed bottom-8 right-8 z-50 group"
    >
      {/* Glow Ring Effect */}
      <div className="absolute inset-0 rounded-full bg-green-500/30 blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500"></div>

      {/* Button */}
      <motion.a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg shadow-green-600/40 hover:shadow-green-500/60 transition-all duration-300"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </motion.a>

      {/* Tooltip */}
      <div className="absolute right-16 bottom-3 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 shadow-lg border border-gray-800">
        Chat on WhatsApp
      </div>
    </motion.div>
  );
};

export default WhatsAppButton;
