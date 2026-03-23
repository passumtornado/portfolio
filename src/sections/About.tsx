
import { highlghts } from '../data';

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium uppercase">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                Building the future,
                <span className="font-serif italic font-normal text-white">
                  {" "}
                  one component at a time
                </span>
              </h2>
              <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                <p>
                  I'm a passionate software engineer specializing in React and
                  AI technologies. With a strong background in building scalable
                  web applications and AI-powered systems, I thrive on creating
                  innovative solutions that drive business value. My expertise
                  includes developing intuitive user interfaces, optimizing
                  performance, and leveraging the latest trends in AI to solve
                  complex problems. I am dedicated to continuous learning and
                  staying at the forefront of technology to deliver exceptional
                  results.
                </p>
                <p>
                  I prioritize user experience in my development process,
                  creating intuitive interfaces and seamless interactions that
                  delight users. I leverage the latest technologies and trends
                  to build innovative solutions that solve complex problems and
                  drive business value.
                </p>
                <p>
                  I write clean, maintainable code that follows best practices
                  and design patterns, ensuring scalability and ease of
                  collaboration. I optimize applications for speed and
                  efficiency, using techniques like code splitting, lazy
                  loading, and performance profiling to deliver fast user
                  experiences.
                </p>
                <p></p>
              </div>
              <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                <p className="text-lg font-medium italic text-foreground">
                  "My mission is to create digital experiences that are not only
                  functional but also delightful, leveraging the power of AI and
                  modern web technologies to solve real-world problems and drive
                  innovation."
                </p>
              </div>
            </div>
          </div>
          {/* Right column */}
          <div className="grid lg:grid-cols-2 gap-12">
            {highlghts.map((item, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 glow-border animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl text-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 glass">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


