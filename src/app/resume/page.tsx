"use client";
import React from "react";
import Navbar from "../../../components/Navbar";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-6 py-8 flex flex-col items-center gap-8">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-purple-600">
            My Resume
          </h1>
          <a
            href="/shah_hussain.pdf"
            download="Shah_Hussain_Resume.pdf"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
          >
            Download PDF
          </a>
        </div>

        <div className="w-full h-[80vh] bg-slate-900 rounded-xl overflow-hidden border border-slate-700 shadow-2xl relative group">
             <iframe 
                src="/shah_hussain.pdf" 
                className="w-full h-full"
                title="Resume PDF"
             />
             <div className="absolute inset-0 flex items-center justify-center -z-10">
                <p className="text-slate-500">Loading Resume...</p>
             </div>
        </div>
      </main>
    </div>
  );
}
