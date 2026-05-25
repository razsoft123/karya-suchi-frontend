import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";

export default function AuthLayout() {
  return (
    <div className="w-full min-h-dvh flex justify-center items-center">
      <Toaster position="top-right" reverseOrder={false} />
      <Outlet />
    </div>
  );
}
