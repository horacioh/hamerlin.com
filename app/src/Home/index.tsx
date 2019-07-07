import React from "react";
import { Container, Flex } from "@modulz/radix";
import { ScreenTitle } from '../components/ScreenTitle'

const Home = () => (
  <Container size={2} p={4} bg="tomato">
    <Flex justifyContent="space-between">
      <ScreenTitle title="Home" />
    </Flex>
  </Container>
);

export default Home;
