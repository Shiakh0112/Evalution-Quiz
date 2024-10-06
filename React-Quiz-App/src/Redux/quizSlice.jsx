import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  category: "Sports",
  difficulty: "hard",
  numQuestions: 10,
  currentQuestionIndex: 0,
  questions: [],
  score: 0,
  leaderboard: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuizDetails(state, action) {
      return { ...state, ...action.payload };
    },
    setCurrentQuestionIndex(state, action) {
      state.currentQuestionIndex = action.payload;
    },
    incrementScore(state) {
      state.score += 1;
    },
    addToLeaderboard(state, action) {
      state.leaderboard.push(action.payload);
    },
    resetQuiz(state) {
      return initialState;
    },
  },
});

export const {
  setQuizDetails,
  setCurrentQuestionIndex,
  incrementScore,
  addToLeaderboard,
  resetQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
