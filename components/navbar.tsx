"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Search, Power } from "lucide-react";
import { TypographySmall } from "./typography";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full text-foreground bg-background/50 backdrop-blur-md ">
      <div className="w-full flex h-16 items-center justify-between px-4">
        {/* Logo and Links */}
        <div className="flex items-center gap-2 ml-4">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight px-3 rounded-md hover:bg-foreground/10 transition-all duration-300"
          >
            <Power className="inline-block h-4 w-4 mb-1" />
          </Link>

          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/features"
              className="px-3 py-1 rounded-md hover:bg-foreground/10 transition-colors duration-300"
            >
              <TypographySmall>Features</TypographySmall>
            </Link>
            <Link
              href="/about"
              className="px-3 py-1 rounded-md hover:bg-foreground/10 transition-colors duration-300"
            >
              <TypographySmall>About</TypographySmall>
            </Link>
            <Link
              href="/contact"
              className="px-3 py-1 rounded-md hover:bg-foreground/10 transition-colors duration-300"
            >
              <TypographySmall>Contact</TypographySmall>
            </Link>
          </div>
        </div>
        {/* Theme Toggle and CTA */}
        <div className="flex items-center gap-4 mr-4">
          {/* Search Bar */}
          <div className="relative hidden sm:block">
            <Search className="absolute left-2.5 top-2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search components..."
              className="pl-9 px-3 py-1 bg-foreground/1 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-foreground/20 w-40 md:w-64 transition-all"
            />
          </div>

          <div className="h-6 w-[1px] bg-foreground/20" />

          <ThemeToggle />

          <div className="h-6 w-[1px] bg-foreground/20" />
          <button className="px-3 py-1 bg-foreground text-background rounded-md hover:opacity-90 transition-opacity">
            <TypographySmall>Get Started</TypographySmall>
          </button>
        </div>
      </div>
    </nav>
  );
}
