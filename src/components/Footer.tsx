import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";
import React from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© {new Date().getFullYear()} Fabrizio Piperno</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"GitHub"} href={"https://github.com/fabry-js"}>
            <FaGithub />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"https://www.instagram.com/fabry.jp/"}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
