import React from "react";
import { useDispatch } from "react-redux";
import { setQuizDetails } from "../redux/quizSlice";
import {
  Input,
  Select,
  Button,
  VStack,
  Box,
  Text,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const QuizSetup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [category, setCategory] = React.useState("Sports");
  const [difficulty, setDifficulty] = React.useState("hard");
  const [numQuestions, setNumQuestions] = React.useState(10);

  const handleStartQuiz = () => {
    dispatch(setQuizDetails({ name, category, difficulty, numQuestions }));
    navigate("/quiz");
  };

  return (
    <Box p={5}>
      <Card>
        <CardBody>
          <Text fontSize="2xl" mb={4} fontWeight="bold">
            Set up your Quiz
          </Text>
          <VStack spacing={4}>
            <Input
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Sports">Sports</option>
              <option value="General Knowledge">General Knowledge</option>
              <option value="Geography">Geography</option>
            </Select>
            <Select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </Select>
            <Select
              value={numQuestions}
              onChange={(e) => setNumQuestions(e.target.value)}
            >
              <option value={10}>10</option>
              <option value={5}>5</option>
              <option value={15}>15</option>
            </Select>
            <Button colorScheme="pink" onClick={handleStartQuiz}>
              START QUIZ
            </Button>
          </VStack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default QuizSetup;
