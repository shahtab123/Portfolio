"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-4">
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
            <a href="mailto:cloudstack6@gmail.com">
              <Button variant="outline" className="gap-2">
                <Mail className="h-4 w-4" />
                Email Me
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
