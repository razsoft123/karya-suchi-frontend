import { useEffect, useState } from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const root = window.document.documentElement;

    root.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((pre: string) => {
      return pre === "light" ? "dark" : "light";
    });
  };

  return (
    <nav className="font-inter w-full flex  justify-between px-4 py-2">
      <div className="text-lg font-bold">Karaya Suchi</div>
      <div className="flex justify-center items-center gap-2">
        <ul className="flex gap-2 text-base font-semibold">
          <li>
            <NavLink to="/feature">Feature</NavLink>
          </li>
          <li>
            <NavLink to="/help">Help</NavLink>
          </li>
          <li>
            <NavLink to="/auth/login">Get Started</NavLink>
          </li>
        </ul>
        <button
          onClick={() => toggleTheme()}
          className="px-4 font-semibold text-base border-2 bg-app-bg text-app-body"
        >
          Dark Mode
        </button>
      </div>
    </nav>
  );
}
