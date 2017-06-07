import React from "react";
import { render } from "react-dom";
import {
  ApolloProvider,
  ApolloClient,
  createNetworkInterface
} from "react-apollo";
import "./assets/prism";
import "./assets/prism.css";
import "./assets/rocket-refetch.css";

import Presentation from "./src";

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    // uri: "https://kzxv94v37.lp.gql.zone/graphql"
    uri: "http://localhost:7007/graphql",
    headers: {
      mode: "no-cors"
    }
  })
});

render(
  <ApolloProvider client={client}><Presentation /></ApolloProvider>,
  document.getElementById("root")
);
