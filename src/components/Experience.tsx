
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
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
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Professional Journey
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Building innovative solutions and growing expertise across diverse technical challenges
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}>
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-slate-900 animate-glow"></div>

              {/* Content */}
              <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <Card className="glass-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="mb-4">
                    <Badge variant="outline" className="border-blue-400 text-blue-400 mb-2">
                      {exp.period}
                    </Badge>
                    <h3 className="text-xl font-semibold text-slate-100 mb-1">
                      {exp.title}
                    </h3>
                    <div className="text-blue-400 font-medium">
                      {exp.company} • {exp.location}
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-200 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-slate-300 text-sm flex items-start gap-2">
                          <span className="text-blue-400 text-xs mt-1">▶</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-slate-700 text-slate-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
