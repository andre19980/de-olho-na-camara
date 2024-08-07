import { RESTDataSource } from "@apollo/datasource-rest";
import { ResponseModel, DeputadoModel, PartidoModel } from "../models";

export class CamaraDeputadosAPI extends RESTDataSource {
  baseURL = "https://dadosabertos.camara.leg.br/api/v2/";

  async getDeputados(page?: string | null, items?: string | null, query?: string | null) {
    const params = [];

    page && params.push(`pagina=${page}`);
    items && params.push(`itens=${items}`);
    query && params.push(`nome=${query}`);

    const path = 'deputados' + (params.length > 0 ? '?' + params.join('&') : '');
    const { dados } = await this.get<ResponseModel<DeputadoModel[]>>(path);

    return dados;
  }

  async getPartido(partidoId: number) {
    const { dados } = await this.get<ResponseModel<PartidoModel>>(`partidos/${encodeURIComponent(partidoId)}`);

    return dados;
  }
}
