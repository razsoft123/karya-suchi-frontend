import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="w-full min-h-dvh flex justify-center items-center">
      <Outlet />
    </div>
  );
}
