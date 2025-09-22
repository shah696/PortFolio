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
    <main className="bg-gray-900 min-h-screen text-white px-8 py-16">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Skills Section (Left) */}
    <div>
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-yellow-400 mb-10 text-center md:text-left">
        My Skills
      </h1>

      {/* Frontend Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-yellow-300 mb-4">
          Frontend Development
        </h2>
        <div className="flex flex-wrap gap-4">
          {frontend.map((skill, idx) => (
            <span
              key={idx}
              className="bg-gray-800 px-5 py-2 rounded-lg border border-yellow-400 hover:bg-yellow-400 hover:text-black font-medium transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Backend Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-yellow-300 mb-4">
          Backend Development
        </h2>
        <div className="flex flex-wrap gap-4">
          {backend.map((skill, idx) => (
            <span
              key={idx}
              className="bg-gray-800 px-5 py-2 rounded-lg border border-yellow-400 hover:bg-yellow-400 hover:text-black font-medium transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Database Skills */}
      <section>
        <h2 className="text-2xl font-bold text-yellow-300 mb-4">
          Database & Tools
        </h2>
        <div className="flex flex-wrap gap-4">
          {database.map((skill, idx) => (
            <span
              key={idx}
              className="bg-gray-800 px-5 py-2 rounded-lg border border-yellow-400 hover:bg-yellow-400 hover:text-black font-medium transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>

    {/* Image Section (Right) */}
    <div className="flex  justify-center">
    
<Image
  src="/icons/profile3.jpg"
  alt="My Profile"
  width={300}   // pixel width
  height={300}  // pixel height
  className="rounded-2xl shadow-lg border-4 border-yellow-400 object-cover"
/>
    </div>
  </div>
</main>

  );
}
