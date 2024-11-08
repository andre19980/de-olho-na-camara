import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    "GET deputatados"
    deputados(pagina: String, itens: String, query: String): [Deputado!]!
    "GET deputatado"
    deputado(id: String!): Deputado!
  }

  "Deputado represents a congressperson in the federal congress"
  type Deputado {
    "Identifier number of a congressperson"
    id: Int!
    "REST endpoint of congressperson's data"
    uri: String!
    "Name of the congressperson"
    nome: String!
    "Party of the congressperson"
    siglaPartido: String
    "Federal State of the congressperson"
    siglaUf: String!
    "Identifier number of the congressperson's mandate"
    idLegislatura: Int!
    "Url of the congressperson's photo"
    urlFoto: String
    "e-mail of the congressperson"
    email: String
    "Contact number of congressperson's office"
    telefone: String
  }
`;
