import React, { useEffect } from "react";
import { Box } from "@chakra-ui/layout";

import "../App.css";
import Hero from "../components/home/Hero";
import ThreeAdjectives from "../components/home/ThreeAdjectives";
import ExploreButton from "../components/home/ExploreButton";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  useEffect(() => {
    document.title = "Fabrizio Piperno | Home 🏠"
  })
  return (
    <Box>
      <Hero />
      <ThreeAdjectives />
      <ExploreButton />
    </Box>
  );
};

export default Home;
