import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Animation variant for the container
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Load one after another
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const Tech = () => {
  return (
    <motion.div 
      variants={container}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      className='flex flex-row flex-wrap justify-center gap-10'
    >
      {technologies.map((technology) => (
        <motion.div 
          variants={item}
          className='w-28 h-28' 
          key={technology.name}
        >
          <BallCanvas icon={technology.icon} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SectionWrapper(Tech, "");