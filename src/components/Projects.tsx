import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, TrendingUp, Zap, Shield, Car, Users, MapPin, Eye, Calendar } from "lucide-react";
const Projects = () => {
  const projects = [{
    title: "VoiceGuard: Jarvis-Powered GPT Voice Assistant",
    description: "Innovative solution enabling users to interact with devices through natural language commands. Utilizes Jarvis's speech recognition and GPT's language understanding for seamless task execution.",
    impact: "Enhanced accessibility and convenience",
    tech: ["GPT API", "Speech Recognition", "Natural Language Processing", "AI Integration"],
    icon: Zap,
    gradient: "from-blue-500/20 to-purple-500/20",
    featured: true,
    date: "May 2023"
  }, {
    title: "Processing, visualization and application development of raw GNSS data on Android Smartphones",
    description: "Cutting-edge solution using React Native for processing and visualizing raw GNSS data directly from Android devices, utilizing advanced smartphone chipsets supporting multiple GNSS constellations.",
    impact: "Enhanced accuracy and integrity in GNSS applications",
    tech: ["React Native", "GNSS", "Android Development", "L1/L5 Frequencies"],
    icon: MapPin,
    gradient: "from-green-500/20 to-teal-500/20",
    featured: true,
    date: "Oct 2022"
  }, {
    title: "Drowsiness Detector",
    description: "Machine learning system using real-time data analysis to detect signs of drowsiness and fatigue. Employs computer vision algorithms within OpenCV to detect facial landmarks and analyze eye state changes.",
    impact: "Enhanced driver safety and alertness",
    tech: ["Machine Learning", "OpenCV", "Computer Vision", "Real-time Analysis"],
    icon: Eye,
    gradient: "from-red-500/20 to-orange-500/20",
    featured: true,
    date: "Jul 2023"
  }, {
    title: "Travel Planning App (Plavel)",
    description: "React app that considers various modes of transportation and suggests optimal routes for well-organized journeys. Integrates live location data and adapts schedules for unexpected delays.",
    impact: "Seamless travel experience",
    tech: ["React", "Location Data", "Route Optimization", "Real-time Updates"],
    icon: Car,
    gradient: "from-indigo-500/20 to-blue-500/20",
    featured: false,
    date: "Mar 2022"
  }, {
    title: "Faculty Management System",
    description: "Comprehensive system to streamline faculty-related information management, including personal details, courses taught, schedules, and performance records with user-friendly interface.",
    impact: "Streamlined faculty management",
    tech: ["Apache", "MySQL", "PHP", "Frontend Technologies"],
    icon: Users,
    gradient: "from-purple-500/20 to-pink-500/20",
    featured: false,
    date: "Sep 2023"
  }, {
    title: "Productivity Tracker (ProTrack)",
    description: "Dynamic productivity tracker built using React that fosters community by enabling users to join and create groups. Members can monitor each other's productivity and share achievements.",
    impact: "Enhanced focus and progress through community",
    tech: ["React", "Community Features", "Productivity Tracking", "Group Management"],
    icon: TrendingUp,
    gradient: "from-emerald-500/20 to-green-500/20",
    featured: false,
    date: "Apr 2023"
  }];
  return <section id="projects" className="py-20 gradient-bg relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-primary/8 rounded-full blur-3xl floating-animation" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/6 rounded-full blur-3xl floating-animation" style={{
      animationDelay: '3s'
    }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 hero-text text-shadow-soft">Featured Projects</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-medium">
            Innovative <span className="text-primary font-bold">AI solutions</span> solving real-world challenges across multiple domains
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Featured Projects */}
          {projects.filter(p => p.featured).map((project, index) => <Card key={index} className={`glass-effect morphing-border bg-gradient-to-br ${project.gradient} card-hover relative overflow-hidden group`} style={{
          animationDelay: `${index * 0.2}s`
        }}>
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-blue-500/30 backdrop-blur-sm flex items-center justify-center pulse-glow">
                    <project.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge className="enhanced-button text-white font-bold shadow-lg">Featured</Badge>
                    <Badge variant="outline" className="text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.date}
                    </Badge>
                  </div>
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
                  {project.tech.map((tech, techIndex) => <Badge key={techIndex} variant="secondary" className="bg-background/50 text-foreground border border-border/50">
                      {tech}
                    </Badge>)}
                </div>

                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-border/50"
                    onClick={() => {
                      const repoMap: {[key: string]: string} = {
                        "VoiceGuard: Jarvis-Powered GPT Voice Assistant": "https://github.com/VinayKumar2320/Voice_Assisant",
                        "Processing, visualization and application development of raw GNSS data on Android Smartphones": "https://github.com/VinayKumar2320",
                        "Drowsiness Detector": "https://github.com/VinayKumar2320/Drowsiness-Detection"
                      };
                      const repoUrl = repoMap[project.title] || "https://github.com/VinayKumar2320?tab=repositories";
                      window.open(repoUrl, '_blank');
                    }}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </Button>
                </div>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </CardContent>
            </Card>)}
        </div>

        {/* Other Projects */}
        <div className="grid gap-6">
          {projects.filter(p => !p.featured).map((project, index) => <Card key={index} className={`bg-gradient-to-r ${project.gradient} border-border/50 card-hover group`}>
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
                      <Badge variant="outline" className="text-xs mt-1">
                        <Calendar className="w-3 h-3 mr-1" />
                        {project.date}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex-1">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => <Badge key={techIndex} variant="secondary" className="bg-background/50 text-foreground border border-border/50 text-sm">
                          {tech}
                        </Badge>)}
                    </div>
                  </div>

                  <div className="flex gap-2 flex-shrink-0">
                    <Button 
                      size="sm" 
                      className="bg-primary hover:bg-primary/90"
                      onClick={() => {
                        const repoMap: {[key: string]: string} = {
                          "Travel Planning App (Plavel)": "https://github.com/VinayKumar2320",
                          "Faculty Management System": "https://github.com/VinayKumar2320/Faculty-Management-System-using-MySql-and-Xampp",
                          "Productivity Tracker (ProTrack)": "https://github.com/VinayKumar2320"
                        };
                        const repoUrl = repoMap[project.title] || "https://github.com/VinayKumar2320?tab=repositories";
                        window.open(repoUrl, '_blank');
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => {
                        const repoMap: {[key: string]: string} = {
                          "Travel Planning App (Plavel)": "https://github.com/VinayKumar2320",
                          "Faculty Management System": "https://github.com/VinayKumar2320/Faculty-Management-System-using-MySql-and-Xampp",
                          "Productivity Tracker (ProTrack)": "https://github.com/VinayKumar2320"
                        };
                        const repoUrl = repoMap[project.title] || "https://github.com/VinayKumar2320?tab=repositories";
                        window.open(repoUrl, '_blank');
                      }}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Projects;