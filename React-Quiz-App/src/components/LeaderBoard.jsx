import React from "react";
import { Box, Text, VStack, Card, CardBody } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Leaderboard = () => {
  const { leaderboard } = useSelector((state) => state.quiz);

  return (
    <Box p={5}>
      <Card>
        <CardBody>
          <Text fontSize="2xl" mb={4} fontWeight="bold">
            Leaderboard
          </Text>
          <VStack spacing={2} align="stretch">
            {leaderboard.length > 0 ? (
              leaderboard.map((entry, index) => (
                <Text key={index}>
                  {entry.name}: {entry.score}
                </Text>
              ))
            ) : (
              <Text>No scores available</Text>
            )}
          </VStack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default Leaderboard;
