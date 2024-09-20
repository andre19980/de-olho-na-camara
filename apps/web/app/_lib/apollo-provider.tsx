"use client";

import { HttpLink, ApolloLink } from "@apollo/client";
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
  SSRMultipartLink
} from "@apollo/experimental-nextjs-app-support";


function makeClient() {
  const httpLink = new HttpLink({
    uri: process.env.NODE_ENV === "production"
      ? process.env.PRODUCTION_API_URL
      : process.env.LOCAL_API_URL
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
    devtools: {
      enabled: true,
    },
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
