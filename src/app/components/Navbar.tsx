"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    setActivePath(pathname || "");
  }, [pathname]);

  const linkClasses = (path: string) =>
    activePath === path
      ? "text-yellow-300 font-bold"
      : "text-white font-medium hover:text-yellow-300 transition";

  return (
    <header className="bg-green-500 shadow-md">
      <div className="max-w-7xl mx-auto px-10 py-3 flex items-center justify-between">
        <div className="text-white font-extrabold text-xl tracking-wide cursor-pointer">
          MyPortfolio
        </div>

        <nav className="flex space-x-8">
          <Link href="/" className={linkClasses("/")}>
            Home
          </Link>
          <Link href="/about" className={linkClasses("/about")}>
            About
          </Link>
          <Link href="/skills" className={linkClasses("/skills")}>
            Skills
          </Link>
          <Link href="/contact" className={linkClasses("/contact")}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
