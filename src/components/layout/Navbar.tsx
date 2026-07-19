// import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import navbarStyles from "./navbar.module.css";

export default function Navbar() {
  // const [theme, setTheme] = useState("light");
  // useEffect(() => {
  //   const root = window.document.documentElement;

  //   root.setAttribute("data-theme", theme);
  // }, [theme]);

  // const toggleTheme = () => {
  //   setTheme((pre: string) => {
  //     return pre === "light" ? "dark" : "light";
  //   });
  // };

  return (
    <nav className="font-inter w-full flex  justify-between px-6 py-4 border-b-2 border-b-app-border">
      <div className="text-2xl text-h1 text-heading-text font-bold">
        <NavLink to="/">Karaya Suchi</NavLink>
      </div>
      <div className="flex justify-center items-center gap-8">
        <ul className="flex justify-center items-center gap-8 text-base font-semibold">
          <li className={`${navbarStyles.navItem}`}>
            <NavLink to="/features">Features</NavLink>
          </li>
          <li className={`${navbarStyles.navItem}`}>
            <NavLink to="/help">Help</NavLink>
          </li>
          <li className="px-4 py-2 font-semibold bg-black text-white border-2 rounded-lg cursor-pointer hover:text-black hover:bg-white">
            <NavLink to="/auth/login">Get Started</NavLink>
          </li>
          {/* <button
            onClick={() => toggleTheme()}
            className="px-4 py-2 text-body-text text-base border rounded-lg cursor-pointer bg-app-bg text-app-body hover:text-white hover:bg-black"
          >
            Dark Mode
          </button> */}
        </ul>
      </div>
    </nav>
  );
}
