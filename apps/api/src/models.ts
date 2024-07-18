export type ResponseModel<T> = {
  dados: T;
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

export type PartidoModel = {
  id: number;
  nome: string;
  numeroEleitoral: number;
  sigla: string;
  status: {
    data: string;
    idLegislatura: number;
    situacao: string;
    totalMembros: string;
    totalPosse: string;
    uriMembros: string;
  };
  uri: string;
  urlFacebook: string;
  urlLogo: string;
  urlWebSite: string;
}
