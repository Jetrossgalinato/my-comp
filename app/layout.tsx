import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";

const geistSans = localFont({
  src: [
    {
      path: "./fonts/Geist-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Geist-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Geist-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Geist-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Geist-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Geist-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Geist-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Geist-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Geist-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Professional Web Design, Simplified",
  description:
    "Explore our library of premium, responsive layouts. Customize with ease and launch professional projects without writing any CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={geistSans.variable}>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
