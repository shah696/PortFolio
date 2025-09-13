"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

function Navbar() {
  const route = useRouter();
  const pathname = usePathname()
   const linkClasses = (path: string) =>
    pathname === path
      ? "text-yellow-300 font-bold" // active page
      : "text-white font-medium hover:text-yellow-300 transition"

  return (
    <header className="bg-green-500 shadow-md">
      <div className="max-w-7xl mx-auto px-10 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-white font-extrabold text-xl tracking-wide cursor-pointer">
          MyPortfolio
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-8">
          <a
            href="/"
            className={linkClasses("/")}
          >
            Home
          </a>
          <a
            href="/about"
            onClick={() => route.push("/about")}
            className={linkClasses("/about")}
          >
            About
          </a>
          <a
            href="/skills"
            onClick={() => route.push("/skills")}
           className={linkClasses("/skills")}
          >
            Skills
          </a>
          <a
            href="/contact"
            onClick={() => route.push("/contact")}
           className={linkClasses("/contact")}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
