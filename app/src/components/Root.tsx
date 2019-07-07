import React from "react";
import Amplify from "aws-amplify";
import AWSConfig from "../aws-exports";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { RadixProvider } from "@modulz/radix";
import { ScreenTitleProvider } from "./ScreenTitle";
import App from "./App";

Amplify.configure(AWSConfig);

const client = new ApolloClient();

// Here will live all the providers available

export function Root() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <RadixProvider>
          <ScreenTitleProvider initialTitle="Hamerlin App">
            <App />
          </ScreenTitleProvider>
        </RadixProvider>
      </ApolloProvider>
    </Router>
  );
}
