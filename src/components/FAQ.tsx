"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaPlayCircle } from "react-icons/fa";

const faqs = [
  {
    question: "What services does RiseX Creative provide?",
    answer:
      "We specialize in web design, branding, UI/UX design, and digital marketing solutions to help businesses build a powerful online presence.",
  },
  {
    question: "Can you design a website without coding?",
    answer:
      "Yes! We offer both no-code and custom-coded website solutions depending on your needs and budget.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Most projects are completed within 2–4 weeks, depending on the scope and complexity. We maintain regular communication throughout the process.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Absolutely! We provide ongoing maintenance, updates, and performance monitoring even after your site is live.",
  },
  {
    question: "How can I contact RiseX Creative for a quote?",
    answer:
      "You can reach us directly through the contact form on our website, or email us at support@risexcreative.com.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handlePlay = () => setIsPlaying(true);

  return (
    <section id="faq" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">
            Frequently <span className="text-red-600">Asked Questions</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-black border border-gray-900 rounded-2xl p-5 shadow-md shadow-red-600/20 transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left text-lg font-medium text-white"
                >
                  {faq.question}
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="text-red-600" />
                  </motion.div>
                </button>

                <AnimatePresence mode="wait">
                  {openIndex === index && (
                    <motion.div
                      key={faq.question}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-3 text-gray-400"
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cinematic YouTube Video Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden group shadow-red-600/30 shadow-lg border-2 border-gray-800"
        >
          {/* Play Overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-center justify-center z-10">
              <motion.button
                onClick={handlePlay}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center"
              >
                <FaPlayCircle
                  size={90}
                  className="text-red-600 opacity-90 hover:opacity-100 transition"
                />
              </motion.button>
            </div>
          )}

          {/* YouTube Embed */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
            {isPlaying ? (
              <motion.iframe
                key="video"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/rWIhM7tiKqs?si=PgHjKqjZPUz2CQRk"
                title="RiseX Company Promo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></motion.iframe>
            ) : (
              <img
                src="https://img.youtube.com/vi/YOUR_VIDEO_ID/hqdefault.jpg"
                alt="Promo Thumbnail"
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
