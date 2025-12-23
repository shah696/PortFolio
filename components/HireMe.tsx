"use client";
import { useState } from "react";

export default function HireMe() {
  const [name, setName] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!name || !budget || !message) {
      alert("Please fill in all required fields");
      return;
    }

    const whatsappMessage = `*New Project Inquiry.*\n *I found you through your portfolio.*
\n\n*Name:* ${name}\n*Budget:* ${
      budget || "Not specified"
    }\n*Project Details:* ${message}`;
    const whatsappURL = `https://wa.me/923421774407
?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");
    setName("");
    setBudget("");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-4 py-12">
      <div className="max-w-2xl w-full bg-slate-900/50 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">
            Let's Work Together
          </h1>
          <p className="text-slate-400">
            Tell me about your project and I'll get back to you shortly.
          </p>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Name</label>
              <input
                className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">
              Budget-range
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
              placeholder="Your budget-range"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">
              Project Details
            </label>
            <textarea
              className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all min-h-[150px]"
              placeholder="Describe your project goals, timeline, and requirements..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full cursor-pointer  bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold py-4 rounded-lg shadow-lg shadow-cyan-500/20 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Send Message via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
