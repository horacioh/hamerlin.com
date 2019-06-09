import React from "react";
import { withAuthenticator } from "aws-amplify-react";
import { Route, Switch } from "react-router-dom";
import { Global } from "@emotion/core";
import GlobalStyles from "./GlobalStyles";
import { Main } from "./Components/Main";
import { signUpConfig } from './config'
import { Header } from './Components/Header'

const Home = React.lazy(() => import("../Home"));
const Clients = React.lazy(() => import("../Clients"));

export const App = () => (
  <Main>
    <Header />
    <Global styles={GlobalStyles} />
    <React.Suspense fallback={<p>loading...</p>}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/clients" component={Clients} />
      </Switch>
    </React.Suspense>
  </Main>
);

export default withAuthenticator(App, {
  signUpConfig,
  fenerated: null,
  authenticatorComponents: [],
  theme: {},
  includeGreetings: false
});
