import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import HomePage from "./Pages/HomePage";
import "./App.css";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
      return null;
    });
    if (networkError) console.log(`[Network error]: ${networkError}`);
  }
});
const link = from([
  errorLink,
  new HttpLink({ uri: process.env.REACT_APP_URL }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <HomePage />
      </Router>
    </ApolloProvider>
  );
}

export default App;
