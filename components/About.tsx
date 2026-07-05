"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen text-slate-200 py-24">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left side - Profile Image */}
        <div className="flex-1 flex justify-center animate-fade-in-up">
           <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <Image
              src="/icons/profile4.jpg"  
              alt="Profile"
              width={320}
              height={320}
              className="relative rounded-2xl shadow-xl border-2 border-slate-800 bg-slate-900"
            />
          </div>
        </div>

        {/* Right side - About Content */}
        <div className="flex-1 space-y-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-purple-600">About Me</h1>
          <div className="space-y-4 text-lg text-slate-400 leading-relaxed">
            <p>
              I’m <span className="font-bold text-slate-100">Shah Hussain</span>,
              a detail-oriented <span className="text-cyan-400">Frontend Developer</span> with
              1+ year of professional experience building modern, responsive, and
              production-ready web applications.
            </p>
            <p>
              I specialize in <span className="text-cyan-400">React.js, Next.js, TypeScript, and Tailwind CSS</span>,
              with hands-on experience integrating <span className="text-cyan-400">REST APIs</span>, managing
              application state with <span className="text-cyan-400">Redux</span>, and implementing
              <span className="text-cyan-400"> technical SEO</span> — including sitemap generation, metadata
              optimization, canonical handling, and page indexing for Next.js websites. I also have working
              knowledge of <span className="text-cyan-400">Node.js, Express.js, and MongoDB</span>.
            </p>
            <p>
              I focus on clean, reusable component architecture, performance optimization,
              and cross-browser, mobile-first interfaces that deliver real value in production.
            </p>
          </div>

          {/* Call to Action */}
          <div className="flex gap-4 mt-8">
            <Link
              href="/skills"
              className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            >
              View My Skills
            </Link>
            <Link
              href="/contact"
              className="border border-cyan-500/50 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
