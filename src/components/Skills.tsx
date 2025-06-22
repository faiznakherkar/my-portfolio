
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import AnimatedSkillIcon from "./AnimatedSkillIcon";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Vue.js", level: 82 },
        { name: "HTML/CSS", level: 95 }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Python", level: 88 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "GraphQL", level: 78 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 88 },
        { name: "Kubernetes", level: 75 },
        { name: "CI/CD", level: 82 },
        { name: "Terraform", level: 70 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      skills: [
        { name: "OpenAI API", level: 90 },
        { name: "TensorFlow", level: 75 },
        { name: "Python ML", level: 80 },
        { name: "LangChain", level: 85 },
        { name: "Hugging Face", level: 72 }
      ]
    }
  ];

  const tools = [
    { name: "Git", icon: "📚" },
    { name: "VS Code", icon: "💻" },
    { name: "Figma", icon: "🎨" },
    { name: "Postman", icon: "📡" },
    { name: "Jest", icon: "🧪" },
    { name: "Webpack", icon: "📦" },
    { name: "ESLint", icon: "✅" },
    { name: "Prettier", icon: "💅" },
    { name: "Jira", icon: "📋" },
    { name: "Slack", icon: "💬" },
    { name: "Linear", icon: "📊" },
    { name: "Notion", icon: "📝" }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto section-padding">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Skills & Expertise
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive technical skillset built through years of hands-on experience
            </p>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="glass-card p-6">
                  <motion.div 
                    className="flex items-center gap-3 mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <motion.span 
                      className="text-2xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {category.icon}
                    </motion.span>
                    <h3 className="text-xl font-semibold text-slate-100">{category.title}</h3>
                  </motion.div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skillIndex} 
                        className="space-y-2"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5, 
                          delay: (index * 0.1) + (skillIndex * 0.1) 
                        }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
                          <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                        </div>
                        <div className="relative">
                          <Progress 
                            value={0} 
                            className="h-2 bg-slate-700"
                          />
                          <motion.div
                            className="absolute top-0 left-0 h-2 bg-blue-600 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 1, 
                              delay: (index * 0.1) + (skillIndex * 0.1) + 0.3,
                              ease: "easeOut"
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tools & Technologies */}
        <ScrollReveal delay={0.4}>
          <Card className="glass-card p-8">
            <motion.h3 
              className="text-2xl font-semibold mb-6 text-center text-blue-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Tools & Technologies
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {tools.map((tool, index) => (
                <AnimatedSkillIcon
                  key={tool.name}
                  icon={tool.icon}
                  name={tool.name}
                  delay={index * 0.05}
                />
              ))}
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Skills;
