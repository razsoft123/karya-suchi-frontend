import DashboardButton from "../../components/common/DashboardButton";
import WorkspaceCard from "../../components/workspace/WorkspaceCard";

import { fakeWorkspaces } from "../../fakeData";

export default function Workspace() {
  return (
    <div>
      <div>
        <section>
          <div>
            <DashboardButton to="/workspace/new" text="new workspace" />
          </div>
        </section>

        {/* List of recent workspace */}
        <section>
          {fakeWorkspaces.map((workspace) => (
            <WorkspaceCard key={workspace.id} />
          ))}
        </section>
      </div>
    </div>
  );
}