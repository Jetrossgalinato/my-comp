"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Eye,
  Code,
  Monitor,
  Tablet,
  Smartphone,
  Check,
  Copy,
} from "lucide-react";
import { ResponsiveIframe } from "../../components/responsive-iframe";

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
  const [previewWidth, setPreviewWidth] = useState<string>("100%");
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(navbarCode);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
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

        {view === "preview" && (
          <div className="flex items-center gap-1 bg-muted/50 p-1 rounded-lg">
            <Button
              variant={previewWidth === "100%" ? "secondary" : "ghost"}
              onClick={() => setPreviewWidth("100%")}
              size="icon"
              className="h-8 w-8"
              title="Full Width"
            >
              <Monitor className="w-4 h-4" />
            </Button>
            <Button
              variant={previewWidth === "768px" ? "secondary" : "ghost"}
              onClick={() => setPreviewWidth("768px")}
              size="icon"
              className="h-8 w-8"
              title="Tablet"
            >
              <Tablet className="w-4 h-4" />
            </Button>
            <Button
              variant={previewWidth === "375px" ? "secondary" : "ghost"}
              onClick={() => setPreviewWidth("375px")}
              size="icon"
              className="h-8 w-8"
              title="Mobile"
            >
              <Smartphone className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>

      <div className="relative rounded-xl border bg-zinc-950 dark:bg-zinc-900 overflow-hidden shadow-sm h-[500px] transition-all duration-300 flex flex-col">
        {view === "preview" ? (
          <div className="flex-1 bg-zinc-100/50 dark:bg-zinc-950/50 p-4 overflow-hidden relative flex justify-center items-start">
            <div
              className="bg-background border rounded-lg overflow-hidden shadow-md transition-all duration-500 ease-in-out flex flex-col h-full relative"
              style={{ width: previewWidth }}
            >
              <ResponsiveIframe className="w-full h-full">
                <Navbar />
                <div className="p-8 text-center text-muted-foreground">
                  <p>Page Content Scrollable Area</p>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <p key={i} className="my-8 opacity-20">
                      Scroll content...
                    </p>
                  ))}
                </div>
              </ResponsiveIframe>
            </div>
          </div>
        ) : (
          <div className="relative h-full w-full">
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 h-8 w-8 z-10 bg-zinc-800 text-zinc-100 hover:bg-zinc-700 hover:text-white border-zinc-700"
              onClick={handleCopy}
            >
              {isCopied ? (
                <Check className="h-4 w-4 text-green-400" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
            <div className="p-4 overflow-auto h-full w-full text-sm">
              <pre className="text-zinc-50 font-mono">
                <code>{navbarCode}</code>
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
