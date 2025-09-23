"use client";
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <main className="bg-gray-900 min-h-screen text-white px-8 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-yellow-400 text-center mb-12">
          Contact Me
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side - Info */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I’m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out
              using the form or my contact details below:
            </p>

            <div className="space-y-4">
              <p>
                📍 <span className="text-yellow-300">Faisalabad, Pakistan</span>
              </p>
              <p>
                📞 <span className="text-yellow-300">0342 1774407</span>
              </p>
              <p>
                📧{" "}
                <Link
                  onClick={() =>
                    window.open("https://mail.google.com", "_blank")
                  }
                  href="mailto:shonees51@gmail.com"
                  className="text-yellow-300 hover:underline"
                >
                  shonees51@gmail.com
                </Link>
              </p>
            </div>
          </div>

          {/* Right side - Contact Form */}
          {/* <form className="space-y-6 bg-gray-800 p-8 rounded-2xl shadow-lg">
            <div>
              <label className="block mb-2 font-semibold">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Message</label>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-300 transition"
            >
              Send Message
            </button>
          </form> */}
        </div>
      </div>
    </main>
  );
}
