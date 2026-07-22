import { NavLink } from "react-router";
import { Plus } from "lucide-react";

interface DBObject {
  to: string;
  text: string;
}

export default function DashboardButton({ to, text }: DBObject) {
  return (
    <NavLink to={to}>
      <div className="border border-slate-300 px-10 py-5 rounded-xl hover:bg-black hover:text-white hover:shadow-lg shadow-gray-600 duration-300">
        <div className="flex items-center justify-center gap-2">
          <div>
            <Plus />
          </div>
          <span className="font-inter text-base">{text}</span>
        </div>
      </div>
    </NavLink>
  );
}
