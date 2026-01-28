import { Navbar } from "@/components/navbar";
import {
  TypographyH2,
  TypographyLarge,
  TypographyMuted,
} from "@/components/typography";
import Link from "next/link";

const shadcnComponents = [
  "Accordion",
  "Alert",
  "Alert Dialog",
  "Aspect Ratio",
  "Avatar",
  "Badge",
  "Breadcrumb",
  "Button",
  "Calendar",
  "Card",
  "Carousel",
  "Chart",
  "Checkbox",
  "Collapsible",
  "Combobox",
  "Command",
  "Context Menu",
  "Data Table",
  "Date Picker",
  "Dialog",
  "Drawer",
  "Dropdown Menu",
  "Form",
  "Hover Card",
  "Input",
  "Input OTP",
  "Label",
  "Menubar",
  "Navigation Menu",
  "Pagination",
  "Popover",
  "Progress",
  "Radio Group",
  "Resizable",
  "Scroll Area",
  "Select",
  "Separator",
  "Sheet",
  "Skeleton",
  "Slider",
  "Sonner",
  "Switch",
  "Table",
  "Tabs",
  "Textarea",
  "Toast",
  "Toggle",
  "Toggle Group",
  "Tooltip",
];

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="mb-10 space-y-4">
          <TypographyH2>Components</TypographyH2>
          <TypographyMuted>
            A comprehensive list of available components from the library.
          </TypographyMuted>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-4">
          {shadcnComponents.map((component) => (
            <Link
              key={component}
              href={`/components-page/${component
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="group flex items-center p-2 -ml-2 rounded-md transition duration-200"
            >
              <TypographyLarge className="text-foreground group-hover:text-foreground group-hover:underline underline-offset-4 transition-all duration-200">
                {component}
              </TypographyLarge>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
