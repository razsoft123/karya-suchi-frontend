// Type definitions for fake data
export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: string;
  priority?: "high" | "medium" | "low";
  workspace?: string;
}

export interface Note {
  id: string;
  title: string;
  content?: string;
  createdAt: string;
  workspace?: string;
}

export interface Deadline {
  id: string;
  title: string;
  dueDate: string;
  status: "upcoming" | "due-soon" | "overdue";
}

export interface Workspace {
  id: string;
  name: string;
  taskCount: number;
  color?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  greeting: string;
}

export interface ProductivityStats {
  completedToday: number;
  pending: number;
  overdue: number;
  completionRate: number;
}
