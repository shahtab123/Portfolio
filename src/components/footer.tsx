"use client";

import { MapPin } from "lucide-react";

export function Footer() {
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <footer className="pt-4 mt-auto pb-2">
      <div className="max-w-2xl mx-auto border-t pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-muted-foreground">
        {/* Left side */}
        <div className="flex flex-col gap-1">
          <p>
            Designed & Developed by{" "}
            <span className="text-foreground font-medium">Shahtab</span>
          </p>
          <p>© {new Date().getFullYear()}. All rights reserved.</p>
        </div>

        {/* Right side */}
        <div className="flex flex-col items-start sm:items-end gap-1">
          <div className="flex items-center gap-2">
            <MapPin className="h-3 w-3" />
            <span className="font-mono">Bangladesh, {currentTime}</span>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
