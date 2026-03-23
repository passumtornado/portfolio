import React, { useState } from "react";
import { contactInfo } from "../data";
import Button from "../components/Button";
import { AlertCircle, CheckCircle, Send } from "lucide-react";
import emailjs from "@emailjs/browser";


export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({
      type: null,
      message: "",
    });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Email service is not configured properly.");
      }
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey,
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  id="name"
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-primary/30 focus:ring-1 focus:border-primary focus:ring-primary focus:outline-none transition-all duration-300"
                  placeholder="Your Name"
                  required
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
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-primary/30 focus:ring-1 focus:border-primary focus:ring-primary focus:outline-none transition-all duration-300"
                  placeholder="Your Email"
                  required
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
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-primary/30 focus:ring-1 focus:border-primary focus:ring-primary focus:outline-none transition-all duration-300 resize-none"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <Button
                  size="lg"
                  type="submit"
                  disabled={isLoading}
                  className="w-full"
                >
                  {isLoading ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
                {submitStatus.type && (
                  <div
                    className={`flex items-center gap-3 p-4 rounded-xl mt-4 ${
                      submitStatus.type === "success"
                        ? "bg-green-500/10 border border-green-500/20 text-green"
                        : "bg-red-500/10 border border-red-500/20 text-red-500"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <p className="text-sm">{submitStatus.message}</p>
                  </div>
                )}
              </div>
            </form>
          </div>
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-color group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="font-medium">{item.value}</div>
                  </a>
                ))}
              </div>
            </div>
            {/* Availability Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="font-medium">Currently Available</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                I'm currently open to new opportunities and collaborations. If
                you have a project in mind or just want to say hi, feel free to
                reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
