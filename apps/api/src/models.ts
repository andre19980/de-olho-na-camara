export type ResponseModel<T> = {
  dados: T;
  links: {
    rel: string;
    href: string;
  }[];
};

export type DeputadoAllModel = {
  id: number;
  uri: string;
  nome: string;
  siglaPartido: string;
  uriPartido: string;
  siglaUf: string;
  idLegislatura: number;
  urlFoto: string;
  email: string;
};

export type DeputadoOneModel = {
  id: number;
  nomeCivil: string;
  redeSocial: [string];
  ultimoStatus: {
    condicaoEleitoral: string;
    data: string;
    descricaoStatus: string;
    email: string;
    gabinete: {
      andar: string;
      email: string;
      nome: string;
      predio: string;
      sala: string;
      telefone: string;
    };
    id: number;
    idLegislatura: number;
    nome: string;
    nomeEleitoral: string;
    siglaPartido: string;
    siglaUf: string;
    situacao: string;
    uri: string;
    uriPartido: string;
    urlFoto: string;
  };
  uri: string;
  urlWebsite: string;
};
