"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Check } from "lucide-react";
import { BadgeCheck } from "lucide-react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

const socialLinks = [
  {
    name: "Email",
    href: "mailto:cloudstack6@gmail.com",
    icon: Mail,
    color: null,
  },
  {
    name: "GitHub",
    href: "https://github.com/shahtab123",
    icon: SiGithub,
    color: "#181717",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shahtab-mohtasin/",
    icon: SiLinkedin,
    color: "#0077B5",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/SMohtasin",
    icon: SiX,
    color: null,
  },
];

export function HeroSection() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText("cloudstack6@gmail.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <section className="py-6">
      {/* Email copied notification */}
      {emailCopied && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-[100] bg-background border border-border rounded-lg px-4 py-3 shadow-lg flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
          <Check className="h-5 w-5 text-green-500" />
          <span className="text-base font-medium">cloudstack6@gmail.com copied!</span>
        </div>
      )}
      {/* Bangla word - "Coder" */}
      <div className="flex justify-center mb-8 overflow-hidden">
        <span className="text-[5rem] sm:text-[8rem] md:text-[10rem] font-bold text-muted-foreground/[0.08] dark:text-white/[0.08] leading-none tracking-tighter select-none">
          কোডার
        </span>
      </div>

      {/* Profile section */}
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-10">
        {/* Profile Picture */}
        <div className="relative h-36 w-36 shrink-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
          <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-background shadow-2xl ring-1 ring-border">
            <Image
              src="/profile.webp"
              alt="Shahtab Mohtasin"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Shahtab Mohtasin
            </h1>
            <BadgeCheck className="h-7 w-7 fill-blue-500 text-white" />
          </div>

          <p className="mt-3 text-muted-foreground font-mono text-sm">
            Software Engineer • Developer • Builder
          </p>

          {/* Social Links */}
          <div className="mt-5 flex items-center gap-3">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              const isGithub = link.name === "GitHub";
              const isEmail = link.name === "Email";
              
              if (isEmail) {
                return (
                  <button
                    key={link.name}
                    onClick={handleEmailClick}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-all hover:bg-accent hover:text-foreground hover:scale-110 cursor-pointer"
                    title={link.name}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="sr-only">{link.name}</span>
                  </button>
                );
              }
              
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-all hover:bg-accent hover:text-foreground hover:scale-110"
                  title={link.name}
                >
                  <IconComponent
                    className={`h-5 w-5 ${isGithub ? "text-[#181717] dark:text-white" : ""}`}
                    style={link.color && !isGithub ? { color: link.color } : undefined}
                  />
                  <span className="sr-only">{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* About section */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold">About</h2>
        <p className="mt-4 font-mono text-sm leading-relaxed text-muted-foreground">
          I&apos;m a freelance developer and IT consultant who enjoys turning blank ideas into reliable, production-ready software. From frontend and backend to deployment, I focus on building practical, scalable solutions for real-world problems.
        </p>
        <p className="mt-4 font-mono text-sm leading-relaxed text-muted-foreground">
          With a Master&apos;s in IT Management from De Montfort University and over 3+ years of consulting experience, I specialize in tech-driven business solutions, team coordination, and problem-solving. I thrive in hackathons and draw creative inspiration from gaming and anime.
        </p>
      </div>
    </section>
  );
}
