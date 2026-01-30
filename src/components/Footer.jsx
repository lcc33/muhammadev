import React from "react";
import { motion } from "framer-motion";

import insta from "../assets/socials/instagram-social-media-network-communication-interaction-connection-svgrepo-com.svg";
import twitter from "../assets/socials/x.svg";
import linkedln from "../assets/socials/linkedln.svg";
import github from "../assets/github.png";

const SOCIALS = [
  { href: "https://x.com/aizenwritescode", label: "X", icon: twitter },
  { href: "https://github.com/lcc33", label: "GitHub", icon: github },
  { href: "https://www.linkedin.com/in/muhammad-147648327/", label: "LinkedIn", icon: linkedln },
  { href: "https://www.instagram.com/muhammadcodes_/", label: "Instagram", icon: insta },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-10 bg-primary flex flex-col items-center gap-6">
      <div className="flex items-center gap-6">
        {SOCIALS.map((social) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="group relative p-3 rounded-full bg-[#151030] hover:shadow-[0_0_15px_rgba(145,94,255,0.3)] transition-shadow"
          >
            <img 
              src={social.icon} 
              alt={social.label} 
              className="w-6 h-6 object-contain filter grayscale group-hover:grayscale-0 transition-all" 
            />
          </motion.a>
        ))}
      </div>

      <div className="flex flex-col items-center gap-1">
        <p className="text-secondary text-sm font-medium tracking-wide">
          © {currentYear} <span className="text-[#915EFF]">Muhammad</span>
        </p>
       
      </div>
    </footer>
  );
};

export default Footer;