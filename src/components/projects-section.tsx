"use client";

import { ExternalLink, Github, Trophy, Youtube } from "lucide-react";
import { SiX, SiLinkedin } from "react-icons/si";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: "project-0",
    title: "HiddenAI",
    description:
      "Desktop app that stay hidden from meeting apps, screen shares & recordings. Easy AI chat, notes, hide other apps & more.",
    liveUrl: "https://www.hiddenai.cc/",
    twitterUrl: "https://x.com/HiddenAIapp",
    technologies: ["Desktop App", "Windows", "Privacy", "AI"],
    image: "/hiddenai.png",
    isHackathonWinner: false,
  },
  {
    id: "project-hideanytext",
    title: "HideAnyText",
    description:
      "Go beyond encryption: hide your messages in 20+ unique formats. Whether you are learning about cryptography, protecting your privacy, or just having fun with hidden messages, HideAnyText provides a secure, client-side environment where your data never leaves your device unencrypted.",
    liveUrl: "https://www.hideanytext.com/",
    youtubeUrl: "https://www.youtube.com/@HideAnyText",
    technologies: ["Web App", "Cryptography", "Steganography", "Privacy"],
    image: "/hideanytext.png",
    isHackathonWinner: false,
  },
  {
    id: "project-aikitty",
    title: "AIkitty",
    description:
      "AIkitty is a marketplace of full-stack AI SaaS templates built for developers and creators using ComfyUI, Replicate, FAL.ai, and other generative tools.",
    liveUrl: "https://aikitty.cc/",
    technologies: ["Marketplace", "AI SaaS", "Templates", "Full-Stack"],
    image: null,
    isHackathonWinner: false,
  },
  {
    id: "project-aiapp",
    title: "AIapp",
    description:
      "Extensive suite of 40+ web apps, crafted without AI, offering diverse solutions for your needs. From productivity tools to creative platforms, find the right applications for your tasks.",
    liveUrl: "https://aiapp.gg/",
    linkedinUrl: "https://www.linkedin.com/company/aiapp-gg/",
    technologies: ["Web Apps", "Productivity", "SaaS", "Tools"],
    image: "/aiapp.png",
    isHackathonWinner: false,
  },
  {
    id: "project-face-looker",
    title: "Face-looker",
    description:
      "Turn Any Real Face Photo Into a Cursor-Tracking Character",
    githubUrl: "https://github.com/shahtab123/Face-looker",
    youtubeUrl: "https://youtu.be/fGfVgGhYsq0?si=N6tuL6WlHi4quYRq",
    technologies: ["Web App", "Face Tracking", "Interactive", "Replicate"],
    image: null,
    isHackathonWinner: false,
  },
  {
    id: "project-comfyui-wan",
    title: "ComfyUI WAN 2.2",
    description:
      "Create your own Serverless AI Video Generation App with network storage, model downloads, JupyterLab setup, serverless endpoints, and web app testing.",
    youtubeUrl: "https://www.youtube.com/watch?v=PmDutyfWSug",
    technologies: ["ComfyUI", "Serverless", "AI Video", "RunPod"],
    image: null,
    isHackathonWinner: false,
  },
  {
    id: "project-captureproai",
    title: "CaptureProAI",
    description:
      "AI-Powered Screenshot & Screen Recording Extension (30+ features)",
    youtubeUrl: "https://www.youtube.com/watch?v=hgz1arFnC4c",
    technologies: ["Chrome Extension", "AI", "Screenshot", "Screen Recording"],
    image: "/capturepro.png",
    isHackathonWinner: false,
  },
  {
    id: "project-1",
    title: "Gemini Spark: AI-Powered Chrome Extension",
    description:
      "Chrome Extension with 15+ AI features powered by Gemini Nano, boosting productivity with smarter emails, docs, sheets, slides, chat, and real-time summaries!",
    devpostUrl: "https://devpost.com/software/gemini-spark-ai-powered-chrome-extension-with-15-features",
    githubUrl: "https://github.com/shahtab123/Gemini-Spark",
    technologies: ["Chrome Extension", "JavaScript", "Gemini Nano", "AI"],
    image: null,
    isHackathonWinner: false,
  },
  {
    id: "project-2",
    title: "Finwise",
    description:
      "Simplifying financial management with AI-powered insights. Track, plan, and optimize your finances effortlessly—all in one app designed for smarter money decisions.",
    githubUrl: "https://github.com/shahtab123/finwise",
    youtubeUrl: "https://www.youtube.com/watch?v=YB1OQfGoWMg",
    technologies: ["AI", "Financial Management", "Web App"],
    image: null,
    isHackathonWinner: true,
  },
  {
    id: "project-3",
    title: "AI Animation Studio",
    description:
      "Create, design, and edit complete AI-powered animation videos all in one seamless app built with Google AI Studio and Cloud Run.",
    liveUrl: "https://easy-animation-493563251035.us-west1.run.app/",
    githubUrl: "https://github.com/shahtab123/Cloud-Run-Hackathon",
    devpostUrl: "https://devpost.com/software/ai-animation-studio",
    technologies: ["AI", "Animation", "Google AI Studio", "Cloud Run"],
    image: null,
    isHackathonWinner: false,
  },
  {
    id: "project-4",
    title: "SouL ID: Web3 Identity",
    description:
      "SouL ID lets people without formal IDs create a Web3 identity, mint non-transferable skill tokens, and get AI help for jobs and support using a simple and secure wallet.",
    liveUrl: "https://soulid-ui.vercel.app/",
    githubUrl: "https://github.com/shahtab123/soulid-ui",
    youtubeUrl: "https://www.youtube.com/watch?v=h2w9CM2HYJU",
    technologies: ["Web3", "Blockchain", "Soulbound Tokens", "AI"],
    image: null,
    isHackathonWinner: true,
  },
  {
    id: "project-5",
    title: "Equalhub",
    description:
      "Dynamic platform driving gender equality and reducing inequalities through interactive learning, community engagement, and real-time impact measurement.",
    liveUrl: "https://gnec-equalhub-l5cj.vercel.app/",
    githubUrl: "https://github.com/shahtab123/gnec_equalhub",
    youtubeUrl: "https://www.youtube.com/watch?v=FeuDwzZCtdo",
    technologies: ["Web App", "SDG 5", "SDG 10", "Social Impact"],
    image: null,
    isHackathonWinner: false,
  },
];

export function ProjectsSection() {
  return (
    <section className="py-4">
      <h2 className="text-lg font-semibold mb-6">Projects</h2>

      <div className="grid gap-4">
        {projects
          .filter(
            (project) =>
              project.id === "project-0" ||
              project.id === "project-hideanytext" ||
              project.id === "project-captureproai" ||
              project.id === "project-aiapp"
          )
          .sort((a, b) => {
            const order = [
              "project-0",
              "project-hideanytext",
              "project-captureproai",
              "project-aiapp",
            ];
            return order.indexOf(a.id) - order.indexOf(b.id);
          })
          .map((project) => (
          <div
            key={project.id}
            className={`group relative rounded-lg border bg-card overflow-hidden transition-all hover:shadow-md ${
              project.id === "project-0"
                ? "border-red-500/50 hover:border-red-500"
                : project.isHackathonWinner
                ? "border-yellow-500/50 hover:border-yellow-500"
                : "hover:border-foreground/20"
            }`}
          >
            <div className="flex flex-col sm:flex-row">
              {/* Project thumbnail */}
              <div className="relative h-32 sm:h-auto sm:w-40 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center shrink-0 overflow-hidden p-1">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain"
                  />
                ) : (
                  <span className="text-2xl font-bold text-muted-foreground/30">
                    {project.title.charAt(0)}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 p-5">
                <div className="flex flex-col gap-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold tracking-tight text-lg">
                        {project.title}
                      </h3>
                      {project.isHackathonWinner && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-yellow-500/10 px-2 py-1 text-xs font-medium text-yellow-600 dark:text-yellow-400 border border-yellow-500/20">
                          <Trophy className="h-3 w-3" />
                          Hackathon Winner
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ExternalLink className="h-3 w-3" />
                          <span>Live</span>
                        </a>
                      )}
                      {project.devpostUrl && (
                        <a
                          href={project.devpostUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ExternalLink className="h-3 w-3" />
                          <span>Devpost</span>
                        </a>
                      )}
                      {project.youtubeUrl && (
                        <a
                          href={project.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Youtube className="h-3 w-3" />
                          <span>YouTube</span>
                        </a>
                      )}
                      {project.twitterUrl && (
                        <a
                          href={project.twitterUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                          title="X (Twitter)"
                        >
                          <SiX className="h-3 w-3" />
                        </a>
                      )}
                      {project.linkedinUrl && (
                        <a
                          href={project.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                          title="LinkedIn"
                        >
                          <SiLinkedin className="h-3 w-3" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github className="h-3 w-3" />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Link href="/projects">
          <Button variant="outline" size="sm">
            Show All Projects
          </Button>
        </Link>
      </div>
    </section>
  );
}
