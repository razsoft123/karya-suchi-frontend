import SidebarList from "./SidebarList";
import SidebarProfile from "./SidebarProfile";
import { ListTodo, House, NotebookPen, Grid2x2Plus } from "lucide-react";

import logo from "./../../assets/img/ks-logo-128.png";
import avatar from "./../../assets/img/panda.png";

export default function Sidebar() {
  return (
    <div className="font-inter relative w-60 border-r border-slate-300">
      <div className="px-4 py-2">
        <div className="flex py-8 gap-4 justify-center items-center border-b border-slate-300">
          <img className="w-8 h-8" src={logo} />
          <span className="font-inter font-bold text-xl">Karay Suchi</span>
        </div>
        <ul className="flex flex-col gap-2 pt-2">
          <SidebarList
            text="Dashboard"
            to="/dashboard"
            icon={House}
            active={true}
          />
          <SidebarList text="Tasks" to="/tasks" icon={ListTodo} />
          <SidebarList text="Notes" to="/notes" icon={NotebookPen} />
          <SidebarList text="Workspace" to="/workspace" icon={Grid2x2Plus} />
        </ul>
      </div>
      <SidebarProfile avatar={avatar} />
    </div>
  );
}
