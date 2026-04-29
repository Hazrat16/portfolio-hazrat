const experiences = [
  {
    title: "Software Engineer",
    company: "SmartCrowd",
    period: "Mar 2025 - Present",
    location: "Dubai, UAE (Remote)",
    points: [
      "Promoted for driving frontend architecture improvements and leading cross-functional feature delivery.",
      "Improved load speed and reduced bundle size with code-splitting and lazy loading.",
      "Standardized reusable components and strengthened design system consistency.",
      "Integrated LogRocket to track UI quality and frontend performance metrics.",
    ],
  },
  {
    title: "Junior Software Engineer",
    company: "SmartCrowd",
    period: "Dec 2022 - Feb 2025",
    location: "Dubai, UAE (Remote)",
    points: [
      "Built and modernized FinTech frontend features with React, Redux, and Styled-components.",
      "Led responsive UI work across desktop, tablet, and mobile.",
      "Delivered multilingual support with RTL layouts for Arabic users.",
      "Owned frontend delivery for key milestones, including Share Transfer Facility features.",
    ],
  },
];

const projects = [
  {
    name: "SmartCrowd",
    description:
      "FinTech platform frontend focused on performance, multilingual UX, and scalable UI architecture.",
    stack: ["React", "Redux", "Styled-components"],
  },
  {
    name: "Urban Eats",
    description:
      "Full-stack restaurant platform with CI/CD automation that reduced deployment time and manual errors.",
    stack: ["React", "Node.js", "GitHub Actions", "Docker"],
  },
  {
    name: "SmartJob Hub",
    description:
      "Job platform for seekers and employers with search, profile management, applications, and analytics.",
    stack: ["Next.js", "Express.js", "MongoDB"],
  },
  {
    name: "TalkSphere",
    description:
      "Real-time chat system for SmartJob Hub using Socket.IO with Next.js frontend and TypeScript backend.",
    stack: ["Next.js", "TypeScript", "Socket.IO", "Tailwind CSS"],
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux Toolkit",
  "Tailwind CSS",
  "Styled-components",
  "Chakra UI",
  "Material UI",
  "Express.js",
  "MongoDB",
  "GitHub Actions",
];

const quickFacts = [
  "Frontend architecture for production FinTech products",
  "Full-stack work with Node.js, Express, REST APIs, and real-time apps",
  "Growing into backend engineering, DevOps, and AI-assisted workflows",
];

const techCards = [
  {
    icon: "frontend",
    title: "Frontend Engineering",
    description: "UI architecture, performance, and reusable component systems.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Styled-components",
      "Chakra UI",
      "Material UI",
      "Ant design",
      "Bootstrap",
    ],
  },
  {
    icon: "backend",
    title: "Backend",
    description: "REST APIs, server-side logic, and real-time communication.",
    tags: ["Node.js", "Express.js", "TypeScript", "MongoDB", "Socket.IO"],
  },
  {
    icon: "database",
    title: "Databases",
    description: "Data modeling and persistent storage for production apps.",
    tags: ["MongoDB"],
  },
  {
    icon: "devops",
    title: "DevOps & CI/CD",
    description: "Automation, continuous integration, and safe deployments.",
    tags: ["GitHub Actions", "CI/CD Pipelines", "Docker"],
  },
  {
    icon: "tools",
    title: "Tools",
    description: "Developer tooling that keeps delivery fast and consistent.",
    tags: ["Git", "GitHub", "VS Code", "Cursor", "LogRocket"],
  },
];

const techCardIcons = {
  frontend: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M8.5 8.5L4.5 12L8.5 15.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 8.5L19.5 12L15.5 15.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 7L11 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  backend: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M7 7C7 5.34315 8.34315 4 10 4H14C15.6569 4 17 5.34315 17 7V17C17 18.6569 15.6569 20 14 20H10C8.34315 20 7 18.6569 7 17V7Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M10 8H14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10 12H14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10 16H13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  database: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <ellipse
        cx="12"
        cy="6"
        rx="8"
        ry="3"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M4 6V12C4 13.6569 7.58172 15 12 15C16.4183 15 20 13.6569 20 12V6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M4 12V18C4 19.6569 7.58172 21 12 21C16.4183 21 20 19.6569 20 18V12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  ),
  devops: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M7 10V6C7 4.89543 7.89543 4 9 4H15C16.1046 4 17 4.89543 17 6V10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8 13L12 17L16 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17V10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 20H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  tools: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M14.7 6.3C15.5 5.5 16.8 5.5 17.6 6.3C18.4 7.1 18.4 8.4 17.6 9.2L9.2 17.6C8.4 18.4 7.1 18.4 6.3 17.6C5.5 16.8 5.5 15.5 6.3 14.7L14.7 6.3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M13 7L17 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-brand-bg text-brand-text">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_45%)]" />

      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6 sm:px-10">
        <a href="#home" className="text-sm font-semibold tracking-[0.22em] text-white/85">
          SM HAZRAT ALI
        </a>
        <nav className="flex items-center gap-6 text-sm text-slate-300">
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#skills" className="transition hover:text-white">
            Skills
          </a>
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>
      </header>

      <section id="home" className="mx-auto w-full max-w-5xl px-6 pb-10 pt-6 sm:px-10">
        <div className="flex flex-col gap-6">
          <div className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200">
            Software Engineer • React • Next.js • FinTech
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] text-white sm:text-6xl">
            Building clean, fast, and scalable web experiences.
          </h1>

          <p className="max-w-2xl text-base leading-8 text-brand-muted sm:text-lg">
            I&apos;m S.M. Hazrat Ali, a software engineer with 3+ years of
            experience specializing in frontend development with React and
            Next.js, building production-grade applications with performance,
            scalability, and user experience in mind.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:hazrat17016@gmail.com"
              className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:opacity-95"
            >
              Contact
            </a>
            <a
              href="https://www.linkedin.com/in/smhazratali/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-cyan-300/40"
            >
              LinkedIn
            </a>
            <a
              href="#about"
              className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-white/90 transition hover:text-white"
            >
              Read more about my journey <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto w-full max-w-5xl px-6 py-14 sm:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="md:w-[40%]">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/80">
              About
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Product-minded frontend engineering.
            </h2>
          </div>

          <div className="md:w-[60%]">
            <p className="text-base leading-8 text-brand-muted">
              I&apos;m a software engineer currently working in a production
              FinTech environment, where I focus on scalable frontend systems,
              high-performance user interfaces, reusable UI architecture, and
              polished user experience. While frontend engineering is my core
              strength, I have also worked across the stack with Node.js and
              Express to build REST APIs and real-time applications.
            </p>
            <p className="mt-4 text-base leading-8 text-brand-muted">
              My current focus is expanding further into backend engineering and
              DevOps, including scalable system design, CI/CD pipelines, and
              infrastructure automation. I&apos;m also exploring AI-assisted
              development workflows to improve productivity and engineering
              efficiency, with the long-term goal of becoming a well-rounded
              software engineer who can contribute across the stack on complex,
              high-impact systems.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {experiences.slice(0, 2).map((job) => (
                <article
                  key={job.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-sm text-cyan-200">{job.title}</p>
                  <p className="mt-1 text-base font-semibold text-white">
                    {job.company}
                  </p>
                  <p className="mt-2 text-sm text-brand-muted">
                    {job.period} • {job.location}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-200/80">
                Focus
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-brand-muted">
                {quickFacts.map((fact) => (
                  <li key={fact}>• {fact}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="mx-auto w-full max-w-5xl px-6 py-14 sm:px-10"
      >
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/80">
          Skills & Technologies
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          What I use to build and ship.
        </h2>
        <div className="mt-8 rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {techCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[22px] border border-white/10 bg-brand-surface/40 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:border-cyan-300/30"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-brand-muted">
                      {card.description}
                    </p>
                  </div>
                  <div
                    aria-hidden
                    className="mt-1 flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200/90"
                  >
                    {
                      techCardIcons[
                        card.icon as keyof typeof techCardIcons
                      ]
                    }
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto w-full max-w-5xl px-6 py-14 sm:px-10"
      >
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/80">
          Projects
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          Featured work
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-300/35"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">
                  0{index + 1}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                  Case Study
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-white">
                {project.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-brand-muted">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer
        id="contact"
        className="mx-auto w-full max-w-5xl px-6 pb-16 sm:px-10"
      >
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/80">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Let&apos;s connect.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-brand-muted">
            I&apos;m open to frontend engineering roles and product-focused
            collaborations.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:hazrat17016@gmail.com"
              className="rounded-2xl border border-white/10 bg-slate-950/30 px-5 py-3 text-cyan-200 transition hover:border-cyan-300/40"
            >
              hazrat17016@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/smhazratali/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-slate-950/30 px-5 py-3 text-slate-200 transition hover:border-cyan-300/40"
            >
              LinkedIn
            </a>
          </div>

          <p className="mt-8 text-xs text-slate-500">
            © {new Date().getFullYear()} S.M. Hazrat Ali
          </p>
        </div>
      </footer>
    </main>
  );
}
