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
    skills: ["HTML/CSS", "JavaScript", "React.js", "Bootstrap", "TailwindCSS", "Redux"]
  }
];

export default function Projects() {
  return (
    <main className="bg-gray-900 min-h-screen text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-12 text-center">
          My Projects & Experience
        </h1>

        {projectsData.map((project, idx) => (
          <section key={idx} className="mb-12">
            <h2 className="text-2xl font-bold text-yellow-300 mb-2">{project.role}</h2>
            <p className="text-gray-300 italic mb-4">{project.period}</p>
            <ul className="list-disc list-inside mb-4">
              {project.description.map((desc, i) => (
                <li key={i} className="mb-2">{desc}</li>
              ))}
            </ul>
            <p className="font-semibold text-yellow-300 mb-2">Skills Used:</p>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-gray-800 px-3 py-1 rounded-lg border border-yellow-400 hover:bg-yellow-400 hover:text-black transition font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
