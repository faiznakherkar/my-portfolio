

                        // {exp.achievements.map((ac
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const experiences = [
    {
      period: "2022 - Present",
      title: "Senior Full-Stack Developer",
      company: "TechVision Solutions",
      location: "San Francisco, CA",
      description: "Leading development of enterprise-scale applications serving 100k+ users. Architected microservices infrastructure reducing response times by 40%. Mentored junior developers and established coding standards.",
      achievements: [
        "Reduced API response times by 40% through optimization",
        "Led team of 6 developers on flagship product",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Designed and built real-time analytics dashboard"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
    },
    {
      period: "2020 - 2022",
      title: "Full-Stack Developer",
      company: "StartupLab Inc.",
      location: "Austin, TX",
      description: "Developed MVP for fintech startup from concept to production. Built scalable backend APIs and responsive frontend interfaces. Integrated third-party payment systems and implemented security best practices.",
      achievements: [
        "Built complete fintech platform from scratch",
        "Integrated Stripe and Plaid APIs for payments",
        "Implemented OAuth 2.0 authentication system",
        "Achieved 99.9% uptime in production"
      ],
      technologies: ["Vue.js", "Express.js", "MongoDB", "Stripe", "JWT"]
    },
    {
      period: "2019 - 2020",
      title: "Frontend Developer",
      company: "Digital Creative Agency",
      location: "Remote",
      description: "Created responsive web applications for diverse clients ranging from e-commerce to portfolio sites. Collaborated with design team to implement pixel-perfect UIs with smooth animations and interactions.",
      achievements: [
        "Delivered 25+ client projects on time",
        "Improved website performance by 50% on average",
        "Established component library for team efficiency",
        "Mentored 3 junior developers"
      ],
      technologies: ["React", "SCSS", "Webpack", "Figma", "PHP"]
    },
    {
      period: "2018 - 2019",
      title: "Junior Web Developer",
      company: "Local Tech Solutions",
      location: "Denver, CO",
      description: "Started career building small business websites and learning full-stack development fundamentals. Gained experience with various CMS platforms and e-commerce solutions.",
      achievements: [
        "Built 15+ WordPress and custom websites",
        "Learned modern JavaScript frameworks",
        "Implemented SEO best practices",
        "Provided technical support and training"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "WordPress", "MySQL"]
    }
  ];

  return (
    <section id="experience" className="py-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto section-padding">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Professional Journey
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Building innovative solutions and growing expertise across diverse technical challenges
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Animated Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-slate-600">
            <motion.div
              className="w-full bg-gradient-to-b from-blue-400 to-purple-400 origin-top"
              style={{ height: timelineHeight }}
            />
          </div>

          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Animated Timeline dot */}
              <motion.div 
                className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-slate-900 z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                whileHover={{ scale: 1.5 }}
              />

              {/* Content */}
              <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="glass-card p-6">
                    <motion.div 
                      className="mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                    >
                      <Badge variant="outline" className="border-blue-400 text-blue-400 mb-2">
                        {exp.period}
                      </Badge>
                      <h3 className="text-xl font-semibold text-slate-100 mb-1">
                        {exp.title}
                      </h3>
                      <div className="text-blue-400 font-medium">
                        {exp.company} • {exp.location}
                      </div>
                    </motion.div>

                    <motion.p 
                      className="text-slate-300 text-sm mb-4 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                    >
                      {exp.description}
                    </motion.p>

                    <motion.div 
                      className="mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    >
                      <h4 className="text-sm font-semibold text-slate-200 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">hievement, achievementIndex) => (
                          <motion.li 
                            key={achievementIndex} 
                            className="text-slate-300 text-sm flex items-start gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.3, 
                              delay: index * 0.2 + 0.4 + achievementIndex * 0.1 
                            }}
                          >
                            <motion.span 
                              className="text-blue-400 text-xs mt-1"
                              whileHover={{ scale: 1.2 }}
                            >
                              ▶
                            </motion.span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div 
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                    >
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.2, 
                            delay: index * 0.2 + 0.6 + techIndex * 0.05 
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge variant="secondary" className="bg-slate-700 text-slate-300 text-xs">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
