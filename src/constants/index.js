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
    title: "Web Developer",
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
    source_code_link: "https://github.com/lcc33/whatsapp-bot.git",
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
    image: tripguide,
    source_code_link: "https://lcc33.github.io/Code-no-hero/",
  }
];

export { services, technologies, socials, experiences, testimonials, projects };
