import React from 'react';
import Routes from '../Routes';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
interface ProvidersProps {}

const Providers: React.FC<ProvidersProps> = () =>{
  const theme = extendTheme({
    fonts: {
      heading: "Cascadia Code"
    },
    colors: {
      portfolio: {
        100: "#0E050F"
      }
    }
  })
  return (
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  );
}

export default Providers