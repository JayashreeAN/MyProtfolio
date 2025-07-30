import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, Globe, MapPin } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Resume
          </h2>
          <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full"></div>
        </div>

        {/* Resume Container */}
        <Card className="p-8 md:p-12 shadow-card-hover">
          <div className="w-full max-w-4xl mx-auto">
            <img
              src="/lovable-uploads/55b9a99f-56fc-4fc7-87d0-0f4a6a69b707.png"
              alt="Jayashree N Resume"
              className="w-full h-auto shadow-lg rounded-lg"
            />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Resume;