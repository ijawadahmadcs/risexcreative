"use client";
import React from "react";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  // const quickLinks = ["Home", "About", "Services", "Portfolio", "Contact"];

  return (
    <footer className="bg-black py-16 border-t border-gray-800 relative overflow-hidden">
      {/* AnimatedBackground */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 to-transparent opacity-30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-10">
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">
              RiseX <span className="text-red-600">Creative</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Empowering brands through design, innovation, and strategy — your growth partner in the digital world.
            </p>
          </motion.div>

          {/* Quick Links
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-red-600 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 group-hover:bg-red-600 rounded-full transition-all"></span>
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div> */}

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-white font-semibold mb-4 text-lg">Connect With Us</h4>
            <div className="flex space-x-4">
              {[
                { icon: <FaInstagram />, link: "https://www.instagram.com/risex_creative?igsh=dWhlZ2p6ODBxcGpv" },
                { icon: <FaLinkedinIn />, link: "#" },
                { icon: <FaFacebookF />, link: "#" },
                { icon: <FaWhatsapp />, link: "https://wa.me/1234567890" },
                // { icon: <FaDribbble />, link: "#" },
              ].map((social, index) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  href={social.link}
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 text-gray-400 hover:text-white hover:border-red-600 hover:bg-red-600 transition-all duration-300 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
      

            </div>
          </motion.div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">RiseXCreative</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
