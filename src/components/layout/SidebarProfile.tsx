import { NavLink } from "react-router";
import { ChevronRight } from "lucide-react";

interface SidebarProfileInterface {
  avatar: string;
}

export default function SidebarProfile({ avatar }: SidebarProfileInterface) {
  return (
    <NavLink to="/profile">
      <div className="absolute flex gap-2 items-center px-4 py-4 bottom-0 left-0 w-full h-16 border-t border-slate-300 hover:bg-slate-100 cursor-pointer">
        <img className="w-12 h-12 rounded-full" src={avatar} />
        <div className="flex flex-col">
          <span className="font-inter text-lg font-semibold">user name</span>
          <span className="font-inter text-xs text-slate-400">
            mail@example.com
          </span>
        </div>
        {/* <img className="w-4 h-4" src={arrowRight} /> */}
        <ChevronRight className="w-4 h-4" />
      </div>
    </NavLink>
  );
}
