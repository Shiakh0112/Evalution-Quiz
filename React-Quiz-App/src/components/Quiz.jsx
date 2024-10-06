import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentQuestionIndex,
  incrementScore,
  resetQuiz,
} from "../redux/quizSlice";
import Question from "./Question";
import { Button, Box, Text, VStack, Card, CardBody } from "@chakra-ui/react";
import quizData from "../data/quizData";

const Quiz = () => {
  const dispatch = useDispatch();
  const { currentQuestionIndex, name, numQuestions, score } = useSelector(
    (state) => state.quiz
  );
  const [options, setOptions] = React.useState([]);
  const [timer, setTimer] = React.useState(20);

  useEffect(() => {
    const currentQuestion = quizData.results[currentQuestionIndex];
    const allOptions = [
      ...currentQuestion.incorrect_answers,
      currentQuestion.correct_answer,
    ];
    setOptions(allOptions.sort(() => Math.random() - 0.5));

    const timerDuration =
      currentQuestion.difficulty === "hard"
        ? 10
        : currentQuestion.difficulty === "medium"
        ? 15
        : 20;
    setTimer(timerDuration);

    const timerId = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          handleNextQuestion();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [currentQuestionIndex]);

  const handleAnswer = (answer) => {
    const currentQuestion = quizData.results[currentQuestionIndex];
    if (answer === currentQuestion.correct_answer) {
      dispatch(incrementScore());
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < numQuestions - 1) {
      dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1));
    } else {
      // Handle quiz completion logic here
    }
  };

  return (
    <Box p={5}>
      <VStack spacing={4} align="stretch">
        <Card>
          <CardBody>
            <Text fontSize="2xl" fontWeight="bold">
              Question {currentQuestionIndex + 1} of {numQuestions}
            </Text>
            <Text fontSize="xl" color="teal.500">
              Timer: {timer}
            </Text>
            <Question
              question={quizData.results[currentQuestionIndex]}
              options={options}
              onAnswer={handleAnswer}
            />
            <Button
              onClick={handleNextQuestion}
              mt={4}
              colorScheme="teal"
              variant="solid"
            >
              Next Question
            </Button>
            <Text fontSize="xl" mt={4}>
              Your Score: {score}
            </Text>
          </CardBody>
        </Card>
      </VStack>
    </Box>
  );
};

export default Quiz;
