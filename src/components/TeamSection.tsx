'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const TeamSection = () => {
  const team = [
    {
      name: 'Ava Thompson',
      role: 'Creative Director',
      img: '/team1.jpg',
    },
    {
      name: 'Liam Carter',
      role: 'Lead Developer',
      img: '/team2.jpg',
    },
    {
      name: 'Sahir Patel',
      role: 'UI/UX Designer',
      img: '/team3.jpg',
    },
    {
      name: 'Ethan Rodriguez',
      role: 'Marketing Strategist',
      img: '/team4.jpg',
    },
  ];

  return (
    <section id="team" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our <span className="text-red-600">Team</span>
          </h2>
          <p className="text-gray-400 text-lg">
            A group of passionate creatives, developers, and strategists
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 shadow-xl hover:border-red-600 transition-all duration-300"
            >
              {/* Image */}
              <div className="w-full h-56 rounded-xl overflow-hidden mb-6">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-white text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{member.role}</p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-all"
                  >
                    <FaLinkedinIn className="text-white text-lg" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-all"
                  >
                    <FaInstagram className="text-white text-lg" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
