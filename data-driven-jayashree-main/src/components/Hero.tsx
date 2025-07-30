import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/jayashree-n-566460271/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/JayashreeAN", label: "GitHub" },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen bg-section-gradient flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm{" "}
                <span className="bg-hero-gradient bg-clip-text text-transparent">
                  Jayashree N
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mt-4 font-medium">
                Aspiring AI & Data Science Engineer
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl">
              Passionate about leveraging artificial intelligence and data science 
              to solve real-world problems. Currently pursuing B.E. in AI & Data Science 
              with hands-on experience in Python, machine learning, and data analytics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" onClick={scrollToContact}>
                <Mail className="w-5 h-5" />
                Get In Touch
              </Button>
              <Button variant="professional" size="lg" asChild>
                <a href="#resume">
                  <Download className="w-5 h-5" />
                  View Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-card hover:shadow-card-hover hover:scale-110 transition-all duration-300 text-primary hover:text-primary-dark"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-card-hover animate-float">
                <img
                  src="/lovable-uploads/29a858d3-08e7-4dad-806a-5f95d0590a52.png"
                  alt="Jayashree N - Professional Photo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-hero-gradient opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;