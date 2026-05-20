import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="w-full flex  justify-between px-4 py-2">
      <div className="text-lg font-bold">Karaya Suchi</div>
      <div className="flex">
        <ul className="flex gap-2 text-base font-semibold">
          <li>
            <NavLink to="/feature">Feature</NavLink>
          </li>
          <li>
            <NavLink to="/help">Help</NavLink>
          </li>
          <li>
            <NavLink to="/login">Get Started</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
