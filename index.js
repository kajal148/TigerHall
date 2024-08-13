import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/apolloClient";
import { SearchProvider } from "./context/SearchContext";
import theme from './theme';

const root = createRoot(document.getElementById("root"));
root.render(
    <ChakraProvider theme={theme}>
        <ApolloProvider client={client}>
            <SearchProvider>
                <App />
            </SearchProvider>
        </ ApolloProvider>
    </ChakraProvider>
);