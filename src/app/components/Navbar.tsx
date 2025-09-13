"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  // function to add active class
  const linkClasses = (path: string) =>
    pathname === path
      ? "text-yellow-300 font-bold" // active page
      : "text-white font-medium hover:text-yellow-300 transition";

  return (
    <header className="bg-green-500 shadow-md">
      <div className="max-w-7xl mx-auto px-8 py-1 flex items-center justify-between">
        
        {/* Left side (Logo + DP) */}
        <div className="flex items-center gap-3 cursor-pointer">
          {/* DP image */}
          <Image
            src="/icons/profile1.jpg"  
            alt="My DP"
            width={50}
            height={50}
            className="rounded-full border-2 border-white"
          />
          <span className="text-white font-extrabold text-xl tracking-wide">
            Portfolio
          </span>
        </div>

        {/* Navigation links */}
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
