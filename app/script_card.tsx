import { cn } from "@/lib/utils";

// Define strict types for our narrative scripts
export interface ScriptDetails {
  id: string;
  actTitle: string;
  scenario: string;
  conflictType: string; // e.g., "Body Politics", "Heteronormativity"
  choiceA: {
    text: string;
    saChange: number; // e.g., +15
    aeChange: number; // e.g., -15
  };
  choiceB: {
    text: string;
    saChange: number; // e.g., -15
    aeChange: number; // e.g., +15
  };
}

interface ScriptCardProps {
  script: ScriptDetails;
  onSelectChoice: (choiceType: "A" | "B", sa: number, ae: number) => void;
  isActive: boolean;
}

export function ScriptCard({ script, onSelectChoice, isActive }: ScriptCardProps) {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl shadow-md border p-6 transition-all duration-300",
        isActive ? "border-rose-400 ring-2 ring-rose-100 opacity-100" : "border-stone-200 opacity-60"
      )}
    >
      {/* Act Header Tag */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs font-semibold uppercase tracking-wider bg-stone-100 text-stone-600 px-2.5 py-1 rounded-full">
          {script.actTitle}
        </span>
        <span className="text-xs font-medium text-rose-500 bg-rose-50 px-2.5 py-1 rounded-full">
          {script.conflictType}
        </span>
      </div>

      {/* Scenario Presentation */}
      <h3 className="text-lg font-bold text-stone-900 mb-2">The Situation</h3>
      <p className="text-stone-600 text-sm mb-6 leading-relaxed bg-stone-50 p-3 rounded-lg border border-stone-100">
        "{script.scenario}"
      </p>

      {/* The Meta Options Split Matrix */}
      <div className="space-y-4">
        {/* Choice A - Conform */}
        <button
          disabled={!isActive}
          onClick={() => onSelectChoice("A", script.choiceA.saChange, script.choiceA.aeChange)}
          className={cn(
            "w-full text-left p-4 rounded-xl border border-stone-200 hover:border-blue-400 hover:bg-blue-50/30 transition group flex flex-col justify-between gap-2",
            !isActive && "cursor-not-allowed"
          )}
        >
          <div className="flex items-start gap-2">
            <span className="font-bold text-blue-600 group-hover:scale-110 transition-transform">A.</span>
            <p className="text-sm font-medium text-stone-800">{script.choiceA.text}</p>
          </div>
          <div className="flex gap-3 text-xs mt-1 self-end bg-white px-2 py-0.5 rounded border border-stone-100">
            <span className="text-emerald-600 font-bold">SA: {script.choiceA.saChange > 0 ? `+${script.choiceA.saChange}` : script.choiceA.saChange}%</span>
            <span className="text-rose-600 font-bold">AE: {script.choiceA.aeChange > 0 ? `+${script.choiceA.aeChange}` : script.choiceA.aeChange}%</span>
          </div>
        </button>

        {/* Choice B - Subvert */}
        <button
          disabled={!isActive}
          onClick={() => onSelectChoice("B", script.choiceB.saChange, script.choiceB.aeChange)}
          className={cn(
            "w-full text-left p-4 rounded-xl border border-stone-200 hover:border-purple-400 hover:bg-purple-50/30 transition group flex flex-col justify-between gap-2",
            !isActive && "cursor-not-allowed"
          )}
        >
          <div className="flex items-start gap-2">
            <span className="font-bold text-purple-600 group-hover:scale-110 transition-transform">B.</span>
            <p className="text-sm font-medium text-stone-800">{script.choiceB.text}</p>
          </div>
          <div className="flex gap-3 text-xs mt-1 self-end bg-white px-2 py-0.5 rounded border border-stone-100">
            <span className="text-rose-600 font-bold">SA: {script.choiceB.saChange > 0 ? `+${script.choiceB.saChange}` : script.choiceB.saChange}%</span>
            <span className="text-emerald-600 font-bold">AE: {script.choiceB.aeChange > 0 ? `+${script.choiceB.aeChange}` : script.choiceB.aeChange}%</span>
          </div>
        </button>
      </div>
    </div>
  );
}