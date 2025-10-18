"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBullhorn,
  FaPalette,
  FaCode,
  FaRocket,
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

interface Service {
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  gradient: string;
  bgGradient: string;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      icon: <FaBullhorn />,
      title: "Marketing",
      shortDesc: "Boost your reach & engagement.",
      longDesc:
        "We craft data-driven marketing strategies — from social media management to SEO and paid ad campaigns — that increase your brand's visibility and attract loyal customers.",
      features: ["Social Media Management", "SEO Optimization", "Paid Campaigns", "Analytics & Reporting"],
      gradient: "from-red-600 to-red-700",
      bgGradient: "from-red-600/10 to-red-700/10",
    },
    {
      icon: <FaPalette />,
      title: "Designing",
      shortDesc: "Crafting timeless brand identities.",
      longDesc:
        "Our design team transforms ideas into visually stunning experiences. From logos and branding to UI/UX layouts, we ensure every pixel speaks your brand's story.",
      features: ["Brand Identity", "UI/UX Design", "Logo Design", "Digital Assets"],
      gradient: "from-red-600 to-red-700",
      bgGradient: "from-red-600/10 to-red-700/10",
    },
    {
      icon: <FaCode />,
      title: "Development",
      shortDesc: "Building modern, fast experiences.",
      longDesc:
        "We build responsive, high-performance websites and web apps using the latest technologies. From landing pages to full-scale systems — we deliver scalable and secure solutions.",
      features: ["Web Development", "Mobile Apps", "API Integration", "Cloud Solutions"],
      gradient: "from-red-600 to-red-700",
      bgGradient: "from-red-600/10 to-red-700/10",
    },
    {
      icon: <FaRocket />,
      title: "Startup Consultancy",
      shortDesc: "Helping startups launch & scale.",
      longDesc:
        "We guide founders from concept to execution — providing business strategy, digital transformation advice, and actionable insights to accelerate growth.",
      features: ["Business Strategy", "Market Research", "Growth Planning", "Funding Guidance"],
      gradient: "from-red-600 to-red-700",
      bgGradient: "from-red-600/10 to-red-700/10",
    },
  ];

  const [index, setIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -1000 : 1000,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeIn" as const },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="services"
      className="relative py-32 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-gradient-to-br from-red-600/20 to-red-700/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-gradient-to-br from-red-600/20 to-red-700/20 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-red-600/20 rounded-full border border-red-600/30">
            <span className="text-sm font-semibold text-red-400">
              OUR EXPERTISE
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Services We
            <span className="block text-red-600">
              Excel At
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From concept to execution, we deliver end-to-end solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-8 md:-left-5 top-1/2 -translate-y-1/2 z-50 text-white bg-red-600 hover:bg-red-700 rounded-full p-3 shadow-2xl transition-all duration-300 hover:scale-110"
          >
            <FaArrowLeft className="text-lg" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-8 md:-right-5 top-1/2 -translate-y-1/2 z-50 text-white bg-red-600 hover:bg-red-700 rounded-full p-3 shadow-2xl transition-all duration-300 hover:scale-110"
          >
            <FaArrowRight className="text-lg" />
          </button>

          {/* Slides */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-12">
                {/* Left - Visual Card */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative group"
                >
                  <div
                    className={`relative bg-gradient-to-br ${services[index].bgGradient} border border-gray-800 rounded-3xl p-12 backdrop-blur-xl overflow-hidden hover:border-red-600 transition-all duration-300`}
                  >
                    {/* Icon */}
                    <div
                      className={`w-24 h-24 mx-auto mb-8 flex items-center justify-center text-5xl text-white bg-gradient-to-br ${services[index].gradient} rounded-2xl shadow-2xl transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      {services[index].icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-4xl font-bold text-white text-center mb-3">
                      {services[index].title}
                    </h3>
                    <p className="text-gray-400 text-center text-lg">
                      {services[index].shortDesc}
                    </p>
                  </div>
                </motion.div>

                {/* Right - Details */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-8"
                >
                  <div>
                    <h4 className="text-3xl font-bold text-white mb-4">
                      {services[index].title} Overview
                    </h4>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {services[index].longDesc}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                      Key Features
                    </h5>
                    {services[index].features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="flex items-center gap-3"
                      >
                        <FaCheckCircle className="text-lg text-red-600" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(220, 38, 38, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-2xl"
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-16 space-x-4"
        >
          {services.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setIndex(i)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className={`h-3 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-red-600 shadow-lg"
                  : "w-3 bg-gray-700 hover:bg-gray-600"
              }`}
            ></motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;