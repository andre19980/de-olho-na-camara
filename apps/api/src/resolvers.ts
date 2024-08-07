import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    deputados: (_, { pagina, itens, query }, { dataSources }) => {
      return dataSources.camaraDeputadosAPI.getDeputados(pagina, itens, query);
    },
  },
  Deputado: {
    partido: ({ uriPartido }, _, { dataSources }) => {
      const match = uriPartido.match(/\/partidos\/(\d+)/);
      const partidoId = parseInt(match?.[1] ?? "");

      return dataSources.camaraDeputadosAPI.getPartido(partidoId);
    },
  }
};
