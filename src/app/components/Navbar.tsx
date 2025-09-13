"use client";
import Link from "next/link";
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
          <Link
            href="/"
            className={linkClasses("/")}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => route.push("/about")}
            className={linkClasses("/about")}
          >
            About
          </Link>
          <a
            href="/skills"
            onClick={() => route.push("/skills")}
           className={linkClasses("/skills")}
          >
            Skills
          </a>
          <Link
            href="/contact"
            onClick={() => route.push("/contact")}
           className={linkClasses("/contact")}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
