import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
  {
    title: 'Room Allotment System',
    desc: 'Developed a web-based system to allot rooms based on capacity. Admin and HOD can manage room allotments, and students can log in to check their allotted rooms.',
    detailedDesc: <div>
  <p>✨ Key Features:</p>
  <p>🔑 Role-based Access – Admin & HOD can allot/update rooms, while students log in to view their assigned rooms.</p>
  <p>⚡ Automated Capacity Check – Ensures fair and optimized room allocation with zero manual errors.</p>
  <p>🎯 Efficiency Gains – Reduced manual effort by 60% and improved allocation accuracy by 40%.</p>
  <p>🌐 Tech Stack – Java (JDBC, JSP/Servlets), MySQL, HTML/CSS, and JavaScript.</p>
  <p>This project strengthened my skills in Java full-stack development, database management, and user-centric system design while solving a real-world academic problem.</p>
</div>
,
    tech: ['Java', 'MySQL', 'JSP/Servlets'],
    live: '#',
    repo: 'https://github.com/shankar-kumar-skj/Room_Allotment_System',
    // video: '/videos/ROOM_ALLOTMENT_SYSTEM.mp4',
  },
  {
  title: 'Machine Learning Projects',
  desc: 'Built end-to-end machine learning projects in 30 days, each focusing on different ML algorithms and real-world problems.',
  detailedDesc: <div>
    <p>✨ Key Highlights:</p>
    <p>🧠 Hands-on ML – Projects include Linear Regression, Decision Trees, SVM, KMeans, XGBoost, CNNs, LSTMs, and more.</p>
    <p>📊 Data-Driven – Each project is based on real-world datasets with thorough preprocessing, model training, evaluation, and visualization.</p>
    <p>🚀 Daily Progress – One project per day to rapidly develop practical machine learning skills and improve model selection and tuning.</p>
    <p>🌐 Tech Stack – Python, Scikit-learn, TensorFlow, Pandas, Matplotlib, XGBoost, and Seaborn.</p>
    <p>This challenge significantly improved my understanding of supervised and unsupervised learning, model evaluation, and end-to-end implementation of machine learning pipelines.</p>
  </div>,
  tech: ['Python', 'Scikit-learn', 'TensorFlow', 'XGBoost', 'Pandas', 'Matplotlib'],
  live: '#',
  repo: 'https://github.com/shankar-kumar-skj/30_DAYS_30_MACHINE_LEARNING_PROJECTS/tree/main',
  // video: '/videos/WHATSAPP_CHAT_ANALYSIS.mp4',
}
,{
  title: 'Navastra',
  desc: 'Data visualization dashboard & mobile app for Smart India Hackathon.',
  detailedDesc: <div>
    <p>✨ Navastra is a dual-solution project:</p>
    <p>1️⃣ <b>Web Dashboard</b> – Built with D3.js and Chart.js to showcase complex data visualizations with a fully responsive layout.</p>
    <p>2️⃣ <b>Flutter Mobile App</b> – A cross-platform mobile application developed using Dart & Flutter for the Smart India Hackathon (SIH), designed to provide intuitive access to datasets, insights, and analytics on the go.</p>
    <p>📱 The Flutter app ensures smooth performance, native feel, and offline support.</p>
    <p>📊 The web dashboard enables rich, interactive exploration of large datasets.</p>
  </div>,
  tech: ['Flutter', 'Dart', 'D3.js', 'Chart.js', 'Responsive Design'],
  live: '#',
  repo: '#',
  // video: '/videos/Navastra.mp4',
}
]

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null)

  function toggleExpand(index) {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-4 md:px-6">
      <h2 className="text-3xl font-bold mb-12 border-b-4 border-sky-600 inline-block pb-3">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((p, i) => (
          <motion.article
            key={i}
            whileHover={{ scale: 1.02 }}
            className="group bg-white rounded-3xl shadow-lg p-6 md:p-8 flex flex-col justify-between
              transition-shadow duration-300
              hover:shadow-[0_12px_24px_rgba(14,165,233,0.35)]
              cursor-pointer"
            aria-label={`Project: ${p.title}`}
          >
            {/* Video Preview */}
            {p.video && (
              <div className="overflow-hidden rounded-xl mb-5 transition-all duration-500 ease-in-out max-h-48 group-hover:max-h-[50vh]">
                <video
                  src={p.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                  aria-label={`${p.title} preview video`}
                />
              </div>
            )}

            {/* Content */}
            <div className="flex-1">
              <h3
                onClick={() => toggleExpand(i)}
                className="text-2xl font-semibold text-sky-700 mb-2 cursor-pointer select-none hover:underline"
                aria-expanded={expandedIndex === i}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') toggleExpand(i)
                }}
              >
                {p.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-2">{p.desc}</p>
              <AnimatePresence>
                {expandedIndex === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-700 leading-relaxed"
                  >
                    {p.detailedDesc}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* Buttons */}
              <div className="flex gap-3">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl text-sm font-semibold shadow hover:brightness-110 transition"
                >
                  Live Demo <FiExternalLink size={18} />
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-sky-500 text-sky-600 rounded-xl text-sm font-semibold hover:bg-sky-50 transition"
                >
                  Source Code <FiGithub size={18} />
                </a>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {p.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-sky-100 text-sky-700 font-medium px-3 py-1 rounded-full uppercase tracking-wider shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
