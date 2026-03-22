import { Code2, Github, Lightbulb, Linkedin, Mail, MapPin, Phone, Rocket, Twitter, Users } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    url: "https://github.com/passumtornado",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/abubakar-passum-a-gaffar-2583a0118/",
  }
];

const technologies = [
    "Python",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "AI/ML Frameworks",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "Docker",
    "Jest",
    "AWS",
    "Prisma",
    "Figma",
    "Git Actions",
    "CI/CD",
    "TanStack Query",
  ];


const highlghts=[
    {
        icon:Code2,
        title:"Clean Code",
        description:"I write clean, maintainable code that follows best practices and design patterns, ensuring scalability and ease of collaboration."
    },
    {
       icon:Rocket,
       title:"Performance Optimization",
       description:"I optimize applications for speed and efficiency, using techniques like code splitting, lazy loading, and performance profiling to deliver fast user experiences." 
    },
    {
        icon:Users,
        title:"User-Centric Design",
        description:"I prioritize user experience in my development process, creating intuitive interfaces and seamless interactions that delight users."
    },
    {
        icon:Lightbulb,
        title:"Innovative Solutions",
        description:"I leverage the latest technologies and trends to build innovative solutions that solve complex problems and drive business value."
    }
]

const projects = [
  {
    title: "Ecommerce Platform",
    description:
      "A full-featured ecommerce platform with user authentication, product management, and a responsive design, built using React and Node.js.",
    image: "/project2.png",
    tags: ["Next", "Neon", "Prisma", "PostgreSQL", "TypeScript"],
    link: "#",
    githuburl: "#",
    category: "Frontend"
  },
  {
    title: "Fintech Dashboard",
    description:
      "A real-time dashboard for monitoring financial data and market trends, built with React and integrated with various financial APIs.",
    image: "/project1.png",
    tags: ["React", "D3.js", "Node.js", "Express", "MongoDB"],
    link: "#",
    githuburl: "#",
    category: "Frontend"
  },
  {
    title: "AI Dashboard",
    description:
      "A real-time dashboard for monitoring financial data and market trends, built with React and integrated with various financial APIs.",
    image: "/project3.png",
    tags: ["React", "D3.js", "Node.js", "Express", "MongoDB"],
    link: "#",
    githuburl: "#",
    category: "AI"
  },
  {
    title: "AI Dashboard",
    description:
      "A real-time dashboard for monitoring financial data and market trends, built with React and integrated with various financial APIs.",
    image: "/project4.png",
    tags: ["React", "D3.js", "Node.js", "Express", "MongoDB"],
    link: "#",
    githuburl: "#",
    category: "AI"
  },
];

const contactInfo = [
    {
        icon:Mail,
        label:"Email",
        value:"passumtornado10@gmail.com",
        href:"mailto:passumntornado10@gmail.com"
    },
    {
        icon:Phone,
        label:"Phone",
        value:"+46 76 435 8323",
        href:"tel:+46764358323"
    },
    {
        icon:MapPin,
        label:"Location",
        value:"Linköping, Sweden",
        href:"https://www.google.com/maps/place/Linköping,+Sweden"
    }
]


export {
  socialLinks,
  technologies,
  highlghts,
  projects,
  contactInfo
}