"use client";
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <main className="min-h-screen text-slate-200 px-8 py-24 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-purple-600 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
             I’m always open to discussing new projects, creative ideas, or
             opportunities to be part of your vision.
          </p>
        </div>

        <div className="glass-card p-10 rounded-3xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Info */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 text-cyan-400">
                  📍
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-medium">Location</p>
                  <p className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">Faisalabad, Pakistan</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                 <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 text-purple-400">
                  📞
                </div>
                <div>
                   <p className="text-slate-400 text-sm font-medium">Phone</p>
                   <p className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">0342 1774407</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                 <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 text-blue-400">
                  📧
                </div>
                <div>
                   <p className="text-slate-400 text-sm font-medium">Email</p>
                   <Link
                      onClick={() =>
                        window.open("https://mail.google.com", "_blank")
                      }
                      href="mailto:shonees51@gmail.com"
                      className="text-lg font-semibold text-white hover:text-blue-300 transition-colors"
                   >
                      shonees51@gmail.com
                   </Link>
                </div>
              </div>
            </div>

            {/* Right side - Decoration / Form placeholder */}
            <div className="flex justify-center items-center">
               <div className="relative w-64 h-64">
                   <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                   <div className="absolute inset-4 bg-slate-900 rounded-full border border-slate-700 flex items-center justify-center">
                      <span className="text-6xl animate-bounce">👋</span>
                   </div>
               </div>
            </div>
        </div>
      </div>
      </div>
    </main>
  );
}
