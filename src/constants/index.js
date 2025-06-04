import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  // figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  sharp,
  tripguide,
  threejs,
  omo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Express Developer",
    icon: web,
  },
  {
    title: "Content Creator",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Gamer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Frontend Developer ",
    company_name: "Personal Startup",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Building and maintaining web applications using React.js, Astro, and JavaScript",
      "Designing and developing solution driven websites like TraceVault.",
      "Learning and applying best practices for modern web development. ",
      "Hosting projects on GitHub and Vercel.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     " Focused on mastering core web technologies (HTML, CSS, JavaScript).",
  //     "Built several mini-projects like landing pages, to-do apps, portfolio sites",
  //     "Practiced Git/GitHub for version control.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but he proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like he does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Muhammad optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Keynest",
    description:
      "Keynest is a sleek, web-based app that helps you securely store login credentials for all your favorite platforms. It's simple, stylish, and powered by Firebase for real-time storage and Google Sign-In authentication.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://lcc33.github.io/keynest/public/keynest.html",
  },
  {
    name: "Whatsapp Bot",
    description:
      "An automated chatbot designed to interact seamlessly on WhatsApp. It supports custom commands, message handling, and can be tailored to perform various tasks efficiently. Built for productivity and automation.",
    tags: [
      {
        name: "Baileys",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/lcc33/whatsapp-bot.git",
  },
  {
    name: "Trace Vault",
    description:
      "TraceVault(although still an MVP) is a campus-focused Lost & Found platform built to help students easily report lost items, view found items, and connect both ends securely. It aims to reduce the stress and time associated with finding lost belongings within university environments.",
    tags: [
      {
        name: "Firebase",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: sharp,
    source_code_link: "https://lcc33.github.io/trace-mvp/",
  },
  {
    name: "Code no Hero",
    description:
      "Code no Hero is your essential, no-nonsense frontend development cheatsheet. It's packed with quick references for HTML, CSS, JavaScript, and popular frameworks. Quickly find syntax, troubleshoot common issues, and get back to coding efficiently. Your go-to guide for fast, effective frontend development.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://lcc33.github.io/Code-no-hero/",
  },
  {
    name: "KwikMart",
    description:
      "KwikMart is a campus-based e-commerce platform designed for students to easily buy and sell items within their university community. Inspired by platforms like Jiji, it streamlines peer-to-peer transactions, making it simple for students to find deals, post listings, and connect with other students for safe and convenient trading.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Astro",
        color: "pink-text-gradient",
      },
    ],
    image: omo,
    source_code_link: "https://kwikmart-astro.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
