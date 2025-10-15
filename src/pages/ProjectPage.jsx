import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../constants";

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary text-white p-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <p className="mb-6">We couldn't find a project with id: {id}</p>
          <Link to="/" className="text-cyan-300">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">{project.name}</h1>
        <p className="text-secondary mb-4">{project.description}</p>

        {project.story && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Story</h2>
            <p className="text-secondary leading-relaxed">{project.story}</p>
          </div>
        )}

        {project.challenges && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Challenges & Lessons</h2>
            <p className="text-secondary leading-relaxed">{project.challenges}</p>
          </div>
        )}

        {project.vision && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Vision</h2>
            <p className="text-secondary leading-relaxed">{project.vision}</p>
          </div>
        )}

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Technologies</h2>
          <div className="flex gap-2 flex-wrap">
            {project.tags.map((t) => (
              <span key={t.name} className={`text-sm ${t.color}`}>
                #{t.name}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Links</h2>
          <div className="flex flex-col gap-2">
            {project.source_code_link && (
              <a
                href={project.source_code_link}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-300"
              >
                Source / Live
              </a>
            )}
          </div>
        </div>

        <Link to="/" className="text-cyan-300">
          ← Back
        </Link>
      </div>
    </div>
  );
};

export default ProjectPage;
