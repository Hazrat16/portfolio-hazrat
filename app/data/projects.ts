import type { Project } from "./types";

export const projects: Project[] = [
  {
    name: "SmartCrowd",
    type: "Team Project",
    description:
      "FinTech platform frontend focused on performance, multilingual UX, and scalable UI architecture.",
    stack: ["React", "Redux", "Styled-components"],
    links: { client: "", server: "", live: "" },
  },
  {
    name: "Urban Eats",
    type: "Personal Project",
    description:
      "Full-stack restaurant platform with CI/CD automation that reduced deployment time and manual errors.",
    stack: ["React", "Node.js", "GitHub Actions", "Docker"],
    links: { client: "", server: "", live: "" },
  },
  {
    name: "SmartJob Hub",
    type: "Personal Project",
    description:
      "Job platform for seekers and employers with search, profile management, applications, and analytics.",
    stack: ["Next.js", "Express.js", "MongoDB"],
    links: { client: "", server: "", live: "" },
  },
  {
    name: "TalkSphere",
    type: "Personal Project",
    description:
      "Real-time chat system for SmartJob Hub using Socket.IO with Next.js frontend and TypeScript backend.",
    stack: ["Next.js", "TypeScript", "Socket.IO", "Tailwind CSS"],
    links: { client: "", server: "", live: "" },
  },
];
