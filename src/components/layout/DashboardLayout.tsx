import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

export default function DashboardLayout() {
  return (
    <div className="w-full h-dvh min-h-120 flex">
      <Toaster position="top-right" reverseOrder={false} />
      <Sidebar />
      <div className="flex w-full flex-col">
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
}
