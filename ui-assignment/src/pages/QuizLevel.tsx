import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lightbulb, Sparkles, Target } from "lucide-react";

type Level = "Easy" | "Medium" | "Hard";

export default function QuizLevel() {
  const [selected, setSelected] = useState<Level | null>("Medium");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F7FFFB] max-w-md mx-auto px-4 pt-4 pb-28">

      {/* ===== Back ===== */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-green-600 font-medium shadow-sm"
      >
        ← Back
      </button>

      {/* ===== Title ===== */}
      <h1 className="mt-6 text-xl font-bold text-gray-900">
        Pick a challenge level
      </h1>

      {/* ===== Levels Card ===== */}
      <div className="mt-4 rounded-3xl bg-white p-4 shadow-sm space-y-4">

        {/* Easy */}
        <LevelCard
          title="Easy"
          description="Short sentences & gentle vocabulary."
          icon={<Lightbulb className="text-green-500" />}
          selected={selected === "Easy"}
          onClick={() => setSelected("Easy")}
          accent="green"
        />

        {/* Medium */}
        <LevelCard
          title="Medium"
          description="Everyday situations with detail."
          icon={<Sparkles className="text-orange-500" />}
          selected={selected === "Medium"}
          onClick={() => setSelected("Medium")}
          accent="orange"
        />

        {/* Hard */}
        <LevelCard
          title="Hard"
          description="Longer thinking and tricky choices."
          icon={<Target className="text-purple-500" />}
          selected={selected === "Hard"}
          onClick={() => setSelected("Hard")}
          accent="purple"
        />
      </div>

      {/* ===== What You'll Get ===== */}
      <section className="mt-6 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-500 p-6 text-white shadow-lg">
        <h4 className="text-xs font-semibold uppercase opacity-90">
          What you’ll get
        </h4>

        <p className="mt-2 text-xl font-bold">
          Friendly quiz with instant feedback
        </p>

        <ul className="mt-4 space-y-2 text-sm">
          <li className="flex gap-2">• Bite-sized explanations for every answer.</li>
          <li className="flex gap-2">
            • Tone automatically matches the learner profile.
          </li>
        </ul>
      </section>

      {/* ===== CTA ===== */}
      <button
        disabled={!selected}
        className={`mt-6 w-full rounded-2xl py-4 text-lg font-semibold transition
          ${
            selected
              ? "bg-green-500 text-white shadow-lg"
              : "bg-gray-300 text-gray-500"
          }`}
      >
        Generate Quiz
      </button>
    </div>
  );
}

/* ================== Components ================== */

function LevelCard({
  title,
  description,
  icon,
  selected,
  onClick,
  accent,
}: {
  title: Level;
  description: string;
  icon: React.ReactNode;
  selected: boolean;
  onClick: () => void;
  accent: "green" | "orange" | "purple";
}) {
  const accentMap = {
    green: "text-green-600 bg-green-50",
    orange: "text-orange-500 bg-orange-50",
    purple: "text-purple-500 bg-purple-50",
  };

  return (
    <button
      onClick={onClick}
      className={`w-full rounded-2xl border p-4 text-left transition
        ${
          selected
            ? "border-green-400 bg-[#FFF9EC] shadow-md"
            : "border-gray-200 bg-white"
        }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className={`font-semibold ${accentMap[accent].split(" ")[0]}`}>
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            {description}
          </p>
        </div>

        <div className="mt-1">{icon}</div>
      </div>

      {selected && (
        <span className="mt-3 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
          Selected
        </span>
      )}
    </button>
  );
}
