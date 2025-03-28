import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="text-yellow-400 mr-2">👨‍💼</span>
                <a href="#experience" className="hover:text-blue-400 transition-colors">Work Experience</a>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-400 mr-2">💻</span>
                <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-400 mr-2">🎓</span>
                <a href="#education" className="hover:text-blue-400 transition-colors">Education & Certificates</a>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="text-yellow-400 mr-2">📞</span>
                <span>095-6548405</span>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-400 mr-2">📧</span>
                <a href="mailto:thanat.tc@kkumail.com" className="hover:text-blue-400 transition-colors">thanat.tc@kkumail.com</a>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-400 mr-2">📍</span>
                <span>333/395 The Base Condo Mittraphap Khonkaen</span>
              </div>
            </div>
          </motion.div>

          {/* Connect With Me */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="text-yellow-400 mr-2">🔗</span>
                <a 
                  href="https://www.linkedin.com/in/thanat-thincheelong-3569b727a/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-400 mr-2">💬</span>
                <a 
                  href="https://line.me/ti/p/bX6aYK87Pv" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 transition-colors"
                >
                  Line
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-400 mr-2">💻</span>
                <a 
                  href="https://github.com/thanatpump" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-4 text-center text-sm">
          © 2024 Thanat Thincheelong. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer; 