import { Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";

interface ThreeAdjectivesProps {}

const ThreeAdjectives: React.FC<ThreeAdjectivesProps> = () => {
  return (
    <Flex m="5% 0% 0% 38%" opacity="0.4">
      <Text> Web Dev | Pianist | Japan Enthusiast</Text>
    </Flex>
  );
};

export default ThreeAdjectives;
