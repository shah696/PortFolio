"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="bg-gray-900 min-h-screen text-white px-8 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left side - Profile Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/icons/profile4.jpg"  
            alt="Profile"
            width={280}
            height={280}
            className="rounded-2xl shadow-lg border-4 border-yellow-400"
          />
        </div>

        {/* Right side - About Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-extrabold text-yellow-400">About Me</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            I’m <span className="font-bold text-white">Shah Hussain</span>, 
            a passionate and detail-oriented <span className="text-yellow-300">Full Stack Developer</span> 
            with 3+ years of experience building modern, scalable, and 
            user-friendly web applications. 
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            My journey started with <span className="text-yellow-300">HTML, CSS, and JavaScript</span>, 
            and over time I specialized in <span className="text-yellow-300">React.js</span> and frontend development. 
            Later, I mastered backend technologies like 
            <span className="text-yellow-300"> Node.js, Express.js, Nest.js, and Next.js</span>, 
            along with databases such as <span className="text-yellow-300">MongoDB and PostgreSQL</span>.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            I love solving problems, writing clean code, and learning new technologies. 
            My focus is always on delivering high-quality solutions that create real value.
          </p>

          {/* Call to Action */}
          <div className="flex gap-4 mt-4">
            <Link
              href="/skills"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              View My Skills
            </Link>
            <Link
              href="/contact"
              className="border border-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
