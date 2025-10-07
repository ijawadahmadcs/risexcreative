"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    { title: "E-Commerce Platform", category: "Development" },
    { title: "Brand Identity Design", category: "Design" },
    { title: "Social Media Campaign", category: "Marketing" },
    { title: "Startup MVP", category: "Consultancy" },
    { title: "Mobile App UI/UX", category: "Design" },
    { title: "SEO Optimization", category: "Marketing" },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-red-600">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Showcasing our creative work and impactful digital experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-600 transition-all duration-500 group shadow-lg"
            >
              <div className="flex flex-col items-center justify-center text-center space-y-3">
                <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm">
                  Crafting engaging and high-performance digital solutions.
                </p>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="mt-4 inline-flex items-center gap-2 text-sm text-white bg-red-600 px-5 py-2 rounded-full font-medium shadow-md hover:bg-red-700 transition-all"
                >
                  View Project <ExternalLink size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
