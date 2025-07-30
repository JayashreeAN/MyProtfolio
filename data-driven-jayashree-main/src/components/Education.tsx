import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Briefcase, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Artificial Intelligence and Data Science",
      institution: "K S School of Engineering and Management",
      location: "Bengaluru, KA",
      period: "Nov 2022 – 2026",
      status: "Pursuing"
    },
    {
      degree: "Pre-University College",
      field: "Science, PCMB",
      institution: "Sree Venkateshwara PU College",
      location: "Bengaluru, KA",
      period: "Jun 2021 – 2022",
      status: "Completed"
    }
  ];

  const certifications = [
    {
      title: "Python Foundation Course",
      issuer: "Infosys Springboard",
      date: "Oct 2024"
    },
    {
      title: "Data Analytics",
      issuer: "Mevi Technologies",
      date: "Nov 2024"
    },
    {
      title: "Google Analytics",
      issuer: "Google",
      date: "Feb 2025"
    },
    {
      title: "Applied Artificial Intelligence",
      issuer: "TechSaksham",
      date: "Mar 2025"
    },
    {
      title: "Job Simulation – Deloitte",
      issuer: "Deloitte (Data Analysis + Forensics)",
      date: "Jun 2025"
    }
  ];

  const internships = [
    {
      title: "AI & Cloud Intern",
      company: "Edunet Foundation (IBM SkillsBuild Program)",
      period: "Jul 2025 – Present",
      description: "Selected for AICTE-recognized Shell-Edunet Skills4Future internship focused on AI and Cloud technologies, completed IBM certifications in Applied AI, RAG (LangChain), and Cloud Solutions, and currently progressing toward a final project with expert mentorship."
    }
  ];

  return (
    <section id="education" className="py-20 bg-section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-hero-gradient rounded-lg">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 text-xs rounded-full ${
                        edu.status === 'Pursuing' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {edu.status}
                      </span>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-primary font-medium">{edu.field}</p>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-hero-gradient rounded-lg">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className={`p-4 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">{cert.title}</h4>
                    <p className="text-primary text-sm">{cert.issuer}</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      {cert.date}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Internships */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-hero-gradient rounded-lg">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Internships</h3>
            </div>
            
            <div className="space-y-6">
              {internships.map((internship, index) => (
                <Card key={index} className="p-6 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                        Current
                      </span>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {internship.period}
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground">{internship.title}</h4>
                    <p className="text-primary font-medium">{internship.company}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {internship.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;