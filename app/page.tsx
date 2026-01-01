import { Navbar } from "@/components/navbar";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground gap-4 transition-colors duration-300">
      <Navbar />
      <Header />
    </div>
  );
}
