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
  bmb,
  unreal,
  veritas,
  bot,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  starbucks,
  tesla,
  threejs,
  zeno,
  trace,
  trip,
  github,
  azimg,
  diamond,
  bored,
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
    title: "Writer ",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: web,
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer ",
    company_name: "Personal Projects",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Jan 2024 – Present",
    points: [
      "Building and maintaining web applications using React.js, HTML/CSS, and JavaScript",
      "Designing and developing responsive UI components.",
      "Learning and applying best practices for modern web development. ",
      "Hosting projects on GitHub and Netlify.",
    ],
  },
  {
    title: "Tech Director",
    company_name: "Very Unreal",
    icon: unreal,
    iconBg: "#E6DEDD",
    date: "Sept 2025 - Present",
    points: [
      "Leading the technology team and overseeing all technical development efforts.",
      "Building the MVP for ZenoAI, the company's core AI-powered platform.",
      "Implementing efficient, scalable systems using FastAPI and PostgreSQL.",
      "Driving innovation, performance, and security across projects.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "ReferX",
    icon: github,
    iconBg: "#E6DEDD",
    date: "Oct 2025 -  Present",
    points: [
      "Collaborating with designers and backend developers to create seamless user experiences.",
      "Implementing responsive design principles to ensure cross-device compatibility.",
      "Optimizing application performance and ensuring high code quality through best practices.",
    ],
  },
];

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
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: trace,
    source_code_link: "https://tracevault.xyz",
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
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "fastapi", color: "pink-text-gradient" },
    ],
    image: bmb,
    source_code_link: "https://buymebread.vercel.app/",
  },
  {
    id: "a-zpetstore",
    name: "A-Z Pet Store",
    status: "Completed",
    description:
      '"A-Z Pet Store" is an e-commerce website that offers a wide range of pet products and accessories. The platform provides a user-friendly interface for browsing, searching, and purchasing items for various types of pets.',
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: azimg,
    source_code_link: "https://a-z-pet-store.vercel.app/",
  },
  {
    id: "codenohero",
    name: "Code No Hero",
    status: "Completed",
    description:
      "Code no Hero(just an MVP) is an anime-themed website that teaches HTML, CSS, and JavaScript to beginners (especially teens). It makes learning web development fun and interactive by using characters, animations, and storytelling.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: trip,
    source_code_link: "https://lcc33.github.io/Code-no-hero/",
  },
  {
    id: "veritas",
    name: "Veritas",
    status: "in Development",
    description:
      "Veritas is a platform that combats misinformation by providing transparent, evidence-based claim verification. Unlike black-box fact-checkers, we show sources and reasoning behind every verdict.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: veritas,
    source_code_link: "https://veritas-beryl.vercel.app/",
  },
  {
    id: "diamondpark",
    name: "Diamond Park Ilorin",
    status: "Completed",
    description:
      "Diamond Park Ilorin stands as the premier recreational and event destination in Ilorin, Kwara State, Nigeria. Nestled in a serene environment, the park offers a unique blend of natural beauty and modern amenities, making it the perfect escape for families, friends, and groups of all ages.",
    tags: [
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: diamond,
    source_code_link: "https://diamond-park-ilorin.vercel.app/",
  },
  {
    id: "boredshinigami",
    name: "Bored Shinigami NFTs",
    status: "In Development",
    description:
      "Bored Shinigamiz is the first collection of 11,111 unique 3D anime-inspired NFTs living on the Solana blockchain. Each Shinigami is hand-crafted with over 250+ traits. We want to build the strongest community and project around anime NFTs.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "web3",
        color: "pink-text-gradient",
      },
    ],
    image: bored,
    source_code_link: "https://bored-shinigami.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
