import type { Deadline } from "./types";

export const fakeDeadlines: Deadline[] = [
  {
    id: "1",
    title: "Tomorrow Frontend Review",
    dueDate: "2026-06-03",
    status: "due-soon",
  },
  {
    id: "2",
    title: "Project Submission",
    dueDate: "2026-06-10",
    status: "upcoming",
  },
  {
    id: "3",
    title: "Release Planning",
    dueDate: "2026-06-15",
    status: "upcoming",
  },
  {
    id: "4",
    title: "Bug Fix Deadline",
    dueDate: "2026-05-31",
    status: "overdue",
  },
];
