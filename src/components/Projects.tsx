
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ArrowRight } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with AI-powered recommendations, real-time inventory management, and integrated payment processing.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Full-Stack",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "AI Content Generator",
      description: "Intelligent content creation tool using GPT integration for blogs, social media, and marketing copy with custom brand voice training.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: ["Python", "React", "OpenAI", "Docker"],
      category: "AI",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Interactive dashboard for monitoring business metrics with live data visualization, custom alerts, and predictive analytics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React", "D3.js", "WebSocket", "PostgreSQL"],
      category: "Frontend",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Microservices Architecture",
      description: "Scalable backend system with containerized microservices, API gateway, service mesh, and comprehensive monitoring.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      technologies: ["Node.js", "Docker", "Kubernetes", "GraphQL"],
      category: "Backend",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Smart IoT Home System",
      description: "Complete home automation solution with mobile app, voice control integration, and machine learning-based usage optimization.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      technologies: ["React Native", "Python", "TensorFlow", "AWS"],
      category: "IoT",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Blockchain Voting Platform",
      description: "Secure, transparent voting system using blockchain technology with identity verification and real-time result tracking.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      technologies: ["Solidity", "React", "Web3.js", "Ethereum"],
      category: "Blockchain",
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  const filters = ["All", "Full-Stack", "Frontend", "Backend", "AI", "IoT", "Blockchain"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A showcase of innovative solutions and technical achievements
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={`transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "border-slate-600 text-slate-300 hover:bg-slate-800"
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="glass-card overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-slate-100 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-slate-700 text-slate-300 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                  >
                    Live Demo
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
