import { createStandaloneToast } from "@chakra-ui/react";

const toast = createStandaloneToast();

export const _wipToast = () => {
  toast({
    title: "🚧 Work In Progress! 🚧",
    description:
      "Hey there! Thanks for being curious, but the site development is still in progress. Thank you for your patience!",
    status: "info",
    isClosable: true,
    position: "top",
  });
};
