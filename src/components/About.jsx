import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="xs:w-[250px] w-full"
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m the Founder of{" "}
        <a
          href="https://x.com/kindralabs?s=20
"
          target="_blank" rel="noopener noreferrer"
          className="mt-4 text-[#fbfcff] max-w-3xl leading-[30px] p-[1px] rounded-[20px] shadow-card hover:text-[#9373d6] text-[20px] cursor-pointer font-bold"
        >
          Kindra
        </a>{" "}
        — a solution-driven tech brand focused on building practical,
        impact-oriented products. I’m a frontend-focused developer with strong
        experience in JavaScript and TypeScript, building modern web
        applications with React, Next.js, Astro, and Tailwind CSS. I care deeply
        about clean UI, usability, and shipping products that people can
        actually use. I also have working experience integrating APIs and
        backend services, collaborating on full-stack projects, and taking
        products from idea to MVP. I’m a consistent learner who enjoys building
        in public, refining systems, and collaborating with teams to create
        clear, scalable, and user-friendly solutions to real-world problems.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-5">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
