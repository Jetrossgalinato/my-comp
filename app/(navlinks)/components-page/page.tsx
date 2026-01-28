import { Navbar } from "@/components/navbar";
import { TypographyH2 } from "@/components/typography";
export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground gap-4 transition-colors duration-300">
      <Navbar />
      <div className="max-w-2xl mx-auto mt-10">
        <TypographyH2>Components</TypographyH2>
      </div>
    </div>
  );
}
