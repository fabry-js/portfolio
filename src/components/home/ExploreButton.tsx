import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import React from "react";
import { _wipToast } from "./workInProgressToast";

interface ExploreButtonProps {}

const ExploreButton: React.FC<ExploreButtonProps> = () => {
  const toast = useToast();

  return (
    <Box p="1%" m="5%" display="grid" placeItems="center">
      <Button variant="solid" bgColor="#170B3B" onClick={_wipToast}>
        <Text fontStyle="italic">Explore</Text>
      </Button>
    </Box>
  );
};

export default ExploreButton;
