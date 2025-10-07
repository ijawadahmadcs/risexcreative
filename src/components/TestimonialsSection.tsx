"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Startup",
      text: "RiseX Creative transformed our brand identity completely. Their design work is exceptional!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "E-Commerce Brand",
      text: "The marketing strategies they implemented doubled our online sales in just 3 months.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "SaaS Company",
      text: "Professional, creative, and results-driven. Best agency we have worked with!",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-gray-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="text-red-600">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Hear from businesses who’ve grown with our creative expertise.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-600 transition-all duration-500 shadow-xl group"
            >
              {/* Quote Mark */}
              <div className="absolute top-5 left-6 text-red-600 text-5xl font-serif opacity-20 select-none">
                “
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-yellow-400 text-lg drop-shadow-[0_0_5px_rgba(250,204,21,0.6)]"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 mb-6 italic leading-relaxed relative z-10">
                {testimonial.text}
              </p>

              {/* Client Info */}
              <div className="relative z-10">
                <p className="text-white font-semibold text-lg">
                  {testimonial.name}
                </p>
                <p className="text-gray-500 text-sm">{testimonial.company}</p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
