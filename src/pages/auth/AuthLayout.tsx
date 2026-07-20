import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import { NavLink } from "react-router";

export default function AuthLayout() {
  return (
    <div className="w-full min-h-dvh flex flex-col bg-linear-to-t from-app-border to-white">
      <nav className="w-full px-8 py-4">
        <div className="text-2xl font-inter text-h1 text-heading-text font-bold">
          <NavLink to="/">Karaya Suchi</NavLink>
        </div>
      </nav>
      <div className="relative w-full min-h-[80vh] flex justify-center items-center">
        <Toaster position="top-right" reverseOrder={false} />
        <Outlet />
      </div>
    </div>
  );
}
