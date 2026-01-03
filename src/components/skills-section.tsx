"use client";

import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiAmazonwebservices,
  SiDocker,
  SiTailwindcss,
  SiGit,
  SiNextdotjs,
  SiVercel,
  SiLinux,
} from "react-icons/si";
import { Globe } from "lucide-react";

const skills = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Vercel", icon: SiVercel, color: "#000000" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: null },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Prisma", icon: SiPrisma, color: null },
  { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "ComfyUI", icon: Globe, color: null },
  { name: "REST APIs", icon: Globe, color: null },
];

export function SkillsSection() {
  return (
    <section className="py-4">
      <h2 className="text-lg font-semibold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => {
          const IconComponent = skill.icon;
          return (
            <span
              key={skill.name}
              className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <IconComponent
                className="h-4 w-4"
                style={skill.color ? { color: skill.color } : undefined}
              />
              {skill.name}
            </span>
          );
        })}
      </div>
    </section>
  );
}
