"use client";
import React from "react";

const projectsData = [
  {
    role: "Frontend Developer — Professional Experience",
    period: "1+ Year",
    description: [
      "Built responsive, production-ready user interfaces for multiple live projects using React.js, Next.js, TypeScript, and Tailwind CSS.",
      "Integrated REST APIs with frontend applications and managed application state across complex UI flows.",
      "Implemented technical SEO for Next.js websites — sitemap generation, metadata optimization, canonical handling, robots configuration, and page indexing improvements.",
      "Optimized website performance, fixed bugs, and improved existing features in production environments.",
      "Delivered cross-browser compatible, mobile-responsive interfaces with clean, reusable, and scalable component architecture."
    ],
    skills: [
      "React.js", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs",
      "Redux", "Technical SEO", "JavaScript (ES6+)"
    ]
  },
  {
    role: "Poultry Baba",
    period: "Production Platform",
    description: [
      "Worked as the Frontend Developer on a large production platform, developing new features and integrating backend APIs.",
      "Implemented technical SEO improvements — created and optimized sitemap generation, improved page indexing, and managed metadata and canonical tags.",
      "Fixed frontend bugs and improved overall performance and user experience across the platform."
    ],
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "SEO", "JavaScript"]
  },
  {
    role: "UpInvest Website",
    period: "Web Development",
    description: [
      "Enhanced the existing UI and added new frontend features to the UpInvest website.",
      "Refactored components, fixed bugs, and improved responsiveness across devices.",
      "Optimized user experience and integrated APIs where required."
    ],
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    role: "UpInvest Application",
    period: "Web Application",
    description: [
      "Developed and modified frontend modules for the UpInvest web application.",
      "Improved application UI, enhanced responsiveness, and resolved production issues.",
      "Integrated REST APIs and improved the overall user experience."
    ],
    skills: ["React.js", "TypeScript", "Redux", "REST APIs", "Tailwind CSS"]
  },
  {
    role: "Dawson Chamber (New York)",
    period: "Law Firm Website",
    description: [
      "Developed the complete frontend for a New York law firm's website, building responsive pages from design.",
      "Created reusable React components with a clean, polished UI implementation.",
      "Optimized website performance with full mobile responsiveness and cross-browser compatibility."
    ],
    skills: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"]
  },
  {
    role: "Code Intelique",
    period: "Company Website",
    description: [
      "Developed the complete frontend for the company website with a modern UI implementation.",
      "Built reusable UI components following clean code architecture.",
      "Delivered responsive development, performance optimization, and API integration."
    ],
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"]
  }
];

export default function Projects() {
  return (
    <main className="min-h-screen text-slate-200 py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-purple-600 mb-16 text-center animate-fade-in-up">
          My Projects & Experience
        </h1>

        <div className="grid gap-8">
          {projectsData.map((project, idx) => (
            <section 
              key={idx} 
              className="glass-card p-8 rounded-2xl hover:bg-slate-900/40 transition-all duration-300 animate-fade-in-up"
              style={{animationDelay: `${idx * 0.15}s`}}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-cyan-50">{project.role}</h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mt-2"></div>
                </div>
                <span className="px-4 py-1 rounded-full bg-slate-800 text-cyan-400 text-sm font-semibold border border-slate-700">
                  {project.period}
                </span>
              </div>
              
              <ul className="space-y-3 mb-6">
                {project.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0"></span>
                    <span className="leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-slate-800 pt-6">
                <p className="font-semibold text-slate-300 mb-4 flex items-center gap-2">
                  <span className="text-purple-400">⚡</span>
                  Technologies Used:
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-700 text-cyan-300/80 text-sm hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
