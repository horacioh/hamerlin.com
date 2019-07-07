/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { withAuthenticator } from "aws-amplify-react";
import { Route, Switch } from "react-router-dom";
import { Global } from "@emotion/core";
import GlobalStyles from "../App/GlobalStyles";
import { signUpConfig } from "../App/config";
import { Header } from "../App/Components/Header";
import { Flex, Box } from "@modulz/radix";
import Sidebar from './Sidebar';

const Home = React.lazy(() => import("../Home"));
const Clients = React.lazy(() => import("../Clients"));

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
    {/* main */}
    <Box flex="1" as="main">
      <Header />
      <React.Suspense fallback={<p>loading...</p>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/clients" component={Clients} />
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
