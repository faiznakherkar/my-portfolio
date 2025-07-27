import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Foodie Hands",
      description: "A web platform that connects food donors with NGOs and volunteers, enabling real-time pickup requests, location tracking, and smart waste management.",
      image: "/images/foodie-hands-image.webp",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB","Tailwind CSS"],
      category: "Full-Stack",
      github: "https://github.com/faiznakherkar/Foodie-Hands",
      demo: "https://foodie-hands.vercel.app/"
    },
    {
      title: "SmartCity Vista",
      description: "A digital civic platform connecting citizens with local authorities for location-based issue reporting, real-time updates, community voting, and an admin dashboard to efficiently track and resolve public concerns.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB","Tailwind CSS"],
      category: "AI",
      github: "https://github.com/rajdesai17/smartcity-vista",
      demo: "https://smartcity-vista.vercel.app/"
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
      title: "Food Corner Website",
      description: "Responsive food ordering platform with dynamic menu, customer reviews, and shopping cart to streamline the food ordering experience.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      technologies: ["HTML", "CSS", "PHP", "Bootstrap","MySQL"],
      category: "Full-Stack",
      // github: "https://github.com",
      // demo: "https://demo.com"
    },
    {
      title: "E-Commerce Website",
      description: "Custom-built e-commerce platform featuring product catalog, account management, shopping cart, and seamless checkout experience.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      technologies: ["HTML", "CSS", "PHP", "Bootstrap","MySQL"],
      category: "Full-Stack",
      // github: "https://github.com",
      // demo: "https://demo.com"
    }
  ];
  
   const filters = ["All", "Full-Stack", "Frontend", "Backend", "AI", "IoT", "Blockchain"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return  (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto section-padding">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A showcase of innovative solutions and technical achievements
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Buttons */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter, index) => (
              <motion.div
                key={filter}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
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
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${activeFilter}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <Card className="glass-card overflow-hidden group relative">
                  <div className="relative overflow-hidden">
                    <motion.img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Tech stack overlay */}
                    <AnimatePresence>
                      {hoveredProject === index && (
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="text-center">
                            <p className="text-white font-semibold mb-2">Tech Stack</p>
                            <div className="flex flex-wrap justify-center gap-1">
                              {project.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary" className="bg-blue-600 text-white text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <motion.div 
                    className="p-6"
                    animate={{ 
                      backgroundColor: hoveredProject === index ? "rgba(59, 130, 246, 0.05)" : "transparent" 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.h3 
                      className="text-xl font-semibold mb-3 text-slate-100 transition-colors"
                      animate={{ 
                        color: hoveredProject === index ? "#60a5fa" : "#f1f5f9" 
                      }}
                    >
                      {project.title}
                    </motion.h3>
                    
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
                      <motion.a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.a>
                      
                      <motion.a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Live Demo
                        <ArrowRight className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
