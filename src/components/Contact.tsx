
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-6 text-slate-100">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-slate-800/50 border-slate-600 text-slate-100 placeholder-slate-400"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-slate-800/50 border-slate-600 text-slate-100 placeholder-slate-400"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-slate-800/50 border-slate-600 text-slate-100 placeholder-slate-400"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-slate-800/50 border-slate-600 text-slate-100 placeholder-slate-400 resize-none"
                  placeholder="Tell me about your project or what you'd like to discuss..."
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg transition-all duration-300 hover:scale-105"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-slate-100">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-200">Email</h4>
                    <a href="mailto:alex@example.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                      alex@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                    <Github className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-200">GitHub</h4>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-blue-400 transition-colors"
                    >
                      @alexthompson
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-200">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-blue-400 transition-colors"
                    >
                      /in/alexthompson
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-4 text-slate-100">Current Status</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-slate-300">Available for new projects</span>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                I'm currently accepting new freelance projects and full-time opportunities. 
                Let's discuss how we can work together to bring your ideas to life.
              </p>
              <div className="text-sm text-slate-400">
                <p>⏰ Typical response time: 24 hours</p>
                <p>🌍 Based in: San Francisco, CA (PST)</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
