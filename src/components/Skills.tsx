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
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 hero-text">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Expertise across the full AI/ML development stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-card border-border/50 card-hover group relative overflow-hidden"
            >
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="w-full justify-center py-2 bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-primary to-transparent pointer-events-none"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Core Competencies</h3>
              <p className="text-muted-foreground leading-relaxed">
                Specialized in <span className="text-primary font-semibold">Deep Learning</span>, 
                <span className="text-primary font-semibold"> Computer Vision</span>, and 
                <span className="text-primary font-semibold"> Machine Learning Operations</span>. 
                Experienced in building end-to-end AI solutions from research and development 
                to production deployment in cloud environments.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;