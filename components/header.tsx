import { Search } from "lucide-react";

export function Header() {
  return (
    <div className="flex flex-col items-center justify-center px-4 h-100 w-full">
      <h1 className="text-5xl font-semibold">
        Professional Web Design, Simplified
      </h1>
      <p className="text-lg font-normal mt-6 text-center max-w-2xl">
        Explore our library of premium, responsive layouts. Customize with ease
        and launch professional projects without writing any CSS.
      </p>

      {/* Button Container */}
      <div className="flex flex-row gap-4 mt-6 text-sm">
        <button className="bg-foreground text-background px-3 py-1 rounded-md font-medium hover:bg-foreground/90 cursor-pointer transition-colors duration-300">
          <Search className="inline-block text-background/70 w-4 h-4 mb-1 mr-2" />
          Browse Layouts
        </button>
        <button className="text-foreground px-3 py-1 rounded-md font-medium hover:bg-foreground/5 cursor-pointer transition-colors duration-300">
          View Components
        </button>
      </div>
    </div>
  );
}
