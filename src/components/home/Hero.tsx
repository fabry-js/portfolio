import React from "react";
import { Box, Avatar, Text } from "@chakra-ui/react";

import avatar_self from "../../res/avatar_self.jpg";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <Box p="1%" m="5%" display="grid" placeItems="center">
      <Avatar size="2xl" name="Fabrizio Piperno" src={avatar_self} />
      <Text fontSize="4xl" fontStyle="italic">
        Fabrizio Piperno
      </Text>
    </Box>
  );
};

export default Hero;
