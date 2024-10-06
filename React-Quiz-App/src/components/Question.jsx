import React from "react";
import { Box, Text, Button, Stack } from "@chakra-ui/react";

const Question = ({ question, options, onAnswer }) => {
  return (
    <Box mb={4}>
      <Text fontSize="xl" fontWeight="semibold" mb={4}>
        {question.question}
      </Text>
      <Stack spacing={3}>
        {options.map((option, index) => (
          <Button
            key={index}
            onClick={() => onAnswer(option)}
            colorScheme="blue"
            variant="outline"
            width="full"
            _hover={{ bg: "blue.500", color: "white" }}
          >
            {option}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default Question;
