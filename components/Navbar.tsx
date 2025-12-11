"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    pathname === path
      ? "text-cyan-400 font-bold border-b-2 border-cyan-400"
      : "text-slate-300 font-medium hover:text-cyan-300 transition-colors duration-300";

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-white/10 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
        {/* Left side  */}
        <div className="flex justify-center sm:justify-start items-center gap-3 cursor-pointer group">
          <span className="text-2xl font-extrabold tracking-wide bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-purple-600 group-hover:from-purple-400 group-hover:to-cyan-600 transition-all duration-500">
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
          <Link href="/projects" className={linkClasses("/projects")}>
            Projects
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
