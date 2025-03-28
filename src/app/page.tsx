'use client';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import GoogleMapComponent from './components/GoogleMap';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 to-blue-800/90"></div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="container mx-auto px-4 text-center relative z-10"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
            >
              THANAT THINCHEELONG
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90"
            >
              I am a hardworking and motivated Developer / Programmer with experience and skills. I am always open to learning new things, and I am a fast learner.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById('experience')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
              >
                View My Work
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2"
              >
                <h2 className="text-4xl font-bold mb-8">About Me</h2>
                <div className="space-y-6 text-gray-600">
                  <p className="text-lg leading-relaxed">
                   I am a passionate developer with experience in both game development and web development.
                   My journey in technology started at Khon Kaen University, where I majored in Information Technology.
                   Since then, I have been continuously learning and growing in various technologies and frameworks.
                  </p>
                  <p className="text-lg leading-relaxed">
                    I enjoy tackling complex problems and turning them into simple and beautiful solutions.
                    When I'm not coding, you can find me exploring new technologies or working on personal projects.
                  </p>
                </div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2 flex items-center justify-center"
              >
                <div className="relative w-[300px] h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/images/profile.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 relative">
          <div className="absolute inset-0 bg-[url('/images/skills-bg.jpg')] bg-cover bg-center z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/95 to-white/95"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-16"
            >
              Skills
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Frontend Development */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Frontend Development</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>React.js / Next.js
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>TypeScript
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>Tailwind CSS
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>Framer Motion
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>HTML5
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>CSS3
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>JavaScript
                  </li>
                </ul>
              </motion.div>

              {/* Backend Development */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-4 text-green-600">Backend Development</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>PHP / Laravel
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>MySQL
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>RESTful APIs
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>Database Design
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">•</span>Server Management
                  </li>
                </ul>
              </motion.div>

              {/* Mobile Development */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-4 text-purple-600">Mobile Development</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>Swift
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>SwiftUI
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>iOS Development
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>Mobile UI/UX
                  </li>
                </ul>
              </motion.div>

              {/* Game Development */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-4 text-red-600">Game Development</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">•</span>Unity / C#
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">•</span>Godot / GDScript
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">•</span>Game Design
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">•</span>Gameplay Mechanics
                  </li>
                </ul>
              </motion.div>

              {/* Development Tools */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-4 text-yellow-600">Development Tools</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">•</span>Git / GitHub
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">•</span>VS Code
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">•</span>Xcode
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">•</span>PowerBI
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">•</span>Postman
                  </li>
                </ul>
              </motion.div>

              {/* Soft Skills */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-4 text-indigo-600">Soft Skills</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-indigo-500 mr-2">•</span>Problem Solving
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-500 mr-2">•</span>Team Collaboration
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-500 mr-2">•</span>Project Management
          </li>
                  <li className="flex items-center">
                    <span className="text-indigo-500 mr-2">•</span>Fast Learning
          </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-16"
            >
              Work Experience
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Chaiyaphum Hospital',
                  period: '2025 Feb - Present',
                  role: 'Full Stack Developer',
                  description: 'Developed a MySQL database and a Laravel web app to streamline health insurance data management.',
                  id: 'chaiyaphum-hospital'
                },
                {
                  title: 'DKCode Co, Ltd',
                  period: '2024 Nov - 2025 Feb',
                  role: 'Programmer',
                  description: 'Developed low-code solutions for hospital internal systems, including electronic medical records, appointment booking, and visit scheduling, to improve workflow efficiency.',
                  id: 'dkcode'
                },
                {
                  title: 'Soft Kingdom Co, Ltd',
                  period: '2023 May - 2023 Sep',
                  role: 'Game Developer',
                  description: 'Developed games for multiple platforms to enhance user engagement and expand reach.',
                  id: 'soft-kingdom'
                },
                {
                  title: 'ONE Game',
                  period: '2021 Dec - 2023 Mar',
                  role: 'Game Developer',
                  description: 'Developed mobile games to enhance user experience and engagement.',
                  id: 'one-game'
                }
              ].map((work, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => window.location.href = `/work/${work.id}`}
                >
                  <h3 className="text-2xl font-bold mb-2">{work.title}</h3>
                  <p className="text-gray-600 mb-2">{work.period}</p>
                  <p className="text-blue-600 font-semibold mb-4">{work.role}</p>
                  <p className="text-gray-700">{work.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Certificates Section */}
        <section id="education" className="py-20 relative">
          <div className="absolute inset-0 bg-[url('/images/education-bg.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white/80"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-16"
            >
              Education & Certificates
            </motion.h2>

            {/* Bachelor's Degree - Full Width */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-8xl mb-4 block">🎓</span>
                      <h3 className="text-3xl font-bold text-gray-800">Bachelor&apos;s Degree</h3>
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 bg-white p-8">
                    <div className="h-full flex flex-col justify-center">
                      <h3 className="text-3xl font-bold mb-4 text-gray-800">
                        Information Technology
                      </h3>
                      <p className="text-xl text-gray-600 mb-2">Khon Kaen University</p>
                      <p className="text-lg text-gray-500">2017 - 2021</p>
                      <div className="mt-6 space-y-2">
                        <div className="flex items-center text-gray-600">
                          <span className="mr-2">🏆</span>
                          <span>Major in Software Engineering</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <span className="mr-2">📚</span>
                          <span>Focus on Full-Stack Development</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Certificates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Certificate 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage("/images/advanced-ios-cert.png")}
              >
                <div className="relative h-64 bg-gray-50">
                  <img
                    src="/images/advanced-ios-cert.png"
                    alt="Advanced iOS Development Certificate"
                    className="w-full h-full object-contain p-4"
                  />
                  <div className="absolute inset-0 hover:opacity-0 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/40 to-transparent">
                      <span className="text-white text-sm font-medium">Click to view</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">
                    Advanced iOS Development
                  </h3>
                  <p className="text-gray-600">
                    Advanced iOS Development with Swift
                    <br />
                    <span className="font-semibold">BornToDev Academy</span>
                  </p>
                </div>
              </motion.div>

              {/* Certificate 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage("/images/basic-ios-cert.png")}
              >
                <div className="relative h-64 bg-gray-50">
                  <img
                    src="/images/basic-ios-cert.png"
                    alt="Basic iOS Development Certificate"
                    className="w-full h-full object-contain p-4"
                  />
                  <div className="absolute inset-0 hover:opacity-0 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/40 to-transparent">
                      <span className="text-white text-sm font-medium">Click to view</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">
                    Basic iOS Development
                  </h3>
                  <p className="text-gray-600">
                    Basic iOS Development with Swift
                    <br />
                    <span className="font-semibold">BornToDev Academy</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center mb-16"
            >
              Contact Me
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4">ติดต่อ</h3>
                  <div className="space-y-4">
                    <p className="flex items-center">
                      <span className="text-blue-500 mr-2">📞</span>
                      095-6548405
                    </p>
                    <p className="flex items-center">
                      <span className="text-blue-500 mr-2">📧</span>
                      thanat.tc@kkumail.com
                    </p>
                    <p className="flex items-center">
                      <span className="text-blue-500 mr-2">📍</span>
                      333/395 The Base Condo Mittraphap Khonkaen
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Google Map */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <GoogleMapComponent />
              </motion.div>
            </div>
        </div>
        </section>
      </main>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Certificate"
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
