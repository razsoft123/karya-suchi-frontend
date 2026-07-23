// import type { Workspace } from "../../fakeData/types";

// export default function WorkspaceCard({ workspace }: { workspace: Workspace }) {
//   return (
//     <div>
//       <div>{workspace.name}</div>
//     </div>
//   );
// }

import { EllipsisVerticalIcon, Users, ListCollapse } from "lucide-react";

export default function WorkspaceCard() {
  return (
    <div className="border flex flex-col rounded-xl border-app-border overflow-hidden">
      <div className="flex flex-col gap-6 px-6 py-6 w-full">
        <div className="flex justify-between items-center">
          <div className="bg-black w-12 h-12 flex items-center justify-center rounded-lg">
            <span className="font-inter text-white text-2xl font-semibold">
              R
            </span>
          </div>
          <div>
            <EllipsisVerticalIcon />
          </div>
        </div>

        <div className="font-inter flex flex-col gap-2">
          <h3 className="font-inter text-lg font-semibold">
            Personal workspace
          </h3>
          <p className="font-inter text-body text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      <div className="w-full bg-gray-100 px-6 py-4">
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-2 items-center justify-around">
            <div>
              <Users size={16} color="#45556c" />
            </div>
            <span className="text-sm font-semibold text-slate-600">
              Members
            </span>
          </div>

          <div className="flex gap-2 items-center justify-around">
            <div>
              <ListCollapse size={16} color="#45556c" />
            </div>
            <span className="text-sm font-semibold text-slate-600">
              18 task
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
