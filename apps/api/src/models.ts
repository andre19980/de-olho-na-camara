export type DeputadosResponseModel = {
  dados: DeputadoModel[];
  links: {
    rel: string;
    href: string;
  };
}

export type DeputadoModel = {
  id: number;
  uri: string;
  nome: string;
  siglaPartido: string;
  uriPartido: string;
  siglaUf: string;
  idLegislatura: number;
  urlFoto: string;
  email: string;
}
