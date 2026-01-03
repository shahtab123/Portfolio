"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Building2, Briefcase } from "lucide-react";

const experiences = [
  {
    id: "exp-1",
    company: "Tech Company",
    role: "Full Stack Developer",
    period: "Jan 2024 - Present",
    location: "Remote",
    type: "Full-time",
    description: [
      "Building scalable web applications using Next.js, React, and Node.js.",
      "Implementing robust authentication systems, RESTful APIs, and database architectures.",
      "Collaborating with cross-functional teams to deliver high-quality software solutions.",
    ],
    icon: Building2,
  },
  {
    id: "exp-2",
    company: "Software Solutions",
    role: "Frontend Developer",
    period: "Jun 2023 - Dec 2023",
    location: "Remote",
    type: "Internship",
    description: [
      "Developed responsive user interfaces using React and modern CSS frameworks.",
      "Optimized application performance and implemented best practices for accessibility.",
      "Worked closely with designers to translate mockups into pixel-perfect components.",
    ],
    icon: Briefcase,
  },
];

export function WorkExperience() {
  return (
    <section className="py-4">
      <h2 className="text-lg font-semibold mb-6">Work Experience</h2>
      <Accordion type="single" collapsible className="w-full space-y-3">
        {experiences.map((exp) => {
          const IconComponent = exp.icon;
          return (
            <AccordionItem
              key={exp.id}
              value={exp.id}
              className="border rounded-lg px-4 bg-card"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center justify-between w-full pr-4">
                  <div className="flex items-center gap-3">
                    {/* Company Icon */}
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
                      <IconComponent className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="flex flex-col items-start gap-0.5 text-left">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{exp.company}</span>
                        <span className="text-muted-foreground">/</span>
                        <span className="text-muted-foreground text-sm">
                          {exp.role}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Date on the right */}
                  <div className="hidden sm:flex flex-col items-end gap-0.5">
                    <span className="text-xs text-muted-foreground font-mono">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pl-12">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <span>{exp.location}</span>
                  <span>•</span>
                  <span>{exp.type}</span>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground/50 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}
