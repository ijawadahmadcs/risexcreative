"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBullhorn, FaPalette, FaCode, FaRocket, FaHandshake, FaAward, FaUsers } from "react-icons/fa";

const AboutPreview = () => {
  const features = [
    { icon: <FaBullhorn />, title: "Marketing", desc: "Strategic campaigns that grow your brand and drive measurable engagement." },
    { icon: <FaPalette />, title: "Designing", desc: "Immersive visual design that tells your story and captivates your audience." },
    { icon: <FaCode />, title: "Development", desc: "Scalable, modern web & app solutions built with precision and performance." },
    { icon: <FaRocket />, title: "Startup Consultancy", desc: "Helping entrepreneurs turn ideas into impactful, profitable products." },
  ];

  const stats = [
    { value: "100+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "10+", label: "Awards Won" },
  ];

  const whyUs = [
    { icon: <FaHandshake />, title: "Client-Centered Approach", desc: "We believe in building partnerships, not just delivering projects." },
    { icon: <FaAward />, title: "Proven Expertise", desc: "Years of experience blending creativity, code, and strategy seamlessly." },
    { icon: <FaUsers />, title: "Dedicated Team", desc: "A passionate, multidisciplinary team driven by innovation and results." },
  ];

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-black via-black to-gray-950 overflow-hidden">
      {/* Animated Ambient Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 16, repeat: Infinity }}
          className="absolute top-1/3 left-1/4 w-80 h-80 bg-red-700/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-red-600/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
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
          className="text-lg text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed"
        >
          At <span className="text-red-600 font-semibold">RiseX Creative</span>, we don’t just design — we build experiences.
          We help brands stand tall in the digital era by combining design brilliance, technical precision, and strategic growth.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          From startups finding their voice to enterprises redefining their identity, we deliver solutions that resonate, inspire, and perform.
        </motion.p>

        {/* Core Services */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="bg-gray-800/40 border border-gray-700 rounded-2xl p-6 text-center hover:border-red-600 transition-all group shadow-lg hover:shadow-red-600/30"
            >
              <div className="text-red-600 text-3xl mb-3 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 mb-16"
        >
          {whyUs.map((point, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-red-600 transition-all"
            >
              <div className="text-red-600 text-2xl mb-3">{point.icon}</div>
              <h4 className="text-lg font-semibold text-white mb-2">{point.title}</h4>
              <p className="text-gray-400 text-sm">{point.desc}</p>
            </div>
          ))}
        </motion.div>

         {/* Company Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          {stats.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-white">
              <h3 className="text-4xl font-bold text-red-600">{item.value}</h3>
              <p className="text-gray-400 mt-2">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
