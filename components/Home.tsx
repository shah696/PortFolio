import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import Link from 'next/link'

function HomeComponent() {
  return (
    <div>
      <Navbar/>
       <main className="pt-16 pb-20 min-h-screen flex flex-col items-center justify-center text-slate-200 overflow-hidden">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-[1400px] w-full px-6">
        
        {/* Left Side  */}
        <div className="flex-1 space-y-6 animate-fade-in-up">
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight">
         <p className="text-slate-100 mb-2">I&apos;m a developer</p> 
         <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600">Shah Hussain</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-cyan-200/80">
            Frontend Developer
          </h2>
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            Frontend Developer with 4 years of experience building
            production-ready web applications with React.js, Next.js, TypeScript,
            and Tailwind CSS. Skilled in REST API integration, technical SEO,
            performance optimization, and scalable component architecture.
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2">
            {["React.js", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "SEO"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-slate-900/60 border border-slate-700 text-cyan-300/80 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Call To Action */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/hire-me"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
            >
              Hire Me
            </Link>
            <a
              href="/shah_hussain.pdf"
              download="Shah_Hussain_Resume.pdf"
              className="border-2 border-slate-700 px-8 py-3 rounded-full font-bold hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
            >
              Download Resume
            </a>
            <Link
              href="/projects"
              className="border-2 border-slate-700 px-8 py-3 rounded-full font-bold hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
            >
              View Projects
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-10 max-w-md">
            {[
              { value: "4+", label: "Years Experience" },
              { value: "5+", label: "Production Projects" },
              { value: "15+", label: "Technologies" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-xl p-4 text-center hover:border-cyan-500/50 transition-colors"
              >
                <p className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-purple-600">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex justify-center mt-10 md:mt-0 animate-float">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 animate-pulse"></div>
            <Image
              src="/icons/profile2.jpg" 
              alt="Profile Picture"
              width={350}
              height={350}
              className="relative rounded-full border-4 border-slate-800 shadow-2xl z-10"
              priority
            />
          </div>
        </div>
      </div>
    </main>
    </div>
  )
}

export default HomeComponent
