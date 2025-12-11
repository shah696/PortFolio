import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import Link from 'next/link'

function HomeComponent() {
  return (
    <div>
      <Navbar/>
       <main className="pt-16 min-h-screen flex flex-col items-center justify-center text-slate-200 px-6 overflow-hidden">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">
        
        {/* Left Side  */}
        <div className="flex-1 space-y-6 animate-fade-in-up">
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight">
         <p className="text-slate-100 mb-2">I&apos;m a developer</p> 
         <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600">Shah Hussain</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-cyan-200/80">
            Experienced Full Stack Developer
          </h2>
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            With 3+ years of experience developing websites and applications 
            using the latest technologies. Proven ability to troubleshoot 
            software issues and create innovative solutions.
          </p>

          {/* Call To Action */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
            >
              Hire Me
            </Link>
            <Link
              href="/skills"
              className="border-2 border-slate-700 px-8 py-3 rounded-full font-bold hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
            >
              View Skills
            </Link>
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
