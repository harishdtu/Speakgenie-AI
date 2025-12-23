import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Repeat,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function NowPlaying() {
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="px-4 pt-4">

      <header className="flex justify-between items-center mb-4">
        <button
          onClick={() => navigate("/")}
          className="text-green-600 font-semibold"
        >
          ← Stories
        </button>

        <p className="text-xs tracking-widest font-semibold">NOW PLAYING</p>

        <span className="h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center">
          7
        </span>
      </header>

      <div className="rounded-[28px] bg-white border-2 border-green-400 p-2 shadow-lg">
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
          <img src="/NowPlaying.png" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <p className="absolute top-4 inset-x-0 text-center text-xl font-bold text-yellow-200">
            Friendship and Courage
          </p>
        </div>
      </div>

      <section className="mt-5">
        <h1 className="text-xl font-extrabold">The Melody of Friendship</h1>
        <p className="text-sm text-gray-600 mt-1">
          A heartwarming story about friendship and courage
        </p>

        <button
          onClick={() => navigate("/quiz")}
          className="mt-5 w-full py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500
          text-white font-bold shadow-[0_8px_20px_rgba(34,197,94,0.45)]"
        >
          📋 Test Your Understanding · 7 Questions
        </button>
      </section>

      <section className="mt-6">
        <div className="h-2 bg-green-100 rounded-full">
          <div className="h-2 w-[30%] bg-green-500 rounded-full" />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0:00</span>
          <span>2:18</span>
        </div>
      </section>

      <footer className="mt-6 flex justify-between items-center">
        <Volume2 />
        <SkipBack />

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="h-16 w-16 rounded-full bg-gradient-to-br from-green-400 to-green-600
          text-white shadow-[0_12px_25px_rgba(34,197,94,0.6)] ring-4 ring-green-200"
        >
          {isPlaying ? <Pause size={28} /> : <Play size={28} />}
        </button>

        <SkipForward />
        <Repeat />
      </footer>
    </div>
  );
}
