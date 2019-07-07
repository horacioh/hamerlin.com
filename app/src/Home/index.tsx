import React from "react";
import { Heading, Container, Flex } from "@modulz/radix";

const Home = () => (
  <Container size={2} p={4} bg="tomato">
    <Flex justifyContent="space-between">
      <Heading>Home Dashboard</Heading>
    </Flex>
  </Container>
);

export default Home;
