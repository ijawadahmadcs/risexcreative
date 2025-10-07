import React from 'react'
import { motion } from "framer-motion";
import { ChevronRight } from 'lucide-react';
const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-red-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-red-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-red-600/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Turning Ideas Into Reality
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-4"
          >
            Marketing | Designing | Development | Startup Consultancy
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto"
          >
            We don`t just build brands — we make them <span className="text-red-600 font-semibold">Rise</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="#contact" className="px-8 py-4 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-all hover:scale-105 shadow-lg shadow-red-600/50">
              Get Started
            </a>
            <a href="#services" className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white rounded-full font-semibold hover:bg-white/20 transition-all hover:scale-105 border border-white/20">
              Explore Services
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronRight className="text-white rotate-90" size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection
