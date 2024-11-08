import { RESTDataSource } from "@apollo/datasource-rest";
import { ResponseModel, DeputadoAllModel, DeputadoOneModel } from "../models";

export class CamaraDeputadosAPI extends RESTDataSource {
  baseURL = "https://dadosabertos.camara.leg.br/api/v2/";

  async getDeputados(
    page?: string | null,
    items?: string | null,
    query?: string | null,
  ) {
    const params = [];

    page && params.push(`pagina=${page}`);
    items && params.push(`itens=${items}`);
    query && params.push(`nome=${query}`);

    const path =
      "deputados" + (params.length > 0 ? "?" + params.join("&") : "");
    const { dados } = await this.get<ResponseModel<DeputadoAllModel[]>>(path);

    return dados;
  }

  async getDeputado(id: string) {
    const { dados } = await this.get<ResponseModel<DeputadoOneModel>>(
      `deputados/${encodeURIComponent(id)}`,
    );

    const deputado = {
      id: dados.id,
      uri: dados.uri,
      nome: dados.ultimoStatus.nomeEleitoral,
      siglaPartido: dados.ultimoStatus.siglaPartido,
      siglaUf: dados.ultimoStatus.siglaUf,
      idLegislatura: dados.ultimoStatus.idLegislatura,
      urlFoto: dados.ultimoStatus.urlFoto,
      email: dados.ultimoStatus.email,
      telefone: dados.ultimoStatus.gabinete.telefone,
    };

    return deputado;
  }
}
