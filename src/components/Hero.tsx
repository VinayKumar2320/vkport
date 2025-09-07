import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import profileImage from "@/assets/vinay-profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-grid-primary/[0.03] bg-[size:50px_50px]" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl floating-animation" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl floating-animation" style={{animationDelay: '4s'}} />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Enhanced Profile Image */}
          <div className="relative animate-fade-in">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 glass-effect floating-animation pulse-glow">
              <img
                src={profileImage}
                alt="Vinay Kumar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-blue-500 to-purple-500 rounded-full opacity-20 blur-xl"></div>
            {/* Rotating Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-spin" style={{animationDuration: '8s'}} />
          </div>

          {/* Enhanced Hero Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-in">
            <h1 className="text-5xl lg:text-7xl font-black mb-6 text-shadow-soft">
              <span className="hero-text">Vinay Kumar</span>
            </h1>
            <p className="text-xl lg:text-2xl text-foreground/80 mb-8 leading-relaxed font-medium">
              <span className="text-2xl lg:text-3xl font-bold text-primary block mb-2">AI & Machine Learning Engineer</span>
              <span className="text-blue-600 font-semibold">Data Science Enthusiast</span><br />
              <span className="text-purple-600 font-semibold">Problem Solver</span>
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Button
                onClick={() => scrollToSection("projects")}
                className="enhanced-button text-white shadow-2xl transform hover:scale-110 transition-all duration-500 px-10 py-4 text-lg font-bold glow-effect"
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="morphing-border text-primary hover:bg-primary/10 hover:text-primary px-10 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-500"
              >
                Get In Touch
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-effect hover:bg-primary/20 transition-all duration-300 group transform hover:scale-110 hover:-translate-y-1"
              >
                <Linkedin className="w-6 h-6 text-primary group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-effect hover:bg-primary/20 transition-all duration-300 group transform hover:scale-110 hover:-translate-y-1"
              >
                <Github className="w-6 h-6 text-primary group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://scholar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-effect hover:bg-primary/20 transition-all duration-300 group transform hover:scale-110 hover:-translate-y-1"
              >
                <ExternalLink className="w-6 h-6 text-primary group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:vinaykumarmd02@gmail.com"
                className="p-3 rounded-full glass-effect hover:bg-primary/20 transition-all duration-300 group transform hover:scale-110 hover:-translate-y-1"
              >
                <Mail className="w-6 h-6 text-primary group-hover:text-primary transition-colors" />
              </a>
            </div>
            
            {/* Decorative Elements */}
            <div className="flex justify-center lg:justify-start space-x-2 mt-8">
              <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{animationDelay: '0.1s'}} />
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce" style={{animationDelay: '0.2s'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;