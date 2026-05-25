import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
export default function DashboardLayout() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Outlet />
    </>
  );
}
