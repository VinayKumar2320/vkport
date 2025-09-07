import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "C", "Java", "JavaScript", "HTML/CSS", "React Native", "Apex"]
    },
    {
      icon: Cpu,
      title: "AI/ML Frameworks",
      skills: ["PyTorch", "TensorFlow", "Keras", "OpenCV", "Scikit-learn", "Pandas", "NumPy"]
    },
    {
      icon: Database,
      title: "Data & Analytics",
      skills: ["Hadoop", "JSON", "Data Visualization", "Statistical Analysis", "Deep Learning"]
    },
    {
      icon: Cloud,
      title: "Tools & Platforms",
      skills: ["Git", "AWS", "Microsoft Azure", "Docker", "Linux", "Jupyter"]
    }
  ];

  return (
    <section className="py-20 gradient-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-48 h-48 bg-primary/5 rounded-full blur-2xl floating-animation" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl floating-animation" style={{animationDelay: '3s'}} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 hero-text">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Expertise across the full AI/ML development stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="glass-effect border-primary/20 card-hover group relative overflow-hidden animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-blue-500/30 transition-all duration-300 pulse-glow">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="w-full justify-center py-2 glass-effect border-primary/10 hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default transform hover:scale-105"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Enhanced background pattern */}
                <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-primary via-blue-500 to-purple-500 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Skills Summary */}
        <div className="mt-16 text-center animate-fade-in">
          <Card className="glass-effect bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 border-primary/30 max-w-4xl mx-auto pulse-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 hero-text">Core Competencies</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Specialized in <span className="text-primary font-semibold">Deep Learning</span>, 
                <span className="text-blue-500 font-semibold"> Computer Vision</span>, and 
                <span className="text-purple-500 font-semibold"> Machine Learning Operations</span>. 
                Experienced in building end-to-end AI solutions from research and development 
                to production deployment in cloud environments.
              </p>
              
              {/* Decorative dots */}
              <div className="flex justify-center space-x-2 mt-6">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" style={{animationDelay: '0.2s'}} />
                <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" style={{animationDelay: '0.4s'}} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;