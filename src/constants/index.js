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
  split,
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
    title: "Javascript Dev ",
    company_name: "Personal Startup",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Building and maintaining web applications using React.js, Astro, and JavaScript",
      "Designing and developing solution driven websites like TraceVault.",
      "Learning and applying best practices for modern web development. ",
      "Hosting projects on GitHub and Vercel.",
    ],
  },
  {
    title: " Frontend Developer",
    company_name: "Diamond Park",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2025 - july 2025",
    points: [
      " Built the company's official website and a booking system to ensure maximum user experience.",
      "Managed the booking payment system and hosting ",
      "Practiced Git/GitHub for version control and collaboration.",
    ],
  },
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
      "An Open source automated chatbot designed to interact seamlessly on WhatsApp. It supports custom commands, message handling, and can be tailored to perform various tasks efficiently. Built for productivity and automation.",
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
        name: "node",
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
  {
    name: "SplitPay",
    description:
      "Splitpay is a peer-to-peer shared payment platform where people can create expense groups(e.g., food, electricity), split bills, track who paid what and who owes what, send reminders and also auto-calculate balances which in turn solves an everyday pain point of shared expenses and group payments.",
    tags: [
      {
        name: "firebase",
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
    image: split,
    source_code_link: "https://splitpay-neon.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
