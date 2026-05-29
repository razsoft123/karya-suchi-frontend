export default function Sidebar() {
  return (
    <div className="w-40 max-w-40 border-r-2">
      <ul className="flex flex-col gap-0.5 bg-amber-300">
        <li className="px-4 py-2 font-inter text-lg bg-white">Dashboard</li>
        <li className="px-4 py-2 font-inter text-lg bg-white">Workspace</li>
        <li className="px-4 py-2 font-inter text-lg bg-white">Tasks</li>
        <li className="px-4 py-2 font-inter text-lg bg-white">Notes</li>
      </ul>
    </div>
  );
}
