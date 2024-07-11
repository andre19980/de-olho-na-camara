import gql from "graphql-tag";
 
export const typeDefs = gql`
  type Query {
    "GET deputatados"
    deputados: [Deputado!]!
  }
   
  "A Deputado represents a congressperson in the federal congress"
  type Deputado {
    "Identifier number of a congressperson"
    id: Int!
    "REST endpoint of congressperson's data"
    uri: String!
    "Name of the congressperson"
    nome: String!
    "Party of the congressperson"
    siglaPartido: String!
    "REST endpoint of party's data"
    uriPartido: String
    "Federal State of the congressperson"
    siglaUf: String!
    "Identifier number of the congressperson's mandate"
    idLegislatura: Int!
    "Url of the congressperson's photo"
    urlFoto: String
    "e-mail of the congressperson"
    email: String
  }
`;