// src/sections/Education.jsx
import React, { useState } from "react";
import { FaGraduationCap, FaRegFilePdf } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const ed = [
  {
    degree: "B.Tech in Computer Science",
    inst: "Poornima College of Engineering",
    year: "2027",
    description: "4-year undergraduate program specializing in Computer Science & Engineering.",
    docLink: "https://drive.google.com/your-btech-degree-link",
  },
  {
    degree: "Higher Secondary (Science)",
    inst: "ST. Anne's Higher School",
    year: "2023",
    description: "Focused on Physics, Chemistry, and Mathematics with Computer Science as an elective.",
    docLink: "https://drive.google.com/file/d/1OLh-LzKsBhInK77nF25DrhNljN6HTIKq/view?usp=sharing",
  },
  {
    degree: "Secondary School Examination",
    inst: "Patna Convent School",
    year: "2021",
    description: "Completed foundational education with emphasis on Mathematics and Science.",
    docLink: "https://drive.google.com/file/d/1OKkLPZdDTJWwvxjASnzCZZd1qeuMR1Zl/view?usp=sharing",
  },
];

export default function Education() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="education" className="py-16 bg-white">
      {/* Header with blue underline */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-slate-800 relative inline-block">
          Education
          <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-sky-600"></span>
        </h2>
      </div>

      {/* Education Cards */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
        {ed.map((e, i) => (
          <div
            key={i}
            className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-lg hover:border-sky-400 hover:shadow-sky-200 transition-all duration-300"
          >
            <div className="flex items-center mb-3">
              <FaGraduationCap className="text-sky-600 text-3xl mr-3" />
              <h4 className="text-lg font-semibold text-slate-800">{e.degree}</h4>
            </div>
            <div className="flex items-center justify-between text-slate-600 mb-4">
              <span>{e.inst}</span>
              <span className="text-xs bg-sky-100 text-sky-700 px-3 py-1 rounded-full font-medium">
                {e.year}
              </span>
            </div>
            <button
              onClick={() => setSelected(e)}
              className="text-sm font-medium bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors duration-200"
            >
              Check Degree
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setSelected(null)}
            >
              <IoClose size={24} />
            </button>
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-sky-600 text-3xl mr-3" />
              <h3 className="text-xl font-semibold">{selected.degree}</h3>
            </div>
            <p className="text-slate-600 mb-2">{selected.inst}</p>
            <span className="inline-block text-xs bg-sky-100 text-sky-700 px-3 py-1 rounded-full font-medium mb-4">
              {selected.year}
            </span>
            <p className="text-slate-700 mb-4">{selected.description}</p>

            {/* Document Link */}
            <a
              href={selected.docLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sky-600 font-medium hover:underline"
            >
              <FaRegFilePdf className="text-red-500 text-lg mr-2" />
              View Degree Document
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
