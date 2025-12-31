import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center gap-4 transition-colors duration-600">
      <h1>This is the Home Page</h1>
      <ThemeToggle />
    </div>
  );
}
