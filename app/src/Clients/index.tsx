import React from "react";
import { Container, Flex, Heading } from "@modulz/radix";
import { Switch, Route, RouteComponentProps } from "react-router-dom";
import { ScreenTitle } from "../components/ScreenTitle";

interface ValueCardProps {
  title: string;
  value: string;
}

function ValueCard({ title, value }: ValueCardProps) {
  return (
    <Flex
      borderRadius="2"
      flex="1"
      border="1px solid"
      borderColor="grays.2"
      p={3}
      m={3}
      alignItems="center"
      justifyContent="space-between"
    >
      <Heading size="2" lineHeight="4">
        {title}
      </Heading>
      <Heading size="3" lineHeight="4" fontWeight="bold">
        {value}
      </Heading>
    </Flex>
  );
}

function ClientsRoot() {
  return (
    <Container maxWidth={1280}>
      <ScreenTitle title="Clients" />
      <Flex
        flexDirection={["column", "row"]}
        justifyContent="space-between"
        mt={3}
      >
        <ValueCard title="Total de Clientes" value="24" />
        <ValueCard title="Total de Clientes" value="24" />
        <ValueCard title="Total de Clientes" value="24" />
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
