"use client";

import { Github } from "lucide-react";

export function GitHubCTA() {
  return (
    <section className="py-4">
      <a
        href="https://github.com/shahtabmohtasin"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center gap-3 rounded-lg border-2 border-dashed border-border bg-muted/30 p-6 transition-all hover:border-foreground/30 hover:bg-muted/50"
      >
        <Github className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
        <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
          Follow me on GitHub
        </span>
      </a>
    </section>
  );
}

