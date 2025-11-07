"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const allProjects = [
  {
    title: "E-Commerce Platform",
    category: "Development",
    tags: ["Next.js", "Stripe", "Tailwind"],
    image: "/images/shirts.jpg",
    description:
      "A full-featured online store with secure payments and modern UI.",
  },
  {
    title: "Brand Identity Design",
    category: "Design",
    tags: ["Figma", "Illustrator"],
    image: "/images/shahstore.jpg",
    description: "Complete rebranding for a modern digital agency.",
  },
  {
    title: "Social Media Campaign",
    category: "Marketing",
    tags: ["Instagram", "Strategy"],
    image: "/images/graphicdesign.jpg",
    description: "Creative campaign resulting in 3x engagement boost.",
  },
  {
    title: "Startup MVP",
    category: "Consultancy",
    tags: ["Product Strategy", "Pitch Deck"],
    image: "/images/product.jpg",
    description: "Built an MVP that secured investor funding within 2 months.",
  },
  {
    title: "Mobile App UI/UX",
    category: "Design",
    tags: ["Figma", "Prototyping"],
    image: "/images/uiux.jpg",
    description: "Designed an intuitive app interface for a fitness brand.",
  },
  {
    title: "SEO Optimization",
    category: "Marketing",
    tags: ["SEO", "Google Analytics"],
    image: "/images/onlinewebinar.jpg",
    description: "Improved site ranking to top 3 positions on Google search.",
  },
  {
    title: "AI-Powered Automation",
    category: "Development",
    tags: ["AI", "Automation", "Machine Learning"],
    video: "/videos/ai.mp4",
    description:
      "Demonstrating an AI automation workflow that boosts efficiency and reduces manual work.",
  },
  {
    title: "UI Design Showcase",
    category: "Design",
    tags: ["UI/UX", "Animation"],
    video: "/videos/aiagent.mp4",
    description:
      "A sleek and interactive UI demonstration showcasing fluid transitions and responsive design.",
  },
  {
    title: "Team Culture Highlights",
    category: "Consultancy",
    tags: ["Team", "Culture", "Company"],
    video: "/videos/bestsaasvideo.mp4",
    description:
      "A short company culture video capturing creativity, teamwork, and innovation in action.",
  },
  {
    title: "Team Culture Highlights",
    category: "Consultancy",
    tags: ["Team", "Culture", "Company"],
    video: "/videos/nomorelimits.mp4",
    description:
      "A short company culture video capturing creativity, teamwork, and innovation in action.",
  },
  {
    title: "Team Culture Highlights",
    category: "Consultancy",
    tags: ["Team", "Culture", "Company"],
    video: "/videos/AnimatedVideosforTech.mp4",
    description:
      "A short company culture video capturing creativity, teamwork, and innovation in action.",
  },
];

const categories = ["All", "Design", "Development", "Marketing", "Consultancy"];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-black relative overflow-hidden">
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

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium border transition-all ${
                activeCategory === cat
                  ? "bg-red-600 text-white border-red-600"
                  : "border-gray-700 text-gray-400 hover:text-white hover:border-red-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 80 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-black p-6 rounded-2xl border border-gray-800 hover:border-red-600 transition-all duration-500 group shadow-lg cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div
                className={`w-full ${
                  project.video ? "h-48" : "h-80"
                } bg-gray-900 rounded-xl overflow-hidden mb-4 transition-all duration-700`}
              >
                {project.video ? (
                  <video
                    src={project.video}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    autoPlay
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500"
                  />
                )}
              </div>

              <span className="text-red-500 font-semibold text-sm uppercase tracking-wide">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold text-white mt-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                {project.description.slice(0, 70)}...
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag: string, i: number) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-900 border border-gray-700 text-gray-400 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-black border border-gray-800 rounded-2xl p-8 max-w-lg w-full shadow-xl relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                <button
                  className="absolute top-3 right-5 text-gray-500 hover:text-red-600 text-2xl"
                  onClick={() => setSelectedProject(null)}
                >
                  ✕
                </button>

                {selectedProject.video ? (
                  <video
                    src={selectedProject.video}
                    controls
                    className="rounded-xl mb-4 w-full"
                  />
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="rounded-xl mb-4"
                  />
                )}

                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag: string, i: number) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-900 border border-gray-700 text-gray-400 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PortfolioSection;
