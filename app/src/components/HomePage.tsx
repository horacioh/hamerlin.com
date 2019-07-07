import React from "react";
import { Container, Flex } from "@modulz/radix";
import { useTitle } from "./ScreenTitle";

function Home() {
  useTitle("Home");
  return (
    <Container size={2} p={4} bg="tomato">
      <Flex justifyContent="space-between" />
    </Container>
  );
}

export default Home;
