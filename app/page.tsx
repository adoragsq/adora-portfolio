"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);

  useEffect(() => {
    const observers = timelineRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }
          });
        },
        { threshold: 0.2, rootMargin: "-50px" }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const timelineItems = [
    {
      icon: "🎓",
      title: "University",
      subtitle: "Singapore Institute of Technology",
      description: "Bachelor of Science in Applied Computing (FinTech)",
      period: "2025 - 2028",
      color: "from-[#739aff] to-[#8ba5ff]",
      bgColor: "bg-[#739aff]/10",
    },
    {
      icon: "📚",
      title: "Polytechnic",
      subtitle: "Ngee Ann Polytechnic",
      description: "Diploma in Banking and Finance",
      period: "2022 - 2024",
      color: "from-[#9bb0ff] to-[#b3c5ff]",
      bgColor: "bg-[#9bb0ff]/10",
    },
    {
      icon: "💼",
      title: "Projects",
      subtitle: "FinTech Solutions",
      description: "Building innovative financial technology applications",
      period: "Ongoing",
      color: "from-[#b3c5ff] to-[#cbd5ff]",
      bgColor: "bg-[#b3c5ff]/10",
    },
    {
      icon: "🏆",
      title: "Achievements",
      subtitle: "Milestones & Recognition",
      description: "Celebrating growth and accomplishments in fintech",
      period: "2024",
      color: "from-[#cbd5ff] to-[#e3e9ff]",
      bgColor: "bg-[#cbd5ff]/10",
    },
  ];
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Navigation - Apple Style */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl dark:bg-black/80 animate-fade-in">
        <div className="mx-auto max-w-[980px] px-8">
          <div className="flex h-12 items-center justify-between">
            <div className="text-lg font-semibold tracking-tight transition-smooth hover:opacity-80" style={{ color: "#739aff" }}>
              Adora
            </div>
            <div className="hidden gap-8 sm:flex">
              <a href="#about" className="text-sm font-normal text-zinc-600 transition-all duration-300 hover:text-zinc-900 hover:scale-105 dark:text-zinc-400 dark:hover:text-zinc-100">
                About
              </a>
              <a href="#skills" className="text-sm font-normal text-zinc-600 transition-all duration-300 hover:text-zinc-900 hover:scale-105 dark:text-zinc-400 dark:hover:text-zinc-100">
                Skills
              </a>
              <a href="#projects" className="text-sm font-normal text-zinc-600 transition-all duration-300 hover:text-zinc-900 hover:scale-105 dark:text-zinc-400 dark:hover:text-zinc-100">
                Projects
              </a>
              <a href="#contact" className="text-sm font-normal text-zinc-600 transition-all duration-300 hover:text-zinc-900 hover:scale-105 dark:text-zinc-400 dark:hover:text-zinc-100">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Apple Style */}
      <section className="mx-auto max-w-[980px] px-8 pt-32 pb-24 text-center">
        <div className="space-y-8">
          <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-900 sm:h-80 sm:w-80 animate-scale-in transition-smooth hover:scale-105">
        <Image
              src="/profile.jpg"
              alt="Adora"
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
          priority
        />
          </div>
          <h1 className="text-6xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-7xl md:text-8xl animate-fade-in-up animate-delay-200">
            Hi, I'm <span className="transition-smooth hover:opacity-80" style={{ color: "#739aff" }}>Adora</span>
          </h1>
          <h2 className="text-2xl font-normal text-zinc-600 dark:text-zinc-400 sm:text-3xl md:text-4xl animate-fade-in-up animate-delay-300">
            Building the Future of Financial Technology
          </h2>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section id="about" className="border-t border-zinc-200 bg-gradient-to-b from-white to-zinc-50/50 dark:border-zinc-800 dark:from-black dark:to-zinc-950/50">
        <div className="mx-auto max-w-[980px] px-8 py-24">
          <h2 className="mb-20 text-center text-5xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
            My Journey
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#739aff]/30 via-[#9bb0ff]/30 to-[#cbd5ff]/30 dark:from-[#739aff]/20 dark:via-[#9bb0ff]/20 dark:to-[#cbd5ff]/20 sm:left-1/2 sm:-translate-x-0.5"></div>
            
            <div className="space-y-16">
              {timelineItems.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    timelineRefs.current[index] = el;
                  }}
                  className={`relative flex flex-col sm:flex-row sm:items-center ${
                    index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  } gap-8 transition-all duration-1000 ease-out ${
                    visibleItems[index]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: visibleItems[index] ? "0ms" : "0ms"
                  }}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-8 top-8 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white shadow-lg dark:border-black sm:left-1/2 transition-all duration-500 ${visibleItems[index] ? "scale-125" : "scale-100"} bg-gradient-to-br ${item.color}`}>
                    <div className={`h-full w-full rounded-full bg-gradient-to-br ${item.color}`}></div>
                  </div>
                  
                  {/* Content Card */}
                  <div
                    className={`flex-1 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-xl ${item.bgColor} ${
                      index % 2 === 0 ? "sm:mr-auto sm:max-w-md" : "sm:ml-auto sm:max-w-md"
                    }`}
                  >
                    <div className="mb-4 flex items-center gap-4">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-3xl shadow-lg transition-transform duration-300 hover:scale-110`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-sm font-normal text-zinc-600 dark:text-zinc-400">
                          {item.period}
                        </p>
                      </div>
                    </div>
                    <h4 className="mb-2 text-lg font-medium text-zinc-800 dark:text-zinc-200">
                      {item.subtitle}
                    </h4>
                    <p className="text-base font-light leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Apple Style */}
      <section id="skills" className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-[980px] px-8 py-24">
          <h2 className="mb-16 text-center text-5xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-6xl animate-fade-in-up">
            Technical Expertise
          </h2>
          <p className="mb-16 text-center text-xl font-light text-zinc-600 dark:text-zinc-400 animate-fade-in-up animate-delay-100">
            Technologies and tools I work with
          </p>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
            {[
              "React", "Next.js", "TypeScript", "Node.js", "Python", "Blockchain",
              "Payment APIs", "AWS", "Docker", "PostgreSQL", "MongoDB", "GraphQL"
            ].map((skill, index) => (
              <div
                key={skill}
                className="text-center animate-fade-in-up transition-smooth hover:scale-110"
                style={{ animationDelay: `${0.2 + index * 0.05}s` }}
              >
                <div className="text-lg font-normal text-zinc-700 dark:text-zinc-300 transition-colors hover:text-[#739aff]">
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Apple Style */}
      <section id="projects" className="mx-auto max-w-[980px] px-8 py-24">
        <h2 className="mb-16 text-center text-5xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-6xl animate-fade-in-up">
          Featured Projects
        </h2>
        <p className="mb-16 text-center text-xl font-light text-zinc-600 dark:text-zinc-400 animate-fade-in-up animate-delay-100">
          Recent fintech solutions and applications
        </p>
        <div className="space-y-24">
          {[
            {
              title: "Payment Gateway Integration",
              description: "Secure payment processing system with multi-currency support and fraud detection.",
              tags: ["React", "Node.js", "Stripe API"]
            },
            {
              title: "Cryptocurrency Trading Platform",
              description: "Real-time trading dashboard with advanced charting and portfolio management.",
              tags: ["Next.js", "WebSocket", "Blockchain"]
            },
            {
              title: "Banking Mobile App",
              description: "Modern mobile banking application with biometric authentication and budgeting tools.",
              tags: ["React Native", "Firebase", "TypeScript"]
            }
          ].map((project, index) => (
            <div 
              key={index} 
              className="space-y-6 animate-fade-in-up transition-smooth hover:scale-[1.02]"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="h-96 rounded-2xl bg-gradient-to-br from-[#739aff] to-[#5a7fff] opacity-90 transition-all duration-500 hover:opacity-100 hover:shadow-2xl"></div>
              <div className="space-y-4">
                <h3 className="text-3xl font-semibold text-zinc-900 dark:text-white transition-colors hover:text-[#739aff]">
                  {project.title}
                </h3>
                <p className="text-xl font-light leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className="rounded-full px-4 py-1.5 text-sm font-normal transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      style={{ backgroundColor: "#739aff", color: "white" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section - Apple Style */}
      <section id="contact" className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-[980px] px-8 py-24">
          <h2 className="mb-16 text-center text-5xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-6xl animate-fade-in-up">
            Let's Work Together
          </h2>
          <p className="mb-12 text-center text-xl font-light text-zinc-600 dark:text-zinc-400 animate-fade-in-up animate-delay-100">
            Interested in collaborating on a fintech project? Get in touch!
          </p>
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center animate-fade-in-up animate-delay-200">
            <a
              href="mailto:hello@example.com"
              className="inline-flex h-12 items-center justify-center rounded-full px-8 text-base font-normal text-white transition-all duration-300 hover:opacity-80 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: "#739aff" }}
            >
              Send Email
          </a>
          <a
              href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 px-8 text-base font-normal text-zinc-900 transition-all duration-300 hover:bg-zinc-100 hover:scale-105 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Apple Style */}
      <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black animate-fade-in">
        <div className="mx-auto max-w-[980px] px-8 py-8 text-center text-sm font-light text-zinc-600 dark:text-zinc-400">
          <p>© 2024 Adora. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
