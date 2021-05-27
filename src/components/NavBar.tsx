import { Flex, Box, Heading, Spacer, Button, Text } from "@chakra-ui/react";
import React from "react";
import { FiEdit } from "react-icons/fi";
import { _wipToast } from "./home/workInProgressToast";
interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <Flex>
      <Box p="2">
        <Heading fontStyle="italic" size="md">Fabrizio Piperno</Heading>
      </Box>
      <Spacer />
      <Box>
        <Button variant="link" mr="4" onClick={_wipToast}>
          <FiEdit color="white"/> <Text>Get In Touch</Text>
        </Button>
      </Box>
    </Flex>
  );
};

export default NavBar;
