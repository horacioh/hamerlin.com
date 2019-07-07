/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { withAuthenticator } from "aws-amplify-react";
import { Route, Switch } from "react-router-dom";
import { Global } from "@emotion/core";
import GlobalStyles from "./GlobalStyles";
import { signUpConfig } from "./config";
import { Header } from "./Header";
import { Flex, Box } from "@modulz/radix";
import Sidebar from './Sidebar';

const HomePage = React.lazy(() => import("./HomePage"));
const ClientsPage = React.lazy(() => import("./ClientsPage"));

export const App = () => (
  <Flex
    flexDirection="row"
    css={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }}
  >
    <Global styles={GlobalStyles} />
    <Sidebar />
    <Box flex="1" as="main">
      <Header />
      <React.Suspense fallback={<p>loading...</p>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/clients" component={ClientsPage} />
        </Switch>
      </React.Suspense>
    </Box>
  </Flex>
);

export default withAuthenticator(App, {
  signUpConfig,
  fenerated: null,
  authenticatorComponents: [],
  theme: {},
  includeGreetings: false
});
