import type { User, ProductivityStats } from "./types";

export const fakeUser: User = {
  id: "1",
  name: "Rohit",
  email: "mail@example.com",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohit",
  greeting: "Good Morning",
};

export const fakeProductivityStats: ProductivityStats = {
  completedToday: 8,
  pending: 12,
  overdue: 2,
  completionRate: 84,
};
