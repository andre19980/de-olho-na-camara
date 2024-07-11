import { RESTDataSource } from "@apollo/datasource-rest";
import { DeputadosResponseModel } from "../models";

export class CamaraDeputadosAPI extends RESTDataSource {
  baseURL = "https://dadosabertos.camara.leg.br/api/v2/";

  async getDeputados() {
    const { dados } = await this.get<DeputadosResponseModel>("deputados");

    return dados;
  }
}
