import { Box } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import FourZeroFour from "./pages/FourZeroFour";
import Home from "./pages/Home";
interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
  return (
    <Router>
      <Box p="1%" className="all">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={FourZeroFour} />
        </Switch>
        <Footer />
      </Box>
    </Router>
  );
};

export default Routes;
