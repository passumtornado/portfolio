import React from "react";
import Button from "../components/Button";
import { ArrowRight } from "lucide-react";
import AnimatedBorderButton from "../components/AnimatedBorderButton";
import { socialLinks } from "../data";
export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src=""
          alt="Hero Background"
          className="w-full h-full object-cover opacity-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>
      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60 animate-slow-drift"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${10 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <div className="flex ">
              <div className="animate-fade-in">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  AI Engineer - Agentic Specialist
                </span>
              </div>
              <div className="animate-fade-in">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Software Engineer - React Specialist
                </span>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight animate-fade-in animation-delay-100">
                Building{" "}
                <span className="text-primary glow-text">AI-powered</span>
                <br />
                systems and software
                <br />
                <span className="font-serif italic font-normal text-white">
                  with precision
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Abubakar Passum A. Gaffar, an AI engineer and software
                engineer crafting intelligent systems and scalable applications.
                I specialize in building agentic AI solutions and modern web
                experiences using React, combining machine learning expertise
                with full-stack development. Focused on performance,
                user-centric design, and clean architecture—I transform complex
                ideas into elegant, production-ready systems.
              </p>
            </div>
            {/* CTA Button */}
            <div className="flex gap-2 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              {/* Animated Border Button to download resume */}
              <AnimatedBorderButton
                size="lg"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                Download Resume
              </AnimatedBorderButton>
            </div>
            {/* Social Links  */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              {/* Add your social media icons and links here */}
              <span className="text-sm text-muted-foreground">Follow Me:</span>
              <div className="flex gap-4 mt-2">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* Right column - Text content */}
        </div>
      </div>
    </section>
  );
};
