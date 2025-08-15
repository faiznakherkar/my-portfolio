
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const About = () => {
  {/*Adding functionality to implement the downloadCV functionality*/} 

const downloadCV = () => {
  const link = document.createElement("a");
  link.href = "/Faiz-Nakherkar-CV.pdf";
  link.download = "Faiz-Nakherkar-CV.pdf";
  link.click();
};

  return (
    <section id="about" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Passionate about creating innovative solutions that bridge technology and human needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">My Journey</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
               Over 4 years of engineering background,, I've worked on variety of academics and real-world
                projects that span full-stack web development, machine learning and cloud technologies. My focus 
                has been on building scalable, intuitive applications that solve meaningful problems. 
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                My expertise includes modern web technologies, cloud architecture, and AI integrations. I'm 
                particularly passionate about creating solutions that not only meet technical requirements but
                also offer exceptional user experiences.
              </p>
              <p className="text-slate-300 leading-relaxed">
                When I'm not coding, you'll find me contributing to open-source projects, writing technical 
                articles, or exploring the latest developments in artificial intelligence and machine learning.
              </p>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={downloadCV}
                className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
              >
                Download CV
              </Button>
              <Button 
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 flex-1"
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Experience
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="glass-card p-6">
              <h4 className="text-lg font-semibold mb-4 text-blue-400">What I Do</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-medium text-slate-200">Full-Stack Development</h5>
                    <p className="text-sm text-slate-400">Building end-to-end web applications with modern frameworks</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-medium text-slate-200">AI Integration</h5>
                    <p className="text-sm text-slate-400">Implementing intelligent features and automation solutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-medium text-slate-200">Problem Solving</h5>
                    <p className="text-sm text-slate-400">Transforming complex challenges into elegant solutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-medium text-slate-200">Collaboration & Communication</h5>
                    <p className="text-sm text-slate-400">Contributing in team-based projects and hackathons with a focus 
                    on code, version control, and problem-solving in group settings.</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6">
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">6+</div>
                  <div className="text-sm text-slate-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">1+</div>
                  <div className="text-sm text-slate-400">Years of Focused Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">10+</div>
                  <div className="text-sm text-slate-400">Technologies Explored</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">100%</div>
                  <div className="text-sm text-slate-400">Passion for problem solving</div>
                </div>
              </div>
            </Card>   
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
