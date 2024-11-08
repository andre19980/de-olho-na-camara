import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    deputados: (_, { pagina, itens, query }, { dataSources }) => {
      return dataSources.camaraDeputadosAPI.getDeputados(pagina, itens, query);
    },
    deputado: (_, { id }, { dataSources }) => {
      return dataSources.camaraDeputadosAPI.getDeputado(id);
    },
  },
};
