import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  // Check if device is mobile to simplify animations
  const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;

  return (
    <motion.div
      // Use "tween" instead of "spring" on mobile for 60fps performance
      // If mobile, we also reduce the delay to make it feel snappier
      variants={fadeIn("right", isMobile ? "tween" : "spring", index * (isMobile ? 0.1 : 0.5), 0.75)}
      className="xs:w-[250px] w-full"
    >
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        scale={1.05}
        transitionSpeed={450}
        // Disable tilt logic on touch to save CPU/Battery
        tiltEnable={!isMobile} 
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </Tilt>
    </motion.div>
  );
};

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
          href="https://x.com/kindralabs"
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-[#915EFF] transition-colors cursor-pointer font-bold underline decoration-[#915EFF] underline-offset-4"
        >
          Kindra
        </a>{" "}
        — a solution-driven tech brand focused on building practical,
        impact-oriented products. I’m a frontend-focused developer with strong
        experience in JavaScript and TypeScript, building modern web
        applications with React, Next.js, Astro, and Tailwind CSS. I care deeply
        about clean UI, usability, and shipping products that people can
        actually use.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");