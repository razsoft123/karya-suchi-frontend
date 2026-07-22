import { Calendar } from "lucide-react";
export default function ImportantInfoCard() {
  return (
    <div className="font-inter min-w-64 px-6 py-2 border border-app-border rounded-lg flex items-center gap-2">
      <div>
        <Calendar />
      </div>
      <div className="flex flex-col flex-start px-2">
        <div>
          <span className="font-inter text-xl font-bold">6</span>
        </div>
        <div>
          <p className="font-inter font-base">Task due today</p>
          <p className="font-inter text-sm text-gray-500">2 overdue</p>
        </div>
      </div>
    </div>
  );
}
