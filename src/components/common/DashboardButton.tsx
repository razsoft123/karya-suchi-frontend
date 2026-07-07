import { NavLink } from "react-router";

interface DBObject {
  to: string;
  text: string;
}

export default function DashboardButton({ to, text }: DBObject) {
  return (
    <NavLink to={to}>
      <div className="border border-slate-300 px-6 py-4 rounded-2xl hover:bg-slate-300 duration-300">
        <div className="flex gap-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <span className="font-inter text-lg">{text}</span>
        </div>
      </div>
    </NavLink>
  );
}
