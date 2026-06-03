import { NavLink } from "react-router";
import type { Task } from "../../utils/types";

export default function TaskCard({ task }: { task: Task }) {
  return (
    <div className="font-inter flex flex-col gap-4 border border-slate-300 px-4 py-4 rounded-xl">
      <span className="hidden">{task.id}</span>
      <span className="hidden">{task.workspace}</span>

      <div className="flex justify-between items-center capitalize">
        <div
          className={`${task.priority === "high" ? "text-red-500" : task.priority === "medium" ? "text-yellow-500" : "text-slate-600"}`}
        >
          {task.priority}
        </div>
        <div
          className={`${task.completed ? "text-green-500" : "text-blue-500"}`}
        >
          {task.completed ? "completed" : "To do"}
        </div>
      </div>

      <div className="flex gap-2 flex-col">
        <h3 className="text-xl font-semibold">{task.title}</h3>
        <p className="text-body text-slate-600">{task.description}</p>
      </div>
      <div className="flex justify-between items-center capitalize">
        <div>{task.dueDate}</div>
        <NavLink to="/task/task-id">
          <span className="border border-slate-300 duration-300 hover:bg-slate-300 px-4 py-2 rounded-lg">
            Start Task
          </span>
        </NavLink>
      </div>
    </div>
  );
}
