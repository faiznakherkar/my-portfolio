
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import AnimatedCursor from "@/components/AnimatedCursor";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollReveal from "@/components/ScrollReveal";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      <AnimatedCursor />
      <ParticleBackground />
      <Navigation />
      <Hero />
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <Projects />
      </ScrollReveal>
      <ScrollReveal>
        <Skills />
      </ScrollReveal>
      <ScrollReveal>
        <Experience />
      </ScrollReveal>
      <ScrollReveal>
        <Blog />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </div>
  );
};

export default Index;
