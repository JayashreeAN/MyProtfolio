import { Card } from "@/components/ui/card";
import { 
  Code, 
  Brain, 
  BarChart3, 
  Database, 
  Settings, 
  Globe 
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python"]
    },
    {
      icon: Brain,
      title: "AI/ML Tools",
      skills: ["OpenCV", "NumPy", "Pandas", "MatplotLib", "Scikit-learn", "TensorFlow", "Keras"]
    },
    {
      icon: BarChart3,
      title: "Data Analytics & Visualization",
      skills: ["Power BI", "Tableau", "Google Analytics"]
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MySQL", "MongoDB"]
    },
    {
      icon: Settings,
      title: "Developer Tools",
      skills: ["Jupyter Notebook", "Google Colab", "VS Code", "IDLE"]
    },
    {
      icon: Globe,
      title: "Languages",
      skills: ["English (Fluent)", "Kannada (Fluent)", "Telugu (Fluent)", "Hindi (Basic)"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className={`p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-hero-gradient rounded-lg">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="p-8 max-w-4xl mx-auto shadow-card">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Continuous Learning
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I believe in continuous learning and staying updated with the latest technologies 
              in AI and Data Science. Currently exploring advanced machine learning techniques, 
              cloud computing platforms, and modern data engineering tools to expand my skill set.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;