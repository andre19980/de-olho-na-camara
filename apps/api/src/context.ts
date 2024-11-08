import { CamaraDeputadosAPI } from "./datasources/deputados-api";

export type DataSourceContext = {
  dataSources: {
    camaraDeputadosAPI: CamaraDeputadosAPI;
  };
};
