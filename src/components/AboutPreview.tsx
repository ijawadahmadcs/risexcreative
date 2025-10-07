"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBullhorn, FaPalette, FaCode, FaRocket } from "react-icons/fa";

const AboutPreview = () => {
  const features = [
    { icon: <FaBullhorn />, title: "Marketing", desc: "Strategic campaigns that boost your brand visibility and engagement." },
    { icon: <FaPalette />, title: "Designing", desc: "Stunning visuals and user experiences that connect emotionally with audiences." },
    { icon: <FaCode />, title: "Development", desc: "Modern, high-performance websites and apps built to scale your business." },
    { icon: <FaRocket />, title: "Startup Consultancy", desc: "Helping startups launch, grow, and thrive with expert digital strategy." },
  ];

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-gray-900 via-black to-gray-950 overflow-hidden">
      {/* Animated Blurred Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/4 left-1/2 w-96 h-96 bg-red-700/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          About <span className="text-red-600">RiseX Creative</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-gray-300 max-w-3xl mx-auto mb-6"
        >
          We’re not just a digital agency — we’re your creative growth partner.
          At <span className="text-red-600 font-semibold">RiseX Creative</span>,
          we turn your ideas into impactful digital experiences through design, code, and strategy.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg text-gray-400 max-w-3xl mx-auto mb-12"
        >
          Our mission is simple: empower brands to rise, innovate, and dominate in the digital world.
        </motion.p>

        {/* Feature Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="bg-gray-800/40 backdrop-blur-md border border-gray-700 rounded-2xl p-6 text-center hover:border-red-600 transition-all group shadow-lg hover:shadow-red-600/30"
            >
              <div className="text-red-600 text-3xl mb-3 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <motion.a
          href="#services"
          whileHover={{ scale: 1.07 }}
          className="inline-block px-10 py-4 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition-all shadow-lg shadow-red-700/40"
        >
          Explore Our Services
        </motion.a>
      </div>
    </section>
  );
};

export default AboutPreview;
