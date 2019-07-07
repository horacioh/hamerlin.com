import React from "react";
import { Heading, Container, Flex } from "@modulz/radix";
import { Switch, Route, RouteComponentProps } from "react-router-dom";

function ClientsRoot() {
  return (
    <Container size={2} p={4} bg="tomato">

      <Flex justifyContent="space-between">
        <Heading>Clients</Heading>
      </Flex>
    </Container>
  );
}

interface ClientsProps {}

function Clients({ match }: RouteComponentProps<ClientsProps>) {
  return (
    <Switch>
      <Route exact path={match.path} component={ClientsRoot} />
    </Switch>
  );
}

export default Clients;
