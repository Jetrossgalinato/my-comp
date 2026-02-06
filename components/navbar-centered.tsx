"use client";

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
        
        {/* Mobile Menu Trigger (Left) */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Logo (Left on Desktop, Center on Mobile) */}
        <div className="flex items-center gap-2">
           <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
             <div className="h-4 w-4 rounded-full bg-primary" />
           </div>
           <span className="font-bold text-lg hidden md:block tracking-tight">Acme Inc.</span>
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
