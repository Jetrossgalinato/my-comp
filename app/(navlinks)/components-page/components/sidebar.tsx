"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { TypographySmall } from "@/components/typography";
import { shadcnComponents } from "../utils/componentList";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0 hidden md:block border-r min-h-[calc(100vh-4rem)]">
      <div className="h-full py-6 pr-6 lg:py-8">
        <TypographySmall className="font-semibold mb-4 px-2">
          Components
        </TypographySmall>
        <div className="grid grid-flow-row auto-rows-max text-sm">
          {shadcnComponents.map((component) => {
            const href = `/components-page/${component
              .toLowerCase()
              .replace(/\s+/g, "-")}`;
            const isActive = pathname === href;

            return (
              <Link
                key={component}
                href={href}
                className={cn(
                  "group flex w-full items-center rounded-md border border-transparent px-2 py-1 text-muted-foreground hover:underline",
                  isActive && "font-medium text-foreground"
                )}
              >
                {component}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}