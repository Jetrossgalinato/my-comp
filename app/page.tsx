import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground gap-4 transition-colors duration-600">
      <Navbar />
    </div>
  );
}
