import React from 'react'
import { projects } from '../data';
import { ArrowRight, Github } from 'lucide-react';

export const Projects = () => {
  const [activeFilter, setActiveFilter] = React.useState("All");
  
  const filteredProjects = activeFilter === "All" ? projects : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glow */}

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in ">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Project that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            I have worked on a variety of projects, ranging from small
            applications to large-scale systems. Here are some of my recent
            projects that showcase my skills and expertise in software
            development and AI technologies.
          </p>
        </div>
        {/* Project Grid */}
        <div>
          {/* Add filter section for ALL, Frontend,AI,Machine Learning and UI/UX */}
          <div>
            <div className="flex justify-center gap-4 mb-12">
              <button
                className="px-4 py-2 text-sm text-primary bg-primary/10 rounded-full hover:bg-primary/20 transition"
                onClick={() => setActiveFilter("All")}
              >
                All
              </button>
              <button
                className="px-4 py-2 text-sm text-primary bg-primary/10 rounded-full hover:bg-primary/20 transition"
                onClick={() => setActiveFilter("Frontend")}
              >
                Frontend
              </button>
              <button
                className="px-4 py-2 text-sm text-primary bg-primary/10 rounded-full hover:bg-primary/20 transition"
                onClick={() => setActiveFilter("AI")}
              >
                AI
              </button>
              <button
                className="px-4 py-2 text-sm text-primary bg-primary/10 rounded-full hover:bg-primary/20 transition"
                onClick={() => setActiveFilter("Machine Learning")}
              >
                Machine Learning
              </button>
              <button
                className="px-4 py-2 text-sm text-primary bg-primary/10 rounded-full hover:bg-primary/20 transition"
                onClick={() => setActiveFilter("UI/UX")}
              >
                UI/UX
              </button>
            </div>
            {/* Project Cards */}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group glass rounded-2xl overflow-hidden  animate-fade-in md:row-span-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent opacity-60" />
                  {/* Overlay links */}
                  <div className="absolute inset-0 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity:300">
                    <div className="flex gap-6">
                      <a
                        href={project.link}
                        className="p-3 rounded-full glass hover:bg-primary  hover:text-primary-foreground transition-all"
                      >
                        <ArrowRight className="w-6 h-6" />
                      </a>
                      <a
                        href={project.githuburl}
                        className="p-3 rounded-full glass hover:bg-primary  hover:text-primary-foreground transition-all"
                      >
                        <Github />
                      </a>
                    </div>
                    <div className="absolute bottom-0 glass rounded-lg p-2 mt-2 w-full ">
                      <h3 className="text-lg font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground ">
                        {project.description}
                      </p>
                    </div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs text-muted-foreground bg-muted rounded-full px-2 py-1 hover:bg-primary/20 hover:border hover:border-primary/50 transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


