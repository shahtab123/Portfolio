"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const education = [
  {
    id: "edu-1",
    institution: "De Montfort University",
    degree: "Master's degree, Information Technology Management",
    period: "Aug 2021 - Oct 2022",
    grade: "3.63/4",
    details: "APU-DMU Dual Degree Scheme",
    logo: "/de_montfort.webp",
  },
  {
    id: "edu-2",
    institution: "Lancaster University",
    degree: "Bachelor's degree, Information Technology",
    period: "2017 - 2020",
    grade: null,
    details: "Dual Degree (Lancaster-Sunway partnership)",
    logo: "/lancaster.jpeg",
  },
];

export function Education() {
  return (
    <section className="py-4">
      <h2 className="text-lg font-semibold mb-6">Education</h2>
      <Accordion type="single" collapsible className="w-full space-y-3">
        {education.map((edu) => {
          return (
            <AccordionItem
              key={edu.id}
              value={edu.id}
              className="border rounded-lg px-4 bg-card last:!border-b"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center justify-between w-full pr-4">
                  <div className="flex items-center gap-3">
                    {/* University Logo */}
                    <div className="relative h-9 w-9 shrink-0">
                      <Image
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-0.5 text-left">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      <span className="text-muted-foreground text-sm">
                        {edu.degree}
                      </span>
                    </div>
                  </div>
                  {/* Date on the right */}
                  <div className="hidden sm:flex flex-col items-end gap-0.5">
                    <span className="text-xs text-muted-foreground font-mono">
                      {edu.period}
                    </span>
                    {edu.grade && (
                      <span className="text-xs text-muted-foreground font-mono">
                        Grade: {edu.grade}
                      </span>
                    )}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pl-12">
                <div className="text-sm text-muted-foreground">
                  {edu.details}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}

