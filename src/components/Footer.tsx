
import { Instagram, Linkedin, MessageSquare } from 'lucide-react';
import React from 'react'

const Footer = () => {
  const quickLinks = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];

  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              RiseX <span className="text-red-600">Creative</span>
            </h3>
            <p className="text-gray-400">Your Growth Partner in the Digital World</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-red-600 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <MessageSquare size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500">© 2025 RiseX Creative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
