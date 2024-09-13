import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { CamaraDeputadosAPI } from "./datasources/deputados-api";

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server;

      return {
        dataSources: {
          camaraDeputadosAPI: new CamaraDeputadosAPI({ cache }),
        },
      };
    },
  });

  console.log(`
    Server is running!
    Query at ${url}
  `);
}

startApolloServer();