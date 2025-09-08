import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, TrendingUp, Zap, Shield, Car, Users, MapPin, Eye, Calendar, Star, GitBranch, Code2 } from "lucide-react";
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
  return (
    <section id="projects" className="py-20 gradient-bg relative overflow-hidden">
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
          {projects.filter(p => p.featured).map((project, index) => (
            <Card key={index} className={`glass-effect morphing-border bg-gradient-to-br ${project.gradient} card-hover relative overflow-hidden group border-2 border-primary/10 hover:border-primary/30 shadow-xl hover:shadow-2xl`} style={{
              animationDelay: `${index * 0.2}s`
            }}>
              {/* Floating background elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-primary/5 rounded-full blur-xl"></div>
              <div className="absolute bottom-6 left-6 w-16 h-16 bg-blue-500/5 rounded-full blur-lg"></div>
              
              <CardContent className="p-8 relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-blue-500/20 backdrop-blur-sm flex items-center justify-center pulse-glow border border-primary/20 shadow-lg">
                      <project.icon className="w-8 h-8 text-primary drop-shadow-sm" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                      <Star className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge className="enhanced-button text-white font-bold shadow-lg bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                    <Badge variant="outline" className="text-xs bg-background/80 backdrop-blur-sm border-border/50">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.date}
                    </Badge>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-all duration-300 leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-blue-500/5 border border-primary/10">
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">{project.impact}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-background/60 text-foreground border border-border/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-xs">
                      <Code2 className="w-3 h-3 mr-1" />
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="enhanced-button bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
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
                    View Code
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50"
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
                    <GitBranch className="w-4 h-4 mr-2" />
                    Details
                  </Button>
                </div>

                {/* Enhanced glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/8 via-transparent to-blue-500/8 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none rounded-lg"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <Card key={index} className={`bg-gradient-to-r ${project.gradient} border-border/50 card-hover group`}>
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;