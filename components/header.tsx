export function Header() {
  return (
    <div className="flex flex-col items-center justify-center px-4 h-100 w-full">
      <h1 className="text-5xl font-semibold">
        Professional Web Design, Simplified
      </h1>
      <p className="text-lg font-normal mt-5 text-center max-w-2xl">
        Explore our library of premium, responsive layouts. Customize with ease
        and launch professional projects without writing any CSS.
      </p>

      {/* Button Container */}
      <div className="flex flex-row gap-4 mt-5 text-sm">
        <button className="bg-foreground text-background px-3 py-1 rounded-lg font-medium hover:bg-foreground/90 cursor-pointer transition-colors duration-300">
          Browse Layouts
        </button>
        <button className="bg-background text-foreground border border-gray-200 px-3 py-1 rounded-lg font-medium hover:bg-background/90 shadow-sm cursor-pointer transition-colors duration-300">
          View Components
        </button>
      </div>
    </div>
  );
}
