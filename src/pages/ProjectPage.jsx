import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../constants";

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-white p-6">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <Link to="/" className="text-[#915EFF] hover:underline">← Back to Home</Link>
      </div>
    );
  }

  // Sections to render dynamically
  const details = [
    { title: "The Story", content: project.story },
    { title: "Challenges & Lessons", content: project.challenges },
    { title: "Future Vision", content: project.vision },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-primary text-white pt-24 pb-12 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Navigation */}
        <Link to="/" className="text-secondary hover:text-white transition-colors flex items-center gap-2 mb-8 group">
          <span className="group-hover:-translate-x-2 transition-transform">←</span> Back to Projects
        </Link>

        {/* Header Section */}
        <header className="mb-12">
          <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
            {project.name}
          </h1>
          <p className="text-secondary text-lg md:text-xl max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {details.map((section, index) => section.content && (
              <motion.section 
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-[#915EFF]" /> {section.title}
                </h2>
                <p className="text-secondary leading-relaxed text-lg italic-text-fix">
                  {section.content}
                </p>
              </motion.section>
            ))}
          </div>

          {/* Sidebar Info */}
          <aside className="lg:col-span-1 space-y-8">
            <div className="bg-[#151030] p-6 rounded-2xl border border-white/5 shadow-xl">
              <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
              <div className="flex gap-2 flex-wrap mb-8">
                {project.tags.map((t) => (
                  <span key={t.name} className={`text-sm px-3 py-1 rounded-full bg-primary ${t.color} border border-white/10`}>
                    #{t.name}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4">Links</h3>
              {project.source_code_link && (
                <a
                  href={project.source_code_link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block w-full text-center bg-[#915EFF] py-3 rounded-xl font-bold hover:bg-[#7e4ae6] transition-colors shadow-lg shadow-purple-500/20"
                >
                  View Live Site / Code
                </a>
              )}
            </div>
          </aside>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectPage;s