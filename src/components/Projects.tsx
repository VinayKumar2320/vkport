import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, TrendingUp, Zap, Shield } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Intelligent Road Safety System",
      description: "YOLOv5s-based traffic safety model with 98.5% accident prediction accuracy. Real-time monitoring system for traffic analysis and accident prevention.",
      impact: "98.5% accident prediction accuracy",
      tech: ["YOLOv5s", "Computer Vision", "PyTorch", "OpenCV", "Python"],
      icon: Shield,
      gradient: "from-red-500/20 to-orange-500/20",
      featured: true
    },
    {
      title: "VoiceGuard – GPT-powered Assistant",
      description: "Built real-time AI assistant integrating GPT, Whisper API, and Flask backend. Features voice recognition, natural language processing, and intelligent responses.",
      impact: "Real-time voice processing",
      tech: ["GPT API", "Whisper API", "Flask", "JavaScript", "Python"],
      icon: Zap,
      gradient: "from-blue-500/20 to-purple-500/20",
      featured: true
    },
    {
      title: "Real-Time GNSS Processing App",
      description: "React Native-based GNSS visualization app improving navigation performance by 2.5x. Features real-time GPS tracking and enhanced location accuracy.",
      impact: "2.5x performance improvement",
      tech: ["React Native", "GNSS", "JavaScript", "Mobile Development"],
      icon: TrendingUp,
      gradient: "from-green-500/20 to-teal-500/20",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 hero-text">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Innovative AI solutions solving real-world challenges across multiple domains
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Featured Projects */}
          {projects.filter(p => p.featured).map((project, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br ${project.gradient} border-border/50 card-hover relative overflow-hidden group`}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-full bg-background/10 backdrop-blur-sm flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <TrendingUp className="w-4 h-4" />
                    <span>{project.impact}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-background/50 text-foreground border border-border/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="border-border/50">
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </Button>
                </div>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-r ${project.gradient} border-border/50 card-hover group`}
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-background/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-primary font-semibold">{project.impact}</p>
                    </div>
                  </div>

                  <div className="flex-1">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-background/50 text-foreground border border-border/50 text-sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 flex-shrink-0">
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
