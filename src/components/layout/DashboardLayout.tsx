import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

export default function DashboardLayout() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Topbar />
      <div className="flex w-full">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}
