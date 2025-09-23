// src/sections/About.jsx
import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Heading with styled underline */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-slate-800 mb-10 border-b-4 border-sky-600 inline-block pb-2"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Text Content */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-700 leading-relaxed mb-4">
              I am a software developer focused on creating efficient, user-friendly machine learning applications using Scikit-learn, TensorFlow, Generative AI, and AI agents. I’m building practical skills in computer science through data analysis, model development, and deployment.
            </p>
            <p className="text-slate-700 leading-relaxed">
              My work involves projects that improve prediction accuracy and optimize performance to deliver scalable solutions. I’m committed to continuous learning through online courses, open-source contributions, and collaboration, helping me stay updated and grow technically and professionally.
            </p>
          </motion.div>

          {/* Right Card Content */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Quick Facts</h4>
              <ul className="text-slate-600 text-sm space-y-2">
                <li><strong>Location:</strong> Jaipur, India</li>
                <li><strong>Available for:</strong> Internships, Freelance, Real-world Projects</li>
                <li><strong>Languages:</strong> English, Hindi</li>
                <li><strong>Interests:</strong> Java Developer, Machine learning, AI-generated procedural design, and UI prototyping</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
