import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-zinc-50 to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-zinc-200/50 bg-white/80 backdrop-blur-md dark:border-zinc-800/50 dark:bg-zinc-950/80">
        <div className="mx-auto max-w-7xl px-6 py-4 sm:px-8">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold" style={{ color: "#739aff" }}>
              Adora
            </div>
            <div className="hidden gap-8 sm:flex">
              <a href="#about" className="text-sm font-medium text-zinc-600 transition-colors hover:text-[#739aff] dark:text-zinc-400">
                About
              </a>
              <a href="#skills" className="text-sm font-medium text-zinc-600 transition-colors hover:text-[#739aff] dark:text-zinc-400">
                Skills
              </a>
              <a href="#projects" className="text-sm font-medium text-zinc-600 transition-colors hover:text-[#739aff] dark:text-zinc-400">
                Projects
              </a>
              <a href="#contact" className="text-sm font-medium text-zinc-600 transition-colors hover:text-[#739aff] dark:text-zinc-400">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-32">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="inline-block rounded-full bg-[#739aff]/10 px-4 py-2 text-sm font-medium" style={{ color: "#739aff" }}>
              Fintech Developer
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl">
              Hi, I'm <span style={{ color: "#739aff" }}>Adora</span>
            </h1>
            <h2 className="text-2xl font-semibold leading-tight tracking-tight text-zinc-700 dark:text-zinc-300 sm:text-3xl">
              Building the Future of Financial Technology
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Specializing in modern fintech solutions, payment systems, and financial applications. 
              Passionate about creating secure, scalable, and user-friendly financial products.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-lg px-6 font-medium text-white transition-all hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: "#739aff" }}
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-lg border-2 px-6 font-medium transition-all hover:scale-105"
                style={{ borderColor: "#739aff", color: "#739aff" }}
              >
                Get in Touch
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative background circle */}
              <div className="absolute inset-0 rounded-full" style={{ backgroundColor: "#739aff", opacity: 0.1 }}></div>
              {/* Profile picture container */}
              <div className="relative rounded-full p-2" style={{ backgroundColor: "#739aff" }}>
                <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white bg-zinc-200 dark:bg-zinc-800 sm:h-80 sm:w-80">
                  <Image
                    src="/profile.jpg"
                    alt="Adora"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
            Technical Expertise
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Technologies and tools I work with
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {[
            "React", "Next.js", "TypeScript", "Node.js", "Python", "Blockchain",
            "Payment APIs", "AWS", "Docker", "PostgreSQL", "MongoDB", "GraphQL"
          ].map((skill) => (
            <div
              key={skill}
              className="group rounded-xl border border-zinc-200 bg-white p-6 text-center transition-all hover:scale-105 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="text-sm font-semibold text-zinc-700 group-hover:text-[#739aff] dark:text-zinc-300">
                {skill}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Recent fintech solutions and applications
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
              className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:scale-105 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="mb-4 h-48 rounded-lg bg-gradient-to-br from-[#739aff] to-[#5a7fff] opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-3 py-1 text-xs font-medium"
                    style={{ backgroundColor: "#739aff", color: "white", opacity: 0.9 }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 text-center dark:border-zinc-800 dark:bg-zinc-900 sm:p-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
            Let's Work Together
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Interested in collaborating on a fintech project? Get in touch!
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:hello@example.com"
              className="inline-flex h-12 items-center justify-center rounded-lg px-6 font-medium text-white transition-all hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: "#739aff" }}
            >
              Send Email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-lg border-2 px-6 font-medium transition-all hover:scale-105"
              style={{ borderColor: "#739aff", color: "#739aff" }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-zinc-600 dark:text-zinc-400 sm:px-8">
          <p>© 2024 Adora. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
