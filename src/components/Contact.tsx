import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";
const Contact = () => {
  const contactInfo = [{
    icon: Mail,
    label: "Email",
    value: "vinaykumarmd02@gmail.com",
    href: "mailto:vinaykumarmd02@gmail.com"
  }, {
    icon: Phone,
    label: "Phone",
    value: "+1 (347) 940-9376",
    href: "tel:+13479409376"
  }, {
    icon: MapPin,
    label: "Location",
    value: "Brooklyn, United States",
    href: null
  }];
  const socialLinks = [{
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vinay-kumar-md-9196711b8/",
    color: "hover:text-blue-400"
  }, {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/VinayKumar2320?tab=repositories",
    color: "hover:text-gray-400"
  }, {
    icon: ExternalLink,
    label: "ResearchGate",
    href: "https://www.researchgate.net/profile/Vinay-Kumar-412?ev=prf_overview",
    color: "hover:text-teal-400"
  }, {
    icon: ExternalLink,
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=lX3caZQAAAAJ&hl=en&authuser=2",
    color: "hover:text-red-400"
  }];
  return (
    <section id="contact" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 hero-text">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on innovative AI projects or discuss opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-card border-border/50 card-hover">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-primary">Get In Touch</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    I'm always interested in discussing new opportunities, innovative projects, 
                    or collaborations in AI and machine learning. Feel free to reach out!
                  </p>
                  
                  <div className="space-y-6">
                    {contactInfo.map((contact, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 group border border-border/30 hover:border-primary/30">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <contact.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{contact.label}</p>
                          {contact.href ? (
                            <a href={contact.href} className="text-muted-foreground hover:text-primary transition-colors">
                              {contact.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{contact.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-gradient-to-r from-primary/10 to-blue-500/10 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Quick Actions</h3>
                  <div className="space-y-4">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => window.open('mailto:vinaykumarmd02@gmail.com', '_blank')}>
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </Button>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => window.open('tel:+13479409376', '_blank')}>
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Links & Professional Profiles */}
            <div className="space-y-8">
              <Card className="bg-card border-border/50 card-hover">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-primary">Professional Profiles</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Connect with me on various platforms to see my work, research, and professional updates.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 group border border-border/50 hover:border-primary/50 ${social.color}`}>
                        <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-current transition-colors" />
                        <span className="font-medium">{social.label}</span>
                      </a>)}
                  </div>
                </CardContent>
              </Card>

              {/* Current Status */}
              <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4 text-green-400">Current Availability</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-medium">Open to Opportunities</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Currently seeking full-time opportunities in AI/ML engineering, 
                    data science, and research positions starting Summer 2027.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;