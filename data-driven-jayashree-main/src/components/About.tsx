import { Card } from "@/components/ui/card";
import { Brain, Target, Code, Database } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Passionate about developing intelligent systems using TensorFlow, Keras, and Scikit-learn"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Experienced in data visualization with Power BI, Tableau, and statistical analysis"
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Strong foundation in Python programming and full-stack development"
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: "Analytical mindset focused on creating impactful, data-driven solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Summary */}
          <div className="space-y-6 animate-slide-in">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Profile Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Aspiring AI and Data Science engineer with a strong foundation in Python, 
                data analysis, and software development. Eager to apply analytical thinking, 
                strong programming skills, and a problem-solving mindset to contribute to 
                impactful solutions in data-driven, AI, or software engineering environments.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Current Focus
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing Bachelor of Engineering in Artificial Intelligence and 
                Data Science at K S School of Engineering and Management, Bengaluru. 
                Actively building practical projects and gaining hands-on experience 
                through internships and certifications.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={item.title} className={`p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-hero-gradient rounded-full">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;