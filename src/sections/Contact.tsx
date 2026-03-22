import React from 'react'
import { contactInfo } from '../data'



export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            let's build
            <span className="font-serif italic font-normal text-white">
              {" "}
              something amazing together.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Feel free to reach out
            using the contact information below or through my social media
            channels.
          </p>
        </div>
        {/* Contact Form */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto ">
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300 ">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-primary/30 focus:border-primary focus:ring-primary focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-primary/30 focus:border-primary focus:ring-primary focus:outline-none"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-primary/30 focus:border-primary focus:ring-primary focus:outline-none"
                  placeholder="Your Message"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


