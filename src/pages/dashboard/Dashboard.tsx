import { NavLink } from "react-router";
import TaskCard from "../../components/task/TaskCard";

import { fakeUser } from "../../fakeData";
import { fakeAllTasks } from "../../fakeData";
import { fakeNotes } from "../../fakeData";
import NoteCard from "../../components/notes/NoteCard";

export default function Dashboard() {
  return (
    <main className="px-4 py-4 border-2">
      <div className="flex flex-col gap-6">
        {/* Greeting section */}
        {/* Good Morning, Rohit 👋 You have 6 tasks due today, 2 overdue tasks, 3 upcoming deadlines */}
        <section>
          <h1 className="font-inter text-3xl font-bold">
            Good Morning, {fakeUser.name}
          </h1>
          <p className="font-inter text-body text-slate-600">
            You have 6 tasks due today, 2 overdue tasks, 3 upcoming deadlines
          </p>
        </section>

        {/* Quick actions section */}
        {/* + New Task, + New Note, + New Workspace, + Start Whiteboard */}
        <section className="flex gap-4">
          <QuickActionCard text="New Task" to="/workspace/task/new" />
          <QuickActionCard text="New Note" to="/workspace/note/new" />
          <QuickActionCard text="New Workspace" to="/workspace/new" />
        </section>

        {/* Today's task section */}
        {/* Today's Tasks ✓ Design Landing Page, ✓ Fix Authentication Bug, ○ Prepare Interview, ○ Deploy Backend */}
        <section>
          <div className="w-full grid grid-cols-4 gap-4">
            {fakeAllTasks.map((task) => {
              return <TaskCard key={task.id} task={task} />;
            })}
          </div>
        </section>

        {/* Recent Notes */}
        {/* Recent Notes, Project Architecture, Interview Preparation, Karaya Suchi Roadmap */}
        <section>
          <div className="w-full grid grid-cols-4 gap-4">
            {fakeNotes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        </section>

        {/* Upcoming deadline */}
        {/* Upcoming "Tomorrow Frontend Review",  "Jun 10 Project Submission", "Jun 15 Release Planning" */}

        {/* Workspace activity */}
        {/* Workspaces Personal 12 Tasks Karaya Suchi 34 Tasks Interview Prep 7 Tasks */}

        {/* Productivity summary */}
        {/* Completed Today: 8, Pending: 12, Overdue: 2, Completion Rate: 84% */}
      </div>
    </main>
  );
}

interface QuickActionCardType {
  text: string;
  to: string;
}

function QuickActionCard({ text, to }: QuickActionCardType) {
  return (
    <NavLink to={to}>
      <div className="border border-slate-300 px-6 py-4 rounded-2xl">
        <div className="flex gap-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <span className="font-inter text-lg">{text}</span>
        </div>
      </div>
    </NavLink>
  );
}
