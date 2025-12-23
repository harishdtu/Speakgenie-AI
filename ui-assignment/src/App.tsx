import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import NowPlaying from "./pages/NowPlaying";
import QuizLevel from "./pages/QuizLevel";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/player" element={<NowPlaying />} />
          <Route path="/quiz" element={<QuizLevel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
