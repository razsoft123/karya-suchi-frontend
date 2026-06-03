// The file will contain information about all the types

interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: string;
  priority?: "high" | "medium" | "low";
  workspace?: string;
}

export type { Task };
