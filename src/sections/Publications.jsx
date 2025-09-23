// src/sections/Published.jsx
import React, { useState } from "react";
import { FaBook, FaExternalLinkAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const papers = [
  {
  title: "Supervision of College Management Using Database Management System",
  publisher: "Journal of Organization and Administration of Database Management Systems (JOADMS)",
  year: "2024",
  description: (
    <div>
      <p><h1><b>KeyWords</b><br></br> </h1></p>
      <p>📊 Designed and implemented a database-driven system for managing college operations efficiently.</p>
      <p>🏫 Automated supervision of administrative tasks like student records, staff management, and scheduling.</p>
      <p>⚡ Improved accuracy and reduced manual workload using relational database concepts.</p>
      <p>☁️ Proposed a scalable framework that can integrate with cloud-based DBMS solutions.</p>
    </div>
  ),
  certificate: "/path-to-certificate4.png", // update with your actual certificate image
  link: "https://journals.stmjournals.com/joadms/article=2024/view=155343/",
},

  // {
  //   title: "Healthcare Text Mining using GraphRAG",
  //   publisher: "IEEE Conference on Data Engineering",
  //   year: "2023",
  //   description:
  //     "Exploration of clinical text analytics using GraphRAG and LLM-based embedding models.",
  //   link: "https://ieeexplore.ieee.org/your-paper-link",
  // },
  // {
  //   title: "Optimizing Room Allocation with AI",
  //   publisher: "Springer Lecture Notes on Computer Science",
  //   year: "2023",
  //   description:
  //     "Proposed an AI-powered approach for automated and priority-based classroom allocation systems.",
  //   link: "https://link.springer.com/your-paper-link",
  // },
];

export default function Published() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="papers" className="py-16 bg-slate-50">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-slate-800 relative inline-block">
          Published Papers
          <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-sky-600"></span>
        </h2>
      </div>

      {/* Paper Cards */}
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
        {papers.map((paper, i) => (
          <div
            key={i}
            className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-lg hover:border-sky-400 hover:shadow-sky-200 transition-all duration-300"
          >
            <div className="flex items-center mb-3">
              <FaBook className="text-sky-600 text-3xl mr-3" />
              <h4 className="text-lg font-semibold text-slate-800">{paper.title}</h4>
            </div>
            <div className="flex items-center justify-between text-slate-600 mb-4">
              <span>{paper.publisher}</span>
              <span className="text-xs bg-sky-100 text-sky-600 px-3 py-1 rounded-full font-medium">
                {paper.year}
              </span>
            </div>
            <button
              onClick={() => setSelected(paper)}
              className="text-sm font-medium bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors duration-200"
            >
              View Paper
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
              <FaBook className="text-sky-600 text-3xl mr-3" />
              <h3 className="text-xl font-semibold">{selected.title}</h3>
            </div>
            <p className="text-slate-600 mb-2">{selected.publisher}</p>
            <span className="inline-block text-xs bg-sky-100 text-sky-600 px-3 py-1 rounded-full font-medium mb-4">
              {selected.year}
            </span>
            <p className="text-slate-700 mb-4">{selected.description}</p>

            {/* Paper Link */}
            <a
              href={selected.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sky-600 font-medium hover:underline"
            >
              <FaExternalLinkAlt className="ml-2 text-xs" />
              Access Paper
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
