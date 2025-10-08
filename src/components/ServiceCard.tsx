"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBullhorn, FaPalette, FaCode, FaRocket } from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      icon: <FaBullhorn />,
      title: "Marketing",
      description:
        "Social media management, paid ad campaigns, and SEO strategies to boost your digital visibility.",
      gradient: "from-red-600 to-red-700",
    },
    {
      icon: <FaPalette />,
      title: "Designing",
      description:
        "Logo design, brand identity, and UI/UX visuals that make your audience remember you.",
            gradient: "from-red-600 to-red-700",

    },
    {
      icon: <FaCode />,
      title: "Development",
      description:
        "Custom web applications, landing pages, and scalable solutions built for performance.",
           gradient: "from-red-600 to-red-700",

    },
    {
      icon: <FaRocket />,
      title: "Startup Consultancy",
      description:
        "Business strategy, digital transformation, and growth consultation for ambitious startups.",
        gradient: "from-red-600 to-red-700",

    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden"
    >
      {/* Animated Background Blurs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute top-1/3 left-1/4 w-72 h-72 bg-red-800/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 22, repeat: Infinity }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-red-900/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Comprehensive solutions designed to make your brand rise and thrive.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "0px 0px 25px rgba(220, 38, 38, 0.3)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="relative bg-black backdrop-blur-md border border-gray-800 hover:border-red-600 rounded-2xl p-8 transition-all duration-300 group overflow-hidden"
            >
              {/* Gradient Glow Behind Icon */}
              <div
                className={`absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-20 rounded-full blur-2xl group-hover:opacity-40 transition-all`}
              ></div>

              {/* Icon */}
              <div
                className={`relative z-10 w-16 h-16 mx-auto mb-6 flex items-center justify-center text-3xl text-white bg-gradient-to-br ${service.gradient} rounded-2xl shadow-md group-hover:scale-110 transition-transform`}
              >
                {service.icon}
              </div>

              {/* Title & Description */}
              <h3 className="relative z-10 text-2xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="relative z-10 text-gray-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
