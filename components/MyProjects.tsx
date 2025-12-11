"use client";
import React from "react";

const projectsData = [
  {
    role: "Full Stack Developer",
    period: "2023 - Present",
    description: [
      "Zoo (US-based App) - Backend CRUD Operations: Worked on backend development for a US-based Zoo management system. Created full CRUD (Create, Read, Update, Delete) APIs to manage animals, staff, and enclosure data using RESTful standards and database integration.",
      "Created a Facebook-like application with features such as newsfeed, user posts, and profile pages."
    ],
    skills: [
      "HTML/CSS", "JavaScript", "React.js", "Bootstrap", "TailwindCSS",
      "Redux", "Next.js", "Express.js", "Node.js", "Mongoose",
      "REST APIs", "Nest.js", "GraphQL", "MongoDB", "PostgreSQL"
    ]
  },
  {
    role: "Frontend Developer",
    period: "2021 - Present",
    description: [
      "Developed a clean and user-friendly To-Do application allowing users to add, update, and delete tasks. Focused on intuitive UI and smooth state management.",
      "Developed a standard calculator using HTML, CSS, and JavaScript with standard arithmetic operations and a clean, user-friendly interface.",
      "Restaurant App with Product Lists Using React with Routing combination.",
      "Restaurant Bill Creating App and set Dynamic products and also get print of the bill"
    ],
    skills: ["HTML/CSS", "JavaScript", "React.js","Next.js", "Bootstrap", "TailwindCSS", "Redux"]
  }
];

export default function Projects() {
  return (
    <main className="min-h-screen text-slate-200 px-6 py-24">
      <div className="max-w-6xl mx-auto">
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
