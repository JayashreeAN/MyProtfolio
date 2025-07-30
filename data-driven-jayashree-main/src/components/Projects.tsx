import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Indian Sign Language Translator",
      date: "December 2024",
      description: "Developed a real-time sign language recognition system with 80% accuracy, recognizing 26 alphabet gestures using Python, OpenCV, Mediapipe, and TensorFlow. Translates hand gestures into alphabet letters via webcam interface.",
      technologies: ["Python", "OpenCV", "Mediapipe", "TensorFlow"],
      githubUrl: "https://github.com/JayashreeAN",
      featured: true
    },
    {
      title: "Smart Attendance System",
      date: "March 2025",
      description: "Built a Flask-based QR attendance system used to log over 100+ entries with 100% timestamp accuracy using Flask, OpenCV, Pyzbar, and Pillow.",
      technologies: ["Python", "Flask", "OpenCV", "Pyzbar", "Pillow"],
      githubUrl: "https://github.com/JayashreeAN/Smart-Attendance-System-using-QR code-and-Face regodnition",
      featured: true
    },
    {
      title: "EV Charging Demand Prediction",
      date: "July 2025",
      description: "Designed and implemented a time-series model using Python, Pandas, and Scikit-learn to forecast EV charging demand. Achieved accurate predictions based on historical usage patterns, aiding future grid planning.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Time Series Analysis"],
      githubUrl: "https://github.com/JayashreeAN/EV-Charging-Demand-Prediction-Edunet-AICTE-Internship",
      featured: true
    },
    {
      title: "Stock Portfolio Tracker",
      date: "2024",
      description: "A comprehensive stock portfolio tracking application for monitoring investments and analyzing market trends.",
      technologies: ["Python", "Data Analysis"],
      githubUrl: "https://github.com/JayashreeAN/StockPortfolioTracker",
      featured: false
    },
    {
      title: "Automation Scripts",
      date: "2024",
      description: "Collection of Python automation scripts for various tasks and workflows to improve productivity.",
      technologies: ["Python", "Automation"],
      githubUrl: "https://github.com/JayashreeAN/AutomationScripts",
      featured: false
    },
    {
      title: "Hangman Game",
      date: "2024",
      description: "Interactive console-based Hangman game implemented in Python with engaging gameplay features.",
      technologies: ["Python", "Game Development"],
      githubUrl: "https://github.com/JayashreeAN/Hangman-Game",
      featured: false
    },
    {
      title: "Chatbot",
      date: "2024",
      description: "Intelligent chatbot implementation using natural language processing techniques.",
      technologies: ["Python", "NLP"],
      githubUrl: "https://github.com/JayashreeAN/Chatbot",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of my practical projects demonstrating AI, data science, and software development skills
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.title} 
                className={`p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 animate-fade-in h-full flex flex-col`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-1 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground text-lg">{project.title}</h4>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.date}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 mt-6">
                  <Button variant="default" size="sm" asChild className="flex-1">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.title} 
                className={`p-4 shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 animate-fade-in h-full flex flex-col`}
                style={{ animationDelay: `${(index + featuredProjects.length) * 0.1}s` }}
              >
                <div className="flex-1 space-y-3">
                  <h4 className="font-semibold text-foreground">{project.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button variant="outline" size="sm" asChild className="mt-4">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <Card className="p-8 max-w-4xl mx-auto shadow-card">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Explore More on GitHub
            </h3>
            <p className="text-muted-foreground mb-6">
              Want to see more of my work? Check out my GitHub profile for additional projects, 
              contributions, and ongoing developments.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="https://github.com/JayashreeAN" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                Visit GitHub Profile
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
