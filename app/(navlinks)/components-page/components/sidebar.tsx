"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { TypographySmall } from "@/components/typography";
import { shadcnComponents } from "../utils/componentList";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-48 fixed top-16 bottom-0 overflow-y-auto scrollbar-hide">
      <div className="h-full mt-8 pl-6 py-6 pr-6 lg:py-8">
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
                  isActive && "font-medium text-foreground",
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
