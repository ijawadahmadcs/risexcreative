"use client";
import { useState, useRef } from "react";
import React from "react";
import { motion } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedinIn,
  FaClock,
} from "react-icons/fa";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    const form = formRef.current;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    if (!name || !email || !message) {
      toast.error("Please fill out all fields!");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error("Failed to send message. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      <Toaster position="top-center" reverseOrder={false} />
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
            Let’s <span className="text-red-600">Collaborate</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We’re excited to bring your ideas to life. Reach out and let’s build something great together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            <div className="space-y-6">
              {[
                { icon: <FaEnvelope size={20} />, label: "Email", value: "risexcreative@gmail.com" },
                { icon: <FaPhoneAlt size={20} />, label: "Phone", value: "+92 332 4911995" },
                { icon: <FaMapMarkerAlt size={20} />, label: "Location", value: "Rawalpindi - 6th Road, Punjab, Pakistan" },
                { icon: <FaClock size={20} />, label: "Timings", value: "Monday – Saturday: 5 PM – 1 AM" },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-white">{item.icon}</div>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <p className="text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="mt-10 flex space-x-5">
              {[
                { icon: <FaInstagram size={20} />, link: "https://www.instagram.com/risex_creative" },
                { icon: <FaLinkedinIn size={20} />, link: "https://www.linkedin.com/company/risex-creative" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 hover:scale-110 transition-all shadow-md"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-black p-8 rounded-2xl border border-gray-900 shadow-xl backdrop-blur-sm">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-black border border-gray-900 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-all shadow-md shadow-red-600"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-black border border-gray-900 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-all shadow-md shadow-red-600"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 bg-black border border-gray-900 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 resize-none transition-all shadow-md shadow-red-600"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={loading}
                  className="w-full py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all shadow-lg disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
