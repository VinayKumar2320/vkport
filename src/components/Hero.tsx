import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import profileImage from "@/assets/vinay-profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <div className="relative animate-fade-in">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 glow-effect">
              <img
                src={profileImage}
                alt="Vinay Kumar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-blue-400 rounded-full opacity-20 blur-xl"></div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="hero-text">Vinay Kumar</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              AI & Machine Learning Engineer<br />
              <span className="text-primary">Data Science Enthusiast</span><br />
              Problem Solver
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary transition-colors duration-300 group"
              >
                <Linkedin className="w-6 h-6 group-hover:text-primary-foreground" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary transition-colors duration-300 group"
              >
                <Github className="w-6 h-6 group-hover:text-primary-foreground" />
              </a>
              <a
                href="https://scholar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary transition-colors duration-300 group"
              >
                <ExternalLink className="w-6 h-6 group-hover:text-primary-foreground" />
              </a>
              <a
                href="mailto:vinaykumarmd02@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary transition-colors duration-300 group"
              >
                <Mail className="w-6 h-6 group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;