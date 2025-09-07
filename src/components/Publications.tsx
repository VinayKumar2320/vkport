import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Award, Users, Brain, Zap, Globe } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "Hierarchical Multi-Agent Deep Reinforcement Learning framework for EV charging",
      description: "Optimizing the Efficiency of Electric Car Charging Systems, achieving 30% lower waiting times, 15% higher renewable usage, and 22% reduced system latency.",
      impact: "30% lower waiting times, 15% higher renewable usage",
      type: "Research Paper",
      icon: Zap,
      gradient: "from-green-500/20 to-emerald-500/20",
      featured: true
    },
    {
      title: "Precision Seeding Robot integrating GPS, computer vision, and AI",
      description: "Co-authored publication achieving 30.77% higher maize yield, 28.57% better seed depth accuracy, 33.33% improved spacing, and 25% reduced resource usage.",
      impact: "30.77% higher maize yield, 25% reduced resource usage",
      type: "Research Paper",
      icon: Globe,
      gradient: "from-blue-500/20 to-cyan-500/20",
      featured: true
    },
    {
      title: "AI and IoT-Based Sprinkler for Automated Agricultural Irrigation",
      description: "Co-inventor and patent submission focusing on innovative design and automation to enhance sustainable water usage.",
      impact: "Patent Submission",
      type: "Patent",
      icon: Award,
      gradient: "from-purple-500/20 to-pink-500/20",
      featured: true
    },
    {
      title: "Inverse Recipe Generation and Food Quality Detection",
      description: "Dr. Mahanthesha U, Vinay Kumar, Suzane Fernandes, Shri Ranjani S M & Shrividya K P (2023). YMER Journal, 23(5).",
      impact: "YMER Journal Publication",
      type: "Journal Article",
      icon: BookOpen,
      gradient: "from-orange-500/20 to-red-500/20",
      featured: false
    },
    {
      title: "Enhancing Human-Computer Interaction: Integrating Voice Assistants and Gesture Recognition",
      description: "Vinay Kumar, Ankith H Bharadwaj, Mahanthesha U. (2024). Tuijin Jishu/Journal of Propulsion Technology, 45(2).",
      impact: "Journal of Propulsion Technology",
      type: "Journal Article",
      icon: Brain,
      gradient: "from-indigo-500/20 to-purple-500/20",
      featured: false
    },
    {
      title: "A Hybrid Brain-Computer Interface and Computer Vision-Based Human-Vehicle Collaborative Simulated Driving System",
      description: "Vinay Kumar, Shri Ranjani S M, Milan Srinivas, Shravya Bhat. IJIRCCE, Vol. 12, Issue 8, August 2024.",
      impact: "IJIRCCE Publication",
      type: "Journal Article",
      icon: Users,
      gradient: "from-teal-500/20 to-green-500/20",
      featured: false
    },
    {
      title: "A Hybrid Reference Architecture Enabling Quantum Computing Capabilities for Cloud Utilization",
      description: "Co-author publication in International Advanced Research Journal in Science, Engineering and Technology (IARJSET), Vol. 11, Issue 8.",
      impact: "IARJSET Publication",
      type: "Journal Article",
      icon: Globe,
      gradient: "from-cyan-500/20 to-blue-500/20",
      featured: false
    },
    {
      title: "Improving LLM-based Robot Control via Human-Robot Cooperation",
      description: "Co-author publication in International Journal of Innovative Research in Computer and Communication Engineering (IJIRCCE), Volume 12, Issue 8.",
      impact: "IJIRCCE Publication",
      type: "Journal Article",
      icon: Brain,
      gradient: "from-violet-500/20 to-purple-500/20",
      featured: false
    },
    {
      title: "Breast Cancer Histopathology Classification Using Levenberg–Marquardt Optimised Deep Neural Networks",
      description: "Co-author publication in International Journal of Advanced Research in Computer and Communication Engineering (IJARCCE), Vol.13, Issue 8.",
      impact: "IJARCCE Publication",
      type: "Journal Article",
      icon: Award,
      gradient: "from-rose-500/20 to-pink-500/20",
      featured: false
    }
  ];

  return (
    <section id="publications" className="py-20 gradient-bg relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-primary/8 rounded-full blur-3xl floating-animation" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/6 rounded-full blur-3xl floating-animation" style={{
        animationDelay: '3s'
      }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 hero-text text-shadow-soft">Research Publications</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-medium">
            Cutting-edge <span className="text-primary font-bold">research contributions</span> in AI, IoT, and emerging technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Featured Publications */}
          {publications.filter(p => p.featured).map((publication, index) => (
            <Card key={index} className={`glass-effect morphing-border bg-gradient-to-br ${publication.gradient} card-hover relative overflow-hidden group`} style={{
              animationDelay: `${index * 0.2}s`
            }}>
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-blue-500/30 backdrop-blur-sm flex items-center justify-center pulse-glow">
                    <publication.icon className="w-7 h-7 text-primary" />
                  </div>
                  <Badge className="enhanced-button text-white font-bold shadow-lg">
                    {publication.type}
                  </Badge>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {publication.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {publication.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <Award className="w-4 h-4" />
                    <span>{publication.impact}</span>
                  </div>
                </div>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Publications */}
        <div className="grid gap-6">
          {publications.filter(p => !p.featured).map((publication, index) => (
            <Card key={index} className={`bg-gradient-to-r ${publication.gradient} border-border/50 card-hover group`}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-background/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <publication.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {publication.title}
                      </h3>
                      <p className="text-primary font-semibold">{publication.impact}</p>
                    </div>
                  </div>

                  <div className="flex-1">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {publication.description}
                    </p>
                    <Badge variant="secondary" className="bg-background/50 text-foreground border border-border/50">
                      {publication.type}
                    </Badge>
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

export default Publications;
