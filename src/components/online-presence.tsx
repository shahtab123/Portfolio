"use client";

import { SiYoutube, SiDevpost } from "react-icons/si";
import { ExternalLink } from "lucide-react";

const onlinePresence = [
  {
    id: "presence-1",
    platform: "YouTube",
    title: "Talking Tech",
    url: "https://www.youtube.com/@talkingtech686",
    description: "My personal YouTube channel where I showcase some of my works, projects, and technical demonstrations",
    icon: SiYoutube,
    color: "#FF0000",
  },
  {
    id: "presence-3",
    platform: "YouTube",
    title: "HideAnyText",
    url: "https://www.youtube.com/@HideAnyText",
    description: "Channel about HideAnyText which offers the ultimate suite of steganography and encryption tools for secure data hiding",
    icon: SiYoutube,
    color: "#FF0000",
  },
  {
    id: "presence-4",
    platform: "YouTube",
    title: "HiddenAI.app",
    url: "https://www.youtube.com/@hiddenaiapp",
    description: "Windows desktop app that stays hidden from meeting apps and screen shares, enabling private work sessions",
    icon: SiYoutube,
    color: "#FF0000",
  },
  {
    id: "presence-5",
    platform: "Devpost",
    title: "Devpost Profile",
    url: "https://devpost.com/smohtasin",
    description: "My Devpost account showcasing my hackathon projects and achievements, including two hackathon wins",
    icon: SiDevpost,
    color: "#003E54",
  },
];

export function OnlinePresence() {
  return (
    <section className="py-4">
      <h2 className="text-lg font-semibold mb-6">Other Online Presence</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {onlinePresence.map((item) => {
          const IconComponent = item.icon;
          return (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-lg border bg-card p-4 transition-all hover:border-foreground/20 hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                <IconComponent
                  className="h-5 w-5"
                  style={{ color: item.color }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <ExternalLink className="h-3 w-3 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

