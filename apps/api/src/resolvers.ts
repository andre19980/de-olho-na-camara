import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    deputados: (_, __, { dataSources }) => {
      return dataSources.camaraDeputadosAPI.getDeputados();
    },
  },
};
