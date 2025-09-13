import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import Link from 'next/link'

function HomeComponent() {
  return (
    <div>
      <Navbar/>
       <main className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white px-6">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl">
        
        {/* Left Side (Text) */}
        <div className="flex-1 space-y-5">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm <span className="text-yellow-400">Shah Hussain</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
            Experienced Full Stack Developer
          </h2>
          <p className="text-lg text-gray-400">
            With 3+ years of experience developing websites and applications 
            using the latest technologies. Proven ability to troubleshoot 
            software issues and create innovative solutions.
          </p>

          {/* Call To Action */}
          <div className="flex gap-4 mt-6">
            <Link
              href="/contact"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              Hire Me
            </Link>
            <Link
              href="/skills"
              className="border border-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition"
            >
              View Skills
            </Link>
          </div>
        </div>

        {/* Right Side (Profile Image / DP) */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/icons/profile2.jpg" // ✅ image rakho public/icons/profile.jpeg
            alt="Profile Picture"
            width={300}
            height={300}
            className="rounded-full border-4 border-yellow-400 shadow-lg"
          />
        </div>
      </div>
    </main>
    </div>
  )
}

export default HomeComponent
