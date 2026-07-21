import { NavLink } from "react-router";
import { type LucideIcon } from "lucide-react";
import { Minus } from "lucide-react";

interface SidebarListInterface {
  text: string;
  icon: LucideIcon;
  to: string;
  active?: boolean;
}

export default function SidebarList({
  text,
  to,
  icon: Icon = Minus,
  active = false,
}: SidebarListInterface) {
  return (
    <NavLink to={to}>
      <li className="font-inter px-4 py-2 cursor-pointer flex flex-nowrap gap-2 hover:bg-slate-100 items-center text-lg bg-white rounded-sm">
        <Icon color={`${!active ? "#94a3b8" : "#000"}`} />
        <span
          style={{ color: `${!active ? "#94a3b8" : "#000"}` }}
          className={`font-inter text-base font-semibold`}
        >
          {text}
        </span>
      </li>
    </NavLink>
  );
}
