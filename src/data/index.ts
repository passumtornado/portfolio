import { Code2, Github, Lightbulb, Linkedin, Rocket, Twitter, Users } from "lucide-react";

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

export {
  socialLinks,
  technologies,
  highlghts
}