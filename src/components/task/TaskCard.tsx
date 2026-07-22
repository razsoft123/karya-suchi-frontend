import { NavLink } from "react-router";
import type { Task } from "../../utils/types";
import { Database, Calendar } from "lucide-react";

export default function TaskCard({ task }: { task: Task }) {
  return (
    <div className="relative font-inter flex flex-col gap-4 border border-app-border px-4 pt-4 pb-16 rounded-xl">
      <span className="hidden">{task.id}</span>
      <span className="hidden">{task.workspace}</span>

      <div className="flex justify-between items-center capitalize">
        {/* <div
          className={`bg-gray-100 ${task.priority === "high" ? "text-red-500" : task.priority === "medium" ? "text-yellow-500" : "text-slate-600"}`}
        > */}
        <div
          className={`bg-gray-200 px-2 py-1 rounded-sm font-inter text-sm font-semibold text-gray-500`}
        >
          {task.priority}
        </div>
        {/* <div
          className={`${task.completed ? "text-green-500" : "text-blue-500"}`}
        > */}
        <div
          className={`bg-gray-200 px-2 py-1 rounded-sm font-inter text-sm font-semibold text-gray-500`}
        >
          {task.completed ? "completed" : "To do"}
        </div>
      </div>
      <div className="pt-4">
        <Database size={36} strokeWidth={1.5} />
      </div>
      <div className="flex gap-2 flex-col">
        <h3 className="font-inter text-lg font-semibold">{task.title}</h3>
        <p className="font-inter text-body text-slate-600">
          {task.description}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 px-4 py-4 w-full flex justify-between items-center capitalize">
        <div className="flex gap-2 items-center">
          <div>
            <Calendar size={16} />
          </div>
          <span className="text-sm">{task.dueDate}</span>
        </div>
        <NavLink to="/task/task-id">
          <span className="text-sm bg-black text-white duration-300 hover:bg-white hover:text-black px-2 border py-1 rounded-md">
            Start Task
          </span>
        </NavLink>
      </div>
    </div>
  );
}
