import ReactDOM from "react-dom/client";
import { HydratedRouter } from "react-router/dom";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import "./index.css";

ReactDOM.hydrateRoot(
  document,
  <ApolloProvider client={client}>
    <HydratedRouter />
  </ApolloProvider>
);
