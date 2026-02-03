import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, status }) => {
  // Memoized or simplified status mapping
  const statusColors = {
    Completed: "bg-green-500",
    "In Development": "bg-yellow-500",
    "in Development": "bg-yellow-500",
    MVP: "bg-violet-500",
    Archived: "bg-gray-500",
  };

  return (
    // Reduced spring stiffness for smoother mobile performance
    <div >
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        scale={1.02}
        transitionSpeed={450}
        // IMPORTANT: Disables tilt on touch devices for performance
        glareEnable={false}
        tiltEnable={!("ontouchstart" in window)}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full shadow-card hover:shadow-purple-500/10 transition-shadow"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
            loading="lazy"
          />
        </div>

        <div className="mt-5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-white font-bold text-[24px] truncate">
              {name}
            </h3>
            {status && (
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold text-black uppercase tracking-wider ${statusColors[status] || "bg-gray-400"}`}
              >
                {status}
              </span>
            )}
          </div>
          <p className="mt-2 text-secondary text-[14px] line-clamp-3 italic-text-fix">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <p className={styles.sectionSubText} id="projects">My work</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through
          real-world examples. Click on any card to dive deep into the story,
          challenges, and tech stack behind them.
        </p>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <Link key={project.id || index} to={`/projects/${project.id}`}>
            <ProjectCard index={index} {...project} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
