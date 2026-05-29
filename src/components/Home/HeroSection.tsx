import { NavLink } from "react-router";

export default function HeroSection() {
  return (
    <section className="w-full min-h-dvh flex justify-center items-center">
      <div className="font-inter flex gap-4 justify-center items-center flex-col max-w-3xl">
        <h1 className="font-inter text-display font-bold text-center">
          Organize Tasks and Notes in One Intelligent Workspace
        </h1>
        <p className="font-inter text-center text-xl font-normal">
          Karaya Suchi helps you manage tasks, capture ideas, and stay focused
          with a modern productivity system designed for individuals who want
          clarity without complexity.
        </p>
        <div className="border-2 px-4 py-2 rounded-lg hover:bg-black hover:text-white hover:duration-400">
          <NavLink to="/auth/login">Get Started</NavLink>
        </div>
        <p>Minimal interface • Fast workflow • Built for deep focus</p>
      </div>
    </section>
  );
}
