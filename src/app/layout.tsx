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
  metadataBase: new URL("https://shahtab.xyz"),
  title: {
    default: "Shahtab Mohtasin | Software Engineer & Full Stack Developer",
    template: "%s | Shahtab Mohtasin",
  },
  description:
    "Freelance developer and IT consultant specializing in building production-ready software solutions. Master's in IT Management from De Montfort University. Expert in AI, web development, and tech-driven business solutions.",
  keywords: [
    "Shahtab Mohtasin",
    "Software Engineer",
    "Full Stack Developer",
    "Web Developer",
    "IT Consultant",
    "Freelance Developer",
    "Next.js Developer",
    "React Developer",
    "AI Developer",
    "Portfolio",
    "Bangladesh Developer",
    "De Montfort University",
  ],
  authors: [{ name: "Shahtab Mohtasin" }],
  creator: "Shahtab Mohtasin",
  publisher: "Shahtab Mohtasin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shahtab.xyz",
    siteName: "Shahtab Mohtasin Portfolio",
    title: "Shahtab Mohtasin | Software Engineer & Full Stack Developer",
    description:
      "Freelance developer and IT consultant specializing in building production-ready software solutions. Master's in IT Management from De Montfort University.",
    images: [
      {
        url: "/card.png",
        width: 1200,
        height: 630,
        alt: "Shahtab Mohtasin - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahtab Mohtasin | Software Engineer & Full Stack Developer",
    description:
      "Freelance developer and IT consultant specializing in building production-ready software solutions.",
    creator: "@SMohtasin",
    images: ["/card.png"],
  },
  alternates: {
    canonical: "https://shahtab.xyz",
  },
  category: "technology",
  manifest: "/manifest.json",
  icons: {
    icon: "/profile-pic (11).png",
    apple: "/profile-pic (11).png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
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
          <div className="relative min-h-screen bg-background flex flex-col">
            <DecorativeLines />
            <Navigation />
            <main className="mx-auto max-w-3xl px-6 pb-4 flex-1 flex flex-col">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
