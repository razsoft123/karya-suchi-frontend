import { NavLink } from "react-router";

import logo from "./../../assets/img/ks-logo-128.png";
import avatar from "./../../assets/img/panda.png";

import homeOutline from "./../../assets/icons/home-outline.svg";
// import homeSolid from "./../../assets/icons/home-solid.svg";

import workspaceOutline from "./../../assets/icons/workspace-outline.svg";
// import workspaceSolid from "./../../assets/icons/workspace-solid.svg";

import arrowRight from "./../../assets/icons/arrow-right.svg";

export default function Sidebar() {
  return (
    <div className="relative w-60 border-r border-slate-300">
      <div className="px-4 py-2">
        <div className="flex py-8 gap-4 justify-center items-center border-b border-slate-300">
          <img className="w-8 h-8" src={logo} />
          <span className="font-inter font-bold text-xl">Karay Suchi</span>
        </div>
        <ul className="flex flex-col gap-2 pt-2">
          <SidebarList text="Dashboard" icon={homeOutline} to="/dashboard" />
          <SidebarList
            text="Workspace"
            icon={workspaceOutline}
            to="/workspace"
          />
        </ul>
      </div>
      <SidebarProfile avatar={avatar} />
    </div>
  );
}

interface SidebarListInterface {
  text: string;
  icon: string;
  to: string;
}

function SidebarList({ text, icon, to }: SidebarListInterface) {
  return (
    <NavLink to={to}>
      <li className="font-inter cursor-pointer flex flex-nowrap gap-2 hover:bg-slate-100 items-center text-lg bg-white rounded-sm">
        <img className="w-6 h-6" src={icon} />
        <span>{text}</span>
      </li>
    </NavLink>
  );
}

interface SidebarProfileInterface {
  avatar: string;
}

function SidebarProfile({ avatar }: SidebarProfileInterface) {
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
        <img className="w-4 h-4" src={arrowRight} />
      </div>
    </NavLink>
  );
}
