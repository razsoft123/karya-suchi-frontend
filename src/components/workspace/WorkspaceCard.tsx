import type { Workspace } from "../../fakeData/types";

export default function WorkspaceCard({ workspace }: { workspace: Workspace }) {
  return (
    <div>
      <div>{workspace.name}</div>
    </div>
  );
}
