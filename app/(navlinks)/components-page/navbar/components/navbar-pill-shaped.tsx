"use client";

import { useState } from "react";
import { NavbarCentered } from "@/components/navbar-centered";
import { Button } from "@/components/ui/button";
import { Eye, Code, Monitor, Tablet, Smartphone } from "lucide-react";
import { ResponsiveIframe } from "../../components/responsive-iframe";

const navbarCenteredCode = `"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Menu, Search } from "lucide-react";
import { TypographySmall } from "./typography";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function NavbarCentered({ className }: { className?: string }) {
  return (
    <nav className={cn("fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-full border border-border/40 bg-background/80 backdrop-blur-md shadow-sm", className)}>
      <div className="px-6 h-14 flex items-center justify-between">
        
        {/* Left Section: Menu (Mobile) + Logo */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-2">
             <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
               <div className="h-4 w-4 rounded-full bg-primary" />
             </div>
             <span className="font-bold text-lg tracking-tight">Acme Inc.</span>
          </div>
        </div>

        {/* Centered Links (Desktop Only) */}
        <div className="hidden md:flex items-center justify-center gap-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
           <Link href="#" className="px-4 py-2 rounded-full hover:bg-accent/50 transition-colors">
              <TypographySmall className="font-medium">Features</TypographySmall>
           </Link>
           <Link href="#" className="px-4 py-2 rounded-full hover:bg-accent/50 transition-colors">
              <TypographySmall className="font-medium">Customers</TypographySmall>
           </Link>
           <Link href="#" className="px-4 py-2 rounded-full hover:bg-accent/50 transition-colors">
              <TypographySmall className="font-medium">Pricing</TypographySmall>
           </Link>
            <Link href="#" className="px-4 py-2 rounded-full hover:bg-accent/50 transition-colors">
              <TypographySmall className="font-medium">Enterprise</TypographySmall>
           </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden sm:flex text-muted-foreground hover:text-foreground">
             <Search className="h-5 w-5" />
          </Button>
          <ThemeToggle />
          <Button size="sm" className="hidden sm:flex rounded-full px-5">Sign In</Button>
        </div>
      </div>
    </nav>
  );
}
`;

export function NavbarPillShaped() {
  const [view, setView] = useState<"preview" | "code">("preview");
  const [previewWidth, setPreviewWidth] = useState<string>("100%");

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
                <NavbarCentered />
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
          <div className="p-4 overflow-auto h-full w-full text-sm">
            <pre className="text-zinc-50 font-mono">
              <code>{navbarCenteredCode}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
