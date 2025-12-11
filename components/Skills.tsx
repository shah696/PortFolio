"use client";
import Image from "next/image";
import React from "react";

export default function Skills() {
  const frontend = [
    "HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS"
  ];
  const backend = [
    "Node.js", "Express.js", "Next.js", "NestJS"
  ];
  const database = [
    "MongoDB", "PostgreSQL", "Prisma ORM", "GraphQL"
  ];

  return (
    <main className="min-h-screen text-slate-200 px-8 py-24">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
    {/* Skills Section (Left) */}
    <div className="space-y-12 animate-fade-in-up">
      {/* Title */}
      <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-purple-600 mb-10 text-center md:text-left">
        My Skills
      </h1>

      {/* Frontend Skills */}
      <section>
        <h2 className="text-2xl font-bold text-cyan-300 mb-6 flex items-center gap-2">
           Frontend Development
        </h2>
        <div className="flex flex-wrap gap-4">
          {frontend.map((skill, idx) => (
            <span
              key={idx}
              className="bg-slate-900/50 px-5 py-3 rounded-xl border border-slate-700 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Backend Skills */}
      <section>
        <h2 className="text-2xl font-bold text-purple-300 mb-6 flex items-center gap-2">
           Backend Development
        </h2>
        <div className="flex flex-wrap gap-4">
          {backend.map((skill, idx) => (
            <span
              key={idx}
              className="bg-slate-900/50 px-5 py-3 rounded-xl border border-slate-700 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(147,51,234,0.3)] transition-all duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Database Skills */}
      <section>
        <h2 className="text-2xl font-bold text-blue-300 mb-6 flex items-center gap-2">
           Database & Tools
        </h2>
        <div className="flex flex-wrap gap-4">
          {database.map((skill, idx) => (
            <span
              key={idx}
              className="bg-slate-900/50 px-5 py-3 rounded-xl border border-slate-700 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>

    {/* Image Section (Right) */}
    <div className="flex justify-center md:sticky md:top-32 animate-float">
       <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <Image
              src="/icons/profile3.jpg"
              alt="My Profile"
              width={350} 
              height={350} 
              className="relative rounded-2xl shadow-xl border-2 border-slate-800 bg-slate-900 object-cover"
            />
       </div>
    </div>
  </div>
</main>

  );
}
