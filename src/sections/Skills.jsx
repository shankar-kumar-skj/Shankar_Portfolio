// src/sections/Skills.jsx
import React from 'react'
import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: 'Programming Languages',
    items: [
      { name: 'Python', percent: 75 },
      { name: 'Java', percent: 70 },
      { name: 'C++', percent: 60 }, 
    ],
  },
  {
    title: 'Python Libraries',
    items: [
      { name: 'Numpy', percent: 85 },
      { name: 'Pandas', percent: 80 },
      { name: 'Matplotlib', percent: 85 },
      { name: 'Seaborn', percent: 75 },
      { name: 'Scikit Learn', percent: 80 },
      { name: 'TensorFlow', percent: 85 },
      { name: 'Keras', percent: 80 },
      { name: 'Streamlit', percent: 85 },
      { name: 'Pydantic', percent: 80 },
    ],
  },
  {
    title: 'Machine Learning',
    items: [
      { name: 'SUPERVISIED LEARNING', percent: 90 },
      { name: 'UNSUPERVISIED LEARNING', percent: 85 },
      { name: 'GEN AI', percent: 75 },
      { name: 'Large Language Model (LLM) ', percent: 70 },
      { name: 'Natural Language Processing (NLP) ', percent: 65 },
    ],
  },
  {
    title: 'Database Management',
    items: [
      { name: 'MySQL', percent: 75 },
      { name: 'AWS S3', percent: 80 },
    ],
  },
  {
    title: 'Programming & Tools',
    items: [
      { name: 'Power Bi', percent: 85 },
      { name: 'Make.com', percent: 80 },
      { name: 'N8N', percent: 75 },
      { name: 'D-ID', percent: 80 },
      { name: 'Git', percent: 85 },
      { name: 'Docker', percent: 80 },
      { name: 'API Creation', percent: 80 },
      { name: 'Jupyter', percent: 70 },
    ],
  },
  {
    title: 'Web Development',
    items: [
      { name: 'HTML', percent: 85 },
      { name: 'CSS', percent: 80 },
      { name: 'Ui/UX', percent: 70 }, 
    ],
  },
  
]

export default function Skills() {
  const rows = [skillGroups.slice(0, 2), skillGroups.slice(2, 4)]

  return (
    <section id="skills" className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-slate-800 mb-10 border-b-4 border-sky-600 inline-block pb-2"
        >
          Skills
        </motion.h2>

        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="grid md:grid-cols-2 gap-8 mb-8">
            {row.map((group, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 bg-white rounded-xl shadow-md transition-shadow duration-300 hover:shadow-[0_0_12px_3px_rgba(59,130,246,0.3)]"
              >
                <h4 className="font-semibold text-sky-700 mb-4 text-xl">{group.title}</h4>
                <div className="flex flex-col gap-4">
                  {group.items.map(({ name, percent }) => (
                    <div
                      key={name}
                      className="text-sm text-slate-700 flex items-center justify-between"
                    >
                      <span className="font-medium">{name}</span>
                      <div className="flex items-center gap-3 w-48 md:w-56">
                        <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                          <div
                            className="h-3 rounded-full bg-sky-400"
                            style={{
                              width: `${percent}%`,
                              background: `linear-gradient(90deg, #0ea5e9, #38bdf8)`
                            }}
                          />
                        </div>
                        <span className="w-10 text-right text-sm font-semibold text-sky-700">{percent}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
