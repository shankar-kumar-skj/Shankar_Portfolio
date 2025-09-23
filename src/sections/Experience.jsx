import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import internshipImage from "../assets/internship.jpg";
import logo from "../assets/company-logo.png";
import { FaLaptopCode, FaCertificate, FaInfoCircle, FaTimes } from "react-icons/fa";
import { Tooltip } from "react-tooltip"; // npm install react-tooltip

const roles = [
  {
    company: "REGEX SOFTWARE",
    title: "Machine Learning Intern",
    period: "May 2025 – July 2025",
    img: internshipImage,
    logo: logo,
    location: "Jaipur",
    mode: "Offline",
    intro: "Developed ML models and deep learning solutions for real-world applications.",
    detailedDescription:(
    <div>
      <p> <b><h2>KeyWords : </h2></b></p><br></br>
      <p>✨ Worked with ML algorithms, built deep learning models, and deployed them using AWS Sagemaker.</p>
      <p>🚀 Delivered client projects for real-world business use-cases.</p>
      <p>🧠 Developed NLP-based transformer models for natural language understanding.</p>
      <p>☁️ Managed deployment pipelines and monitoring in AWS cloud environment.</p>
    </div>
  ),
    skills: ["Python", "Machine Learning", "Deep Learning", "AWS", "NLP", "Transformers"],
    certificate: "https://drive.google.com/file/d/1h75tWRPNBqlHwCE3b6i59sYEj3WC6S-z/view?usp=sharing",
    repo: "https://github.com/shankar-kumar-skj/REGEX",
  },
  // {
  //   company: "TECH CORP",
  //   title: "Cloud Data Analyst Intern",
  //   period: "June 2024 – September 2024",
  //   img: internshipImage,
  //   logo: logo,
  //   location: "Bangalore",
  //   mode: "Offline",
  //   intro: "Created and deployed cloud-based data pipelines and business analytics solutions.",
  //   detailedDescription:
  //     "Designed architectures, integrated cloud services, and created advanced data visualizations using Tableau.",
  //   skills: ["Cloud Computing", "Data Analytics", "Tableau", "Python", "SQL"],
  //   certificate: "https://drive.google.com/file/d/yyyyyy/view",
  //   repo: "https://github.com/yourusername/repository",
  // },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [modalLink, setModalLink] = useState(null);

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-sky-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-slate-800 mb-14 border-b-4 border-sky-500 inline-block pb-3"
        >
          Experience
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {roles.map((role, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="relative bg-white/70 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-sky-100"
              whileHover={{ scale: 1.02 }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 p-6 border-b border-gray-200">
                <motion.img
                  src={role.logo}
                  alt={role.company}
                  className="w-16 h-16 rounded-full object-cover border-2 border-sky-500"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">{role.company}</h3>
                  <p className="text-sky-600 font-medium">{role.title}</p>
                </div>
                <FaInfoCircle
                  data-tooltip-id={`tooltip-${index}`}
                  className="ml-auto text-gray-400 hover:text-sky-500 cursor-pointer"
                />
                <Tooltip id={`tooltip-${index}`} place="top" content={role.detailedDescription} />
              </div>

              {/* Image with hover overlay */}
              <div className="relative group">
                <motion.img
                  src={role.img}
                  alt="Internship"
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-sky-900/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <button
                    onClick={() => setExpandedIndex(index)}
                    className="px-4 py-2 bg-white text-sky-700 rounded-lg font-medium hover:bg-sky-100"
                  >
                    View Details
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-sm text-gray-500">
                  {role.period} • {role.location} • {role.mode}
                </p>
                <p className="mt-3 text-gray-700">{role.intro}</p>

                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-3 text-gray-600 text-sm"
                  >
                    {role.detailedDescription}
                  </motion.div>
                )}

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {role.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 text-xs bg-gradient-to-r from-sky-100 to-sky-200 text-sky-700 rounded-full cursor-pointer shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-6">
                  <motion.button
                    onClick={() => setModalLink(role.certificate)}
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-md hover:from-green-600 hover:to-green-700 transition"
                  >
                    <FaCertificate className="mr-2" /> Certificate
                  </motion.button>
                  <motion.a
                    href={role.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md hover:from-blue-600 hover:to-blue-700 transition"
                  >
                    <FaLaptopCode className="mr-2" /> Code/Repo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {modalLink && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            >
              <div className="bg-white w-11/12 md:w-3/4 lg:w-1/2 rounded-lg shadow-lg overflow-hidden">
                <div className="flex justify-between items-center p-4 border-b">
                  <h3 className="text-lg font-semibold">Certificate</h3>
                  <button
                    onClick={() => setModalLink(null)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <FaTimes />
                  </button>
                </div>
                <iframe
                  src={modalLink}
                  title="Certificate"
                  className="w-full h-[500px] border-none"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
