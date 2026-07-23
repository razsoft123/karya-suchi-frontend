import { NavLink } from "react-router";
import type { Note } from "../../utils/types";
import { EllipsisVertical, Layers } from "lucide-react";

export default function NoteCard({ note }: { note: Note }) {
  return (
    <NavLink to={`/node/${note.id}`}>
      <div className="font-inter flex flex-col gap-6 px-6 py-6 border border-slate-300 rounded-xl">
        <span className="hidden">{note.id}</span>
        <div className="flex w-full items-center justify-between">
          <div className="bg-gray-200 px-2 py-2 rounded-sm">
            <Layers />
          </div>
          <div className="px-2 py-2 rounded-sm hover:bg-black hover:text-white duration-300">
            <EllipsisVertical />
          </div>
        </div>

        <div className="font-inter flex flex-col gap-3">
          <h3 className="font-inter text-lg font-semibold">{note.title}</h3>
          <p className="font-inter text-body text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="flex mt-4 justify-between items-center">
          <div className="text-sm font-semibold text-slate-600">
            {note.createdAt}
          </div>
          <div className="text-sm font-semibold text-slate-600">
            {note.workspace}
          </div>
        </div>
      </div>
    </NavLink>
  );
}
