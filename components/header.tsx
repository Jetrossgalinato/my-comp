import { Search } from "lucide-react";
import { TypographyH1, TypographyLead, TypographySmall } from "./typography";
import Link from "next/link";
import { Button } from "./ui/button";

export function Header() {
  return (
    <div className="flex flex-col items-center justify-center px-4 h-100 w-full">
      <TypographyH1 className="text-center font-medium">
        Professional Web Design, Simplified
      </TypographyH1>
      <TypographyLead className="mt-6 text-center max-w-2xl">
        Explore our library of premium, responsive layouts. Customize with ease
        and launch professional projects without writing any CSS.
      </TypographyLead>

      {/* Button Container */}
      <div className="flex flex-row gap-4 mt-6">
        <Button asChild>
          <Link href="/templates-page">
            <Search className="inline-block text-background/70 w-4 h-4" />
            Browse Templates
          </Link>
        </Button>

        <button className="text-foreground px-3 py-1 rounded-md hover:bg-foreground/5 cursor-pointer transition-colors duration-300">
          <Link href={"/components-page"}>
            <TypographySmall>View Components</TypographySmall>
          </Link>
        </button>
      </div>
    </div>
  );
}
