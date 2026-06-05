import { NavLink } from "react-router";
import type { Note } from "../../utils/types";

export default function NoteCard({ note }: { note: Note }) {
  return (
    <NavLink to={`/node/${note.id}`}>
      <div className="font-inter px-4 py-4 border border-slate-300 rounded-xl">
        <span className="hidden">{note.id}</span>
        <div>
          <h3 className="text-xl font-semibold">{note.title}</h3>
        </div>
        <div className="flex mt-4 justify-between items-center">
          <div className="text-sm text-slate-300">{note.createdAt}</div>
          <div className="text-sm text-slate-300">{note.workspace}</div>
        </div>
      </div>
    </NavLink>
  );
}
