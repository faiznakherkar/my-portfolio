
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

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
    "Git", "VS Code", "Figma", "Postman", "Jest", "Webpack", 
    "ESLint", "Prettier", "Jira", "Slack", "Linear", "Notion"
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive technical skillset built through years of hands-on experience
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-semibold text-slate-100">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-slate-700"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <Card className="glass-card p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center text-blue-400">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <span 
                key={index}
                className="bg-slate-700/50 text-slate-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-600/20 hover:text-blue-400 transition-all duration-200 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
