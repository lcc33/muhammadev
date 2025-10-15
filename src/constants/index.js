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
  figma,
  insta,
  twitter,
  linkedln,
  github,
  close,
  trace,
  zeno,
  bmb
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Typescript Developer",
    icon: mobile,
  },
  {
    title: "Tech Founder",
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
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: threejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: docker,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const socials = [
  {
    icon: twitter,
  },
  {
    icon: github,
  },
  {
    icon: linkedln,
  },
  {
    icon: insta,
  },
];

const experiences = [
  {
    title: "Founder & Fullstack Developer",
    company_name: "Kindra",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Building and maintaining the company's ecosystem using Next.js, React, and FastAPI.",
      "Developing impactful community-driven solutions like TraceVault and BuyMeBread.",
      "Hosting and deploying projects on Vercel, Render, and GitHub.",
      "Experimenting with open-source collaboration and improving developer experience.",
    ],
  },
  {
    title: "Tech Director",
    company_name: "Very Unreal",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sept 2025 - Present",
    points: [
      "Leading the technology team and overseeing all technical development efforts.",
      "Building the MVP for ZenoAI, the company's core AI-powered platform.",
      "Implementing efficient, scalable systems using FastAPI and PostgreSQL.",
      "Driving innovation, performance, and security across projects.",
    ],
  },
];

const testimonials = [];

const projects = [
 {
  id: "zenoai",
  name: "ZenoAI",
  status: "In Development",
  description:
    "ZenoAI is an AI-powered productivity and automation platform built under Very Unreal. It integrates intelligent task management, model interaction, and real-time collaboration — designed to help users and developers work smarter and faster.",
  story:
    "ZenoAI began as an idea to merge productivity with intelligence — not just another chatbot, but an assistant that truly understands work context. The MVP journey has been a test of focus: building the backend with FastAPI, connecting model inference via HuggingFace, and designing a smooth React frontend that feels fluid and personal.",
  challenges:
    "Balancing frontend polish with backend complexity has been the hardest part. Integrating AI models efficiently without compromising latency, and structuring FastAPI routes for modular scalability, pushed me to refine my backend logic. Every iteration makes the system faster and more human.",
  vision:
    "ZenoAI aims to become an intelligent workspace assistant for startups and builders — automating tasks, understanding goals, and collaborating in real time.",
  tags: [
    { name: "nextjs", color: "blue-text-gradient" },
    { name: "fastapi", color: "green-text-gradient" },
    { name: "postgresql", color: "pink-text-gradient" },
  ],
  image: zeno,
  source_code_link: "https://zenoai-ten.vercel.app/",
},

  {
  id: "tracevault",
  name: "TraceVault",
  status: "In Development",
  description:
    "TraceVault is an open-source lost and found platform designed for campuses and communities. It allows users to report, search, and claim lost items seamlessly while building a trusted community of contributors.",
  story:
    "TraceVault started as a personal need — I kept seeing students lose items on campus without a proper way to find them. It began as a simple form-based app, but over time, it evolved into a community-driven platform with reporting, claiming, and moderation features. I wanted to prove that you don’t need a big team or funding to build something useful — just consistency and iteration.",
  challenges:
    "The hardest challenge was UI simplicity and scalability. Early versions felt cluttered, so I had to merge the report and explore pages into one, and build a fluid inline editing system for posts. I also had to think deeply about trust and abuse prevention in a community app without centralized moderation.",
  vision:
    "The goal is for TraceVault to live beyond me — a true open-source platform where developers and communities can customize and deploy their own lost-and-found systems. It’s more than code; it’s about restoring trust and connection in local spaces.",
  tags: [
    { name: 'nextjs', color: 'blue-text-gradient' },
    { name: 'mongodb', color: 'green-text-gradient' },
    { name: 'tailwind', color: 'pink-text-gradient' },
  ],
  image: trace,
  source_code_link: 'https://tracevault.vercel.app/',
},

  {
  id: "buymebread",
  name: "BuyMeBread",
  status: "In Development",
  description:
    "BuyMeBread is a simple creator support platform under Kindra that allows fans to support their favorite creators directly through micro-donations. It focuses on simplicity, transparency, and meaningful connections.",
  story:
    "BuyMeBread came from a personal frustration with how most creator platforms are overcomplicated. I wanted something human — a space where creators could say, 'Buy me bread' instead of 'Subscribe to my tier'. It’s about real people supporting real effort. I started by building a clean landing page and payment flow prototype to test the idea.",
  challenges:
    "Right now, the main challenge is building a secure and transparent payment flow while keeping the UI dead simple. I’m testing small Next.js + FastAPI integrations and planning wallet-based options for micro-payments later on.",
  vision:
    "BuyMeBread aims to become a frictionless creator economy layer — where fans can support with intent, not subscriptions, and creators can grow communities without burnout or middlemen.",
  tags: [
    { name: 'nextjs', color: 'blue-text-gradient' },
    { name: 'tailwind', color: 'green-text-gradient' },
    { name: 'fastapi', color: 'pink-text-gradient' },
  ],
  image: bmb,
  source_code_link: 'https://buymebread.vercel.app/',
},
  {
  id: "kwikmart",
  name: "KwikMart",
  status: "In Development",
  description:
    "KwikMart is a decentralized, campus-based e-commerce platform that connects students looking to buy and sell items safely within their community.",
  story:
    "KwikMart began as an idea to make student trading safer. Most campus marketplaces are scattered — from WhatsApp groups to random posts. I wanted a structured space with profiles, verification, and trust built into the experience. I’ve been sketching the architecture with Astro for the frontend and planning to introduce smart contracts for transaction guarantees.",
  challenges:
    "I’m still exploring the right stack balance between decentralization and simplicity. Setting up a blockchain-backed escrow system without overcomplicating the user flow is tough. Plus, I’m still mastering backend tools like PostgreSQL and smart contract integration.",
  vision:
    "KwikMart will evolve into a student-powered decentralized market — one where transactions are transparent, fast, and community-driven. Long term, it could become the base layer for student-to-student trade across multiple campuses.",
  tags: [
    { name: 'astro', color: 'blue-text-gradient' },
    { name: 'javascript', color: 'green-text-gradient' },
    { name: 'python', color: 'pink-text-gradient' },
  ],
  image: omo,
  source_code_link: 'https://kwikmart-astro.vercel.app/',
},

  {
    id: "codenohero",
    name: "Code No Hero",
    status: "Completed",
    description:
      "Code No Hero is your go-to frontend development cheatsheet — packed with quick references for HTML, CSS, JavaScript, and popular frameworks. Built for developers who want to learn and build faster.",
    story:
      "Code No Hero started as a personal notebook of common patterns and snippets I found myself reusing across projects. Over time it grew into a curated cheatsheet with the most useful quick references for daily frontend work.",
    challenges:
      "The main challenge was keeping entries concise while still being helpful — avoiding a bloated reference and instead focusing on practical, copy-paste-ready snippets. Organizing content for discoverability was also important.",
    vision:
      "The vision is for Code No Hero to be a tiny, fast reference that helps developers ship features faster — eventually community-maintained with examples and short explanations.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
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
    id: "keynest",
    name: "Keynest",
    status: "Completed",
    description:
      "Keynest is a clean, web-based app for securely storing login credentials. It's powered by Firebase and Google Sign-In, designed to keep all your passwords safe and accessible anytime.",
    story:
      "Keynest began as a small project to simplify managing login credentials for multiple test accounts during development. I built a secure prototype using Firebase authentication and real-time storage for my own convenience because I didn't want to rely on Google Password Manager all the time.",
    challenges:
      "Security and UX were the primary challenges — ensuring credentials are stored safely, implementing proper auth flows, and keeping the interface minimal and trustworthy for users. For now it's a personal tool, but I'm exploring ways to make it more robust.",
    vision:
      "Keynest aims to be a lightweight, developer-friendly credential manager that remains simple to use while following best security practices.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://lcc33.github.io/keynest/public/keynest.html",
  },

  {
    id: "whatsapp-bot",
    name: "WhatsApp Bot",
    status: "Completed",
    description:
      "An open-source automated WhatsApp bot built with Baileys and Node.js. It handles commands, messages, and automations — made for productivity and real-time communication.",
    story:
      "The WhatsApp Bot started as an automation experiment to simplify repetitive messaging tasks and provide quick utilities in group chats. I leveraged the Baileys library to interface with WhatsApp Web and prototype commands.",
    challenges:
      "Reliability and message parsing were the biggest hurdles — handling network disconnects, keeping command parsing robust, and respecting platform limits required careful engineering.",
    vision:
      "The project aims to be a flexible automation toolkit for WhatsApp that developers can extend with custom commands, integrations, and deployment patterns.",
    tags: [
      {
        name: "baileys",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/lcc33/whatsapp-bot.git",
  },
];

export { services, technologies, socials, experiences, testimonials, projects };
