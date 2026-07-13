import type { Note } from "./types";

export const fakeNotes: Note[] = [
  {
    id: "1",
    title: "Project Architecture",
    content:
      "Frontend: React + TypeScript, Backend: Node.js, Database: MongoDB",
    createdAt: "2026-05-28",
    workspace: "Karaya Suchi",
  },
  {
    id: "2",
    title: "Interview Preparation",
    content: "Topics: System Design, Data Structures, Algorithms",
    createdAt: "2026-05-25",
    workspace: "Interview Prep",
  },
  {
    id: "3",
    title: "Karaya Suchi Roadmap",
    content: "Phase 1: MVP, Phase 2: Advanced features, Phase 3: Mobile app",
    createdAt: "2026-05-20",
    workspace: "Karaya Suchi",
  },
  {
    id: "4",
    title: "Meeting Notes - Team Sync",
    content: "Discussed Q2 goals and upcoming releases",
    createdAt: "2026-06-01",
    workspace: "Personal",
  },
];
