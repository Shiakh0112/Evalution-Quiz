import { Routes, Route } from "react-router-dom";
import QuizSetup from "./components/QuizSetup";
import Quiz from "./components/Quiz";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<QuizSetup />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>
  );
}

export default App;
