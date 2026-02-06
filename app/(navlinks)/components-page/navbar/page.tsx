"use client";

import { Navbar } from "@/components/navbar";
import { Sidebar } from "../components/sidebar";
import { TypographyH2, TypographyMuted } from "@/components/typography";
import { NavbarPreview } from "./components/navbar-preview";
import { NavbarPillShaped } from "./components/navbar-pill-shaped";

export default function NavbarPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <div className="flex flex-1 items-start">
        <Sidebar />

        <main className="flex-1 w-full ml-48">
          <div className="container mx-auto px-4 py-16 max-w-3xl">
            <div className="mb-10 space-y-4">
              <TypographyH2>Navbar</TypographyH2>
              <TypographyMuted className="text-base">
                Minimalist and responsive navbar component
              </TypographyMuted>
            </div>

            <NavbarPreview />

            <div className="mt-20 mb-10 space-y-4">
              <TypographyH2>Centered Navbar</TypographyH2>
              <TypographyMuted className="text-base">
                A modern navbar with centered navigation links and a distinct
                logo area.
              </TypographyMuted>
            </div>

            <NavbarPillShaped />
          </div>
        </main>
      </div>
    </div>
  );
}
