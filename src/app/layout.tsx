import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { DecorativeLines } from "@/components/decorative-lines";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shahtab Mohtasin | Software Engineer",
  description:
    "Personal portfolio of Shahtab Mohtasin - Software Engineer, Developer, and Builder. Building elegant solutions to complex problems.",
  keywords: [
    "Shahtab Mohtasin",
    "Software Engineer",
    "Full Stack Developer",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Shahtab Mohtasin" }],
  openGraph: {
    title: "Shahtab Mohtasin | Software Engineer",
    description:
      "Personal portfolio of Shahtab Mohtasin - Software Engineer, Developer, and Builder.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen bg-background">
            <DecorativeLines />
            <Navigation />
            <main className="mx-auto max-w-3xl px-6 pb-4">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
