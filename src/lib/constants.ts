export const DEVELOPER_NAME = "Nick Persiya";
export const DEVELOPER_ROLE = "Fullstack Developer";
export const DEVELOPER_SHORT_BIO = "Building digital experiences that blend creativity with technical precision";
export const DEVELOPER_FULL_BIO = `
I'm an ambitious full-stack developer with hands-on experience gained through international internships and collaborative projects across diverse teams. 
During my journey, I contributed to the development of custom GTA V multiplayer servers, working on gameplay mechanics, UI components, and performance optimization to create immersive player experiences. 

Although my professional experience spans just over six months, I’ve worked in fast-paced, high-standards environments that demanded clean code, adaptability, and constant learning. 
Passionate about problem-solving and emerging technologies, I’m driven by the challenge of turning ideas into scalable, user-focused digital products.
`;

export const SOCIAL_LINKS = {
  github: "https://github.com/WXZVRD",
  linkedin: "https://linkedin.com",
  telegram: "@Tyraellis",
  email: "forworknickworron@gmail.com",
};

export const NAV_LINKS = [
  { name: "Home", path: "#hero" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Skills", path: "#skills" },
  { name: "Contact", path: "#contact" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "SuperNFT Landong",
    description: "A visually immersive NFT landing page built with pure HTML, CSS, and JavaScript, enhanced by smooth GSAP animations for a dynamic cosmic experience.",
    image: "https://github.com/WXZVRD/SuperNFTLandong/blob/main/README/cover.png?raw=true",
    tags: ["HTML", "CSS", "JS", "GSAP"],
    github: "https://github.com/WXZVRD/SuperNFTLandong",
    live: "https://wxzvrd.github.io/SuperNFTLandong/",
    featured: true,
  },
  {
    id: 2,
    title: "Hydra Landong",
    description: "A futuristic VR-themed landing page — Hydralanding — built with pure HTML, CSS, and JavaScript, powered by GSAP animations for smooth, cinematic motion effects.",
    image: "https://github.com/WXZVRD/HydraLandong/blob/main/README/Hydra-Desktop-UserView.png?raw=true",
    tags: ["HTML", "CSS", "JS", "GSAP"],
    github: "https://github.com/WXZVRD/HydraLandong",
    live: "https://wxzvrd.github.io/HydraLandong/",
    featured: true,
  },
  {
    id: 3,
    title: "SchoolHeart Landong",
    description: "A colorful and interactive landing page for kids' and school education programs, built with HTML, CSS, and JavaScript, enhanced with GSAP animations. Features engaging visuals, smooth transitions, and playful motion effects to keep young audiences interested and motivated.",
    image: "https://github.com/WXZVRD/SchoolHeart/blob/master/img/figmaland-figma.jpg?raw=true",
    tags: ["HTML", "CSS", "JS", "GSAP"],
    github: "https://github.com/WXZVRD/SchoolHeart",
    live: "https://wxzvrd.github.io/SchoolHeart/",
    featured: true,
  },
  {
    id: 4,
    title: "Fitness Tracking App",
    description: "A mobile-first application for tracking workouts, nutrition, and progress towards fitness goals with data visualization.",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpdG5lc3MlMjBhcHB8ZW58MHx8MHx8fDA%3D",
    tags: ["React Native", "Redux", "Firebase", "Chart.js"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: 5,
    title: "Smart Home Dashboard",
    description: "An IoT dashboard for controlling and monitoring connected home devices with beautiful visualizations and automation features.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBob21lfGVufDB8fDB8fHww",
    tags: ["Angular", "MQTT", "Node.js", "Three.js", "D3.js"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: 6,
    title: "Personal Finance Tracker",
    description: "A web application for tracking personal finances, with budgeting tools, expense categorization, and financial insights.",
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["React", "Express", "PostgreSQL", "Chart.js", "Auth0"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
];

export const SKILLS = {
  frontend: [
    { name: "React", level: 95, icon: "devicon-react-original" },
    { name: "Html", level: 95, icon: "devicon-html-original" },
    { name: "Css", level: 95, icon: "devicon-css-original" },
    { name: "Vue.js", level: 85, icon: "devicon-vuejs-plain" },
    { name: "TypeScript", level: 90, icon: "devicon-typescript-plain" },
    { name: "Next.js", level: 80, icon: "devicon-nextjs-original" },
    { name: "Tailwind CSS", level: 90, icon: "devicon-tailwindcss-plain" },
    { name: "GSAP", level: 75, icon: "devicon-javascript-plain" },
    { name: "Three.js", level: 70, icon: "devicon-threejs-original" },
  ],
  backend: [
    { name: "Node.js", level: 90, icon: "devicon-nodejs-plain" },
    { name: "Express", level: 85, icon: "devicon-express-original" },
    { name: "PostgreSQL", level: 85, icon: "devicon-postgresql-plain" },
    { name: "MongoDB", level: 90, icon: "devicon-mongodb-plain" },
  ],
  devOps: [
    { name: "Docker", level: 85, icon: "devicon-docker-plain" },
    { name: "CI/CD", level: 75, icon: "devicon-github-plain" },
  ],
  other: [
    { name: "Git", level: 90, icon: "devicon-git-plain" },
    { name: "Figma", level: 75, icon: "devicon-figma-plain" },
    { name: "Jest", level: 80, icon: "devicon-jest-plain" },
    { name: "Agile", level: 85, icon: "devicon-jira-plain" },
    { name: "Jira", level: 85, icon: "devicon-jira-plain" },
  ],
};