import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const certificates = [
  {
    title: "Faculty Development Programme on Real-Time Application using Machine Learning and Artificial Intelligence",
    issuer: "Electronics & ICT Academy, IIT Roorkee (in association with Poornima College of Engineering, Jaipur)",
    year: "2025",
    description: (
      <div>
      <p><b><h2>KeyWords :</h2></b></p><br />
      <p>✨ Hands-on training in real-time applications of Machine Learning and Artificial Intelligence.</p>
      <p>🚀 Exposure to practical case studies integrating ML/AI in real-world systems.</p>
      <p>🧠 Covered algorithms, deep learning techniques, and their real-time deployment.</p>
      <p>☁️ Learned how to design scalable AI solutions applicable in industry and academia.</p>
    </div>
  ),
  link: "https://drive.google.com/file/d/1cDyPTDHPfBGVZqh-ZPbt-rBhqLJ0Vzrl/view?usp=sharing",
},
{
  title: "Smart India Hackathon 2024 – Team NavAstra Nomination",
  issuer: "Poornima College of Engineering, Jaipur (AICTE Nomination)",
  year: "2024",
  description: (
    <div>
      <p><b><h2>KeyWords :</h2></b></p><br />
      <p>✨ Selected as a team member of <b>Team NavAstra</b> for Smart India Hackathon 2024.</p>
      <p>🚀 Represented Poornima College of Engineering in a national-level innovation challenge.</p>
      <p>🧠 Collaborated on problem-solving using Computer Science & Engineering expertise (Batch 2023–27).</p>
      <p>🤝 Worked in a multidisciplinary team to propose impactful tech-driven solutions.</p>
    </div>
  ),
  link: "https://drive.google.com/file/d/1W5eZi3OIpVwLorD0V0iRkwx_xnqUS2_B/view?usp=sharing", // official Smart India Hackathon site (can replace with direct nomination link if available)
},
{
title: "Technology Software Development Job Simulation",
issuer: "Citi (via Forage)",
year: "2025",
description: (
  <div>
    <p><b><h2>KeyWords :</h2></b></p><br />
    <p>✨ Completed a job simulation focused on technology software development.</p>
    <p>🚀 Created a state diagram and wrote a detailed feature proposal.</p>
    <p>🧠 Queried and processed data from the web for analysis.</p>
    <p>📊 Visualized live data to derive insights and improve decision-making.</p>
  </div>
),
link: "https://drive.google.com/file/d/1dNutGmOEFpaFZxDjXLfe-TrCNDGBsxFE/view?usp=sharing",
},

];

export default function Certificate() {
  return (
    <section id="certificate" className="py-16 bg-slate-50">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-slate-800 relative inline-block">
          Certificates
          <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-sky-600"></span>
        </h2>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {certificates.map((cert, i) => (
          <motion.a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            key={i}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ scale: 1.02 }}
            className="relative p-6 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg hover:border-sky-400 hover:shadow-sky-200 transition-all duration-300 group"
          >
            {/* Hover Overlay */}
            <div className="absolute inset-0 rounded-2xl bg-sky-600/0 group-hover:bg-sky-600/5 transition-colors duration-300"></div>

            {/* Icon */}
            <div className="flex items-center mb-4">
              <FaCertificate className="text-sky-600 text-3xl mr-3" />
              <h4 className="text-lg font-semibold text-slate-800">
                {cert.title}
              </h4>
            </div>

            {/* Issuer & Year */}
            <div className="flex justify-between items-center mb-4 text-sm">
              <span className="text-slate-600">{cert.issuer}</span>
              <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs font-medium">
                {cert.year}
              </span>
            </div>

            {/* Description */}
            <p className="text-slate-700 text-sm leading-relaxed mb-6">
              {cert.description}
            </p>

            {/* Button */}
            <div className="flex items-center text-sky-600 font-medium text-sm group-hover:text-sky-700 transition-colors">
              View Certificate <FaExternalLinkAlt className="ml-2 text-xs" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
