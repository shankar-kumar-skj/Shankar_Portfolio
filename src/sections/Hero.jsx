import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaDownload, FaTimes } from 'react-icons/fa'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Hero({ profileImageUrl }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const githubUrl = "https://github.com/shankar-kumar-skj/"
  const linkedinUrl = "https://www.linkedin.com/in/shankar-kumar-02800b290/"
  const email = "mailto:ak9843688@gmail.com"

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <section
        id="home"
        className="pt-24 pb-14 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/photo_background.png')`,
        }}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center bg-white/80 backdrop-blur-lg rounded-xl p-6 mx-4 shadow-lg">
          {/* Left Content */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="transition-transform"
          >
            <h1 className="text-4xl font-extrabold mb-3 cursor-pointer text-gray-900 hover:text-sky-600 transition-colors duration-300">
              Hi, I’m <span className="text-sky-600">Shankar Kumar</span>
            </h1>
            <p className="text-lg text-slate-700 mb-6">
              Data Science Aspirant | Machine Learning Developer | AI & Analytics Explorer | LLM & Cloud Enthusiast
            </p>

            <div className="flex flex-wrap gap-3 items-center">
              {[{
                href: githubUrl,
                label: "GitHub Profile",
                icon: <FiGithub size={18} />,
                bg: 'bg-sky-600',
                text: 'text-white',
                hoverBg: 'hover:bg-sky-700',
                border: '',
              }, {
                href: linkedinUrl,
                label: "LinkedIn Profile",
                icon: <FiLinkedin size={18} />,
                bg: '',
                text: 'text-sky-600',
                hoverBg: 'hover:bg-sky-50',
                border: 'border border-sky-600',
              }, {
                href: email,
                label: "Send Email",
                icon: <FiMail size={18} />,
                bg: '',
                text: 'text-gray-700',
                hoverBg: 'hover:bg-gray-100',
                border: 'border border-gray-400',
              }, {
                href: "https://1drv.ms/w/c/ece14c90eca7849e/IQD7BsxCRRBORoOptVmN-gMiARFqsd3Mb-jh1GAOYsxc2WQ?e=htwjZ4",
                label: "Resume",
                icon: <FaDownload size={16} />,
                bg: '',
                text: 'text-gray-700',
                hoverBg: 'hover:bg-gray-100',
                border: 'border border-gray-400',
                download: true,
              }].map(({ href, label, icon, bg, text, hoverBg, border, download }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  download={download}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-shadow shadow-sm hover:shadow-md ${bg} ${text} ${hoverBg} ${border} cursor-pointer`}
                >
                  {icon} {label.split(' ')[0]}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Content (Profile Image with Hover Gradient) */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(14, 165, 233, 0.4)' }}
            className="p-6 bg-white rounded-2xl shadow-lg transition-transform duration-300 cursor-pointer"
          >
            <div className="h-60 w-full relative overflow-hidden rounded-xl group flex items-center justify-center">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-no-repeat bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: "url('/rectangle_background.png')" }}
              />

              {/* Blue Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

              {/* Profile Image and Name */}
              <div
                className="relative z-10 text-center"
                onClick={profileImageUrl ? openModal : undefined}
                role="button"
                tabIndex={0}
                onKeyDown={e => { if (e.key === 'Enter') openModal() }}
              >
                {profileImageUrl ? (
                  <div className="relative w-28 h-28 mx-auto mb-3">
                    {/* Animated Pulse Ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-sky-300 animate-pulse" />
                    <motion.img
                      src={profileImageUrl}
                      alt="Shankar Kumar"
                      className="relative w-28 h-28 rounded-full object-cover border-4 border-sky-500 shadow-md transition-transform"
                      title="Click to zoom"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    />
                  </div>
                ) : (
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-sky-200 to-indigo-200 mx-auto mb-3" />
                )}
                <div className="font-bold text-lg text-white drop-shadow">Shankar Kumar</div>
                <div className="text-sm text-sky-50 drop-shadow">Machine Learning Developer</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal for zoomed image */}
      <AnimatePresence>
        {isModalOpen && profileImageUrl && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            onKeyDown={e => { if (e.key === 'Escape') closeModal() }}
          >
            <motion.div
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative bg-white rounded-lg shadow-lg"
              style={{ width: '65vw', maxWidth: 500, height: 550 }}
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 text-2xl p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-600"
                aria-label="Close zoomed image"
              >
                <FaTimes />
              </button>

              <img
                src={profileImageUrl}
                alt="Shankar Kumar enlarged"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
