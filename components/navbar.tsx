"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full text-foreground bg-background/50 backdrop-blur-md ">
      <div className="w-full flex h-16 items-center justify-between px-4">
        {/* Logo and Links */}
        <div className="flex items-center gap-10 ml-4">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            MyLogo
          </Link>

          <div className="hidden md:flex items-center gap-3 text-sm font-medium">
            <Link
              href="/features"
              className="px-3 py-2 rounded-md hover:bg-foreground/10 transition-colors duration-300"
            >
              Features
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 rounded-md hover:bg-foreground/10 transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 rounded-md hover:bg-foreground/10 transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
        {/* Theme Toggle and CTA */}
        <div className="flex items-center gap-4 mr-4">
          <ThemeToggle />
          <button className="px-4 py-2 bg-foreground text-background rounded-md hover:opacity-90 transition-opacity text-sm font-medium">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
