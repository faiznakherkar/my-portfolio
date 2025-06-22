
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20"></div>
      
      {/* Animated floating elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '-1s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto section-padding text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text">Alex Thompson</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            I build <span className="text-blue-400 font-semibold">elegant software</span> that solves real problems.
            Full-stack developer specializing in modern web technologies, AI integrations, and scalable solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
            
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
            >
              Let's Connect
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:alex@example.com"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-slate-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
