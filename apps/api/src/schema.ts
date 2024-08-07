import gql from "graphql-tag";
 
export const typeDefs = gql`
  type Query {
    "GET deputatados"
    deputados(pagina: String, itens: String, query: String): [Deputado!]!
  }
   
  "Deputado represents a congressperson in the federal congress"
  type Deputado {
    "Identifier number of a congressperson"
    id: ID!
    "REST endpoint of congressperson's data"
    uri: String!
    "Name of the congressperson"
    nome: String!
    "Party of the congressperson"
    partido: Partido!
    "Federal State of the congressperson"
    siglaUf: String!
    "Identifier number of the congressperson's mandate"
    idLegislatura: Int!
    "Url of the congressperson's photo"
    urlFoto: String
    "e-mail of the congressperson"
    email: String
  }

  "Partido represents the party of a congressperson"
  type Partido {
    id: ID!
    nome: String!
    numeroEleitoral: Int
    sigla: String!
    status: PartidoStatus!
    uri: String!
    urlFacebook: String
    urlLogo: String
    urlWebSite: String
  }

  type PartidoStatus {
    data: String
    idLegislatura: ID!
    situacao: String
    totalMembros: Int
    totalPosse: Int
    uriMembros: String
  }
`;