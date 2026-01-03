"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Check } from "lucide-react";

export function ContactSection() {
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
    <section className="py-4">
      {/* Email copied notification */}
      {emailCopied && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-[100] bg-background border border-border rounded-lg px-4 py-3 shadow-lg flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
          <Check className="h-5 w-5 text-green-500" />
          <span className="text-base font-medium">cloudstack6@gmail.com copied!</span>
        </div>
      )}
      {/* Box with + corner decorations */}
      <div className="relative border rounded-lg p-8">
        {/* Corner decorations */}
        <div className="absolute -top-px -left-px w-4 h-4 border-t border-l border-foreground/20" />
        <div className="absolute -top-px -right-px w-4 h-4 border-t border-r border-foreground/20" />
        <div className="absolute -bottom-px -left-px w-4 h-4 border-b border-l border-foreground/20" />
        <div className="absolute -bottom-px -right-px w-4 h-4 border-b border-r border-foreground/20" />

        {/* Plus signs at corners */}
        <span className="absolute -top-2 -left-2 text-muted-foreground/40 text-sm select-none">+</span>
        <span className="absolute -top-2 -right-2 text-muted-foreground/40 text-sm select-none">+</span>
        <span className="absolute -bottom-2 -left-2 text-muted-foreground/40 text-sm select-none">+</span>
        <span className="absolute -bottom-2 -right-2 text-muted-foreground/40 text-sm select-none">+</span>

        {/* Top and bottom lines */}
        <div className="absolute top-0 left-6 right-6 h-px bg-foreground/10" />
        <div className="absolute bottom-0 left-6 right-6 h-px bg-foreground/10" />

        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            Let&apos;s work together
          </h2>
          <p className="mt-2 text-muted-foreground">
            Have a project in mind? Let&apos;s create something amazing.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Button 
              variant="outline" 
              className="gap-2"
              onClick={handleEmailClick}
            >
              <Mail className="h-4 w-4" />
              Email Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
