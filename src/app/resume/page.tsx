"use client";
import React from "react";
import Navbar from "../../../components/Navbar";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8 flex flex-col items-center gap-8">
       
        
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
