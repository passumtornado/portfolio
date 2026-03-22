type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
  current: boolean;
};

const experienceData: ExperienceItem[] = [
  {
    period: "2023 - Present",
    role: "Software Engineer / Data Scientist",
    company: "Azubi Africa",
    description:
      "Led data-driven projects using Python and SQL, integrated LLM-powered capabilities into products, and built dense retrieval pipelines with Sentence-BERT and FAISS to improve user interactions and decision-making.",
    technologies: [
      "Python",
      "SQL",
      "LLMs",
      "LangChain",
      "Sentence-BERT",
      "FAISS",
    ],
    current: true,
  },
  {
    period: "2020 - 2023",
    role: "Front-end Developer",
    company: "GetInNotized",
    description:
      "Built responsive web applications from Figma using React, Redux, TypeScript, and TailwindCSS. Contributed to multiple production products, including e-commerce experiences with modern React ecosystems.",
    technologies: [
      "React",
      "Redux",
      "TypeScript",
      "TailwindCSS",
      "Next.js",
      "Prisma",
    ],
    current: false,
  },
  {
    period: "2019 - 2020",
    role: "UI/UX Designer",
    company: "Savannah Tech",
    description:
      "Designed intuitive interfaces for web and mobile, created wireframes and high-fidelity prototypes in Figma, and improved user engagement through thoughtful redesigns of key product flows.",
    technologies: ["Figma", "UI Design", "UX Research", "Prototyping"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Work that shaped
            <span className="font-serif italic font-normal text-white">
              {" "}
              my engineering journey.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A blend of software engineering, AI development, and product design
            experience across education, startups, and production systems.
          </p>
        </div>
        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)] " />
          <div className="space-y-12">
            {experienceData.map((experience, index) => (
              <div key={index} className="relative grid md:grid-cols-2 gap-8 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-3 h-3 bg-primary rounded-full md:-translate-x-1/2 ring-4 ring-primary/50">
                {
                  experience.current && (
                    <span className="absolute inset-0  rounded-full bg-primary animate-ping opacity-75" />
                  )
                }
                </div>
                {/* Experience content */}
                <div className={` ml-8 md:ml-0 glass rounded-2xl  ${index % 2 === 0 ? 'md:text-right' : 'md:col-start-2 text-left'}`}>
                  <div className={`glass rounded-2xl p-6 border border-primary/30 hover:border-primary/50 transition-all duration-500 glow-border ${index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'}`} style={{ animationDelay: `${index * 100}ms` }}>
                    <span className="text-sm text-primary font-medium">{experience.period}</span>
                    <h3 className="text-xl font-semibold mt-2">{experience.role}</h3>
                    <p className="text-muted-foreground">{experience.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">{experience.description}</p>
                    <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      {experience.technologies.map((tech,index) => (
                        <span key={index} className="text-xs text-muted-foreground bg-muted rounded-full px-2.5 py-1 mr-2 mb-2">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {experienceData.map((experience, index) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="glass rounded-2xl p-6 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <p className="text-sm text-primary font-medium">
                  {experience.period}
                </p>
                {experience.current && (
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/30">
                    Current
                  </span>
                )}
              </div>

              <h3 className="text-xl font-semibold text-secondary-foreground">
                {experience.role}
              </h3>
              <p className="text-muted-foreground mb-4">{experience.company}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {experience.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={`${experience.company}-${tech}`}
                    className="text-xs text-muted-foreground bg-muted rounded-full px-2.5 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div> */}
      </div>
    </section>
  );
};
