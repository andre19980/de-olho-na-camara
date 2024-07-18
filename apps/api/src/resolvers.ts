import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    deputados: (_, __, { dataSources }) => {
      return dataSources.camaraDeputadosAPI.getDeputados();
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
