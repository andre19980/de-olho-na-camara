import { RESTDataSource } from "@apollo/datasource-rest";
import { ResponseModel, DeputadoModel, PartidoModel } from "../models";

export class CamaraDeputadosAPI extends RESTDataSource {
  baseURL = "https://dadosabertos.camara.leg.br/api/v2/";

  async getDeputados() {
    const { dados } = await this.get<ResponseModel<DeputadoModel[]>>("deputados");

    return dados;
  }

  async getPartido(partidoId: number) {
    const { dados } = await this.get<ResponseModel<PartidoModel>>(`partidos/${encodeURIComponent(partidoId)}`);

    return dados;
  }
}
