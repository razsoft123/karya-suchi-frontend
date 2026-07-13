import type { Task } from "./types";

export const fakeTasksToday: Task[] = [
  {
    id: "1",
    title: "Design Landing Page",
    description:
      "Create a modern and responsive landing page design with hero section, features overview, and call-to-action buttons. Include wireframes and high-fidelity mockups for desktop and mobile devices.",
    completed: true,
    dueDate: "2026-06-02",
    priority: "high",
    workspace: "Personal",
  },
  {
    id: "2",
    title: "Fix Authentication Bug",
    description:
      "Resolve the issue where users are unable to log out properly and sessions persist after logout. Investigate token expiration logic and implement proper session cleanup in the backend.",
    completed: true,
    dueDate: "2026-06-02",
    priority: "high",
    workspace: "Karaya Suchi",
  },
  {
    id: "3",
    title: "Prepare Interview",
    description:
      "Study system design patterns, review coding interview problems, and practice mock interviews. Prepare talking points about past projects and clarify technical concepts for Q&A session.",
    completed: false,
    dueDate: "2026-06-02",
    priority: "medium",
    workspace: "Interview Prep",
  },
  {
    id: "4",
    title: "Deploy Backend",
    description:
      "Deploy the latest backend API changes to the production environment. Run migration scripts, update environment variables, and verify all endpoints are responding correctly after deployment.",
    completed: false,
    dueDate: "2026-06-02",
    priority: "high",
    workspace: "Personal",
  },
];

export const fakeAllTasks: Task[] = [
  ...fakeTasksToday,
  {
    id: "5",
    title: "Code Review",
    description:
      "Review pull requests from team members, provide constructive feedback on code quality, and approve or request changes. Check for adherence to coding standards and best practices.",
    completed: false,
    dueDate: "2026-06-03",
    priority: "medium",
    workspace: "Karaya Suchi",
  },
  {
    id: "6",
    title: "Update Documentation",
    description:
      "Update API documentation with new endpoints and changes. Include examples, request/response schemas, and error handling guidelines for developers.",
    completed: false,
    dueDate: "2026-06-05",
    priority: "low",
    workspace: "Personal",
  },
  {
    id: "7",
    title: "Database Migration",
    description:
      "Execute planned database schema migration with index optimization. Ensure data integrity, create backups before migration, and monitor performance after the upgrade is complete.",
    completed: false,
    dueDate: "2026-05-31",
    priority: "high",
    workspace: "Personal",
  },
];
