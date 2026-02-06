"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Eye, Code } from "lucide-react";

const navbarCode = `"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Search, Power } from "lucide-react";
import { TypographySmall } from "./typography";
import { Button } from "./ui/button";

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
              href="/"
              className="px-3 py-1 rounded-md hover:bg-foreground/10 transition-colors duration-300"
            >
              <TypographySmall className="font-medium">Home</TypographySmall>
            </Link>
            <Link
              href="/components-page"
              className="px-3 py-1 rounded-md hover:bg-foreground/10 transition-colors duration-300"
            >
              <TypographySmall className="font-medium">
                Components
              </TypographySmall>
            </Link>
            <Link
              href="/about"
              className="px-3 py-1 rounded-md hover:bg-foreground/10 transition-colors duration-300"
            >
              <TypographySmall className="font-medium">About</TypographySmall>
            </Link>
            <Link
              href="/contact"
              className="px-3 py-1 rounded-md hover:bg-foreground/10 transition-colors duration-300"
            >
              <TypographySmall className="font-medium">Contact</TypographySmall>
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
          <Button asChild>
            <Link href="/login">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
`;

export function NavbarPreview() {
  const [view, setView] = useState<"preview" | "code">("preview");

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Button
          variant={view === "preview" ? "default" : "outline"}
          onClick={() => setView("preview")}
          size="sm"
          className="gap-2"
        >
          <Eye className="w-4 h-4" />
          Preview
        </Button>
        <Button
          variant={view === "code" ? "default" : "outline"}
          onClick={() => setView("code")}
          size="sm"
          className="gap-2"
        >
          <Code className="w-4 h-4" />
          Code
        </Button>
      </div>

      <div className="relative rounded-xl border bg-zinc-950 dark:bg-zinc-900 overflow-hidden shadow-sm h-[500px] transition-all duration-300">
        {view === "preview" ? (
          <div className="relative w-full h-full bg-background/95 p-4 flex flex-col">
            <div className="rounded-lg border overflow-y-auto shadow-md flex-1 bg-background relative">
              <Navbar />
              <div className="p-8 text-center text-muted-foreground">
                <p>Page Content Scrollable Area</p>
                {Array.from({ length: 5 }).map((_, i) => (
                  <p key={i} className="my-8 opacity-20">
                    Scroll content...
                  </p>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 overflow-auto h-full w-full text-sm">
            <pre className="text-zinc-50 font-mono">
              <code>{navbarCode}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
