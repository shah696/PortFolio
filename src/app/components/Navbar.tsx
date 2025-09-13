"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    pathname === path
      ? "text-yellow-300 font-bold"
      : "text-white font-medium hover:text-yellow-300 transition";

  return (
    <header className="bg-green-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
        {/* Left side (Logo / Portfolio) */}
        <div className="flex justify-center sm:justify-start items-center gap-3 cursor-pointer">
          {/* DP image agar chahiye */}
          <span className="text-white font-extrabold text-xl tracking-wide">
            Portfolio
          </span>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-8">
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
           <Link href="/projects" className={linkClasses("/contact")}>
            MyProjects
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
