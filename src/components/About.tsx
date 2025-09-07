import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, GraduationCap, Target } from "lucide-react";

const About = () => {
  const achievements = [
    "Smart India Hackathon 2023 Finalist",
    "IEEE Hackathon Winner",
    "IIT Bombay Competition Recognition",
    "GPA 8.69/10 in AI & ML"
  ];

  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 hero-text">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about creating intelligent systems that solve real-world problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6 animate-fade-in">
            <Card className="bg-card border-border/50 card-hover">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-semibold">Education Journey</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-primary">Master of Science in Computer Science</h4>
                    <p className="text-muted-foreground">New York University (2025–2027)</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary">B.E. in Artificial Intelligence & Machine Learning</h4>
                    <p className="text-muted-foreground">BNM Institute of Technology, Bangalore (2021–2025)</p>
                    <Badge variant="secondary" className="mt-2">GPA: 8.69/10</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 card-hover">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-semibold">Passion & Focus</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in deep learning, computer vision, and intelligent systems. 
                  My work focuses on building AI solutions that make a real impact, from 
                  medical image processing to fraud detection systems. I believe in the 
                  power of artificial intelligence to transform industries and improve lives.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Achievements Section */}
          <div className="animate-slide-in">
            <Card className="bg-gradient-to-br from-primary/10 to-blue-500/10 border-primary/20 card-hover">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <Trophy className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-semibold">Key Achievements</h3>
                </div>
                
                <div className="grid gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors"
                    >
                      <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-foreground font-medium">{achievement}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-background/50 rounded-lg border border-border/50">
                  <h4 className="text-lg font-semibold mb-4 text-primary">Current Status</h4>
                  <p className="text-muted-foreground">
                    Currently pursuing my Master's at NYU while working as a Software Developer 
                    Intern at Healium Intelliscan Corp, where I'm building cutting-edge medical 
                    image processing pipelines.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;