/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Deputado represents a congressperson in the federal congress */
export type Deputado = {
  __typename?: 'Deputado';
  /** e-mail of the congressperson */
  email?: Maybe<Scalars['String']['output']>;
  /** Identifier number of a congressperson */
  id: Scalars['Int']['output'];
  /** Identifier number of the congressperson's mandate */
  idLegislatura: Scalars['Int']['output'];
  /** Name of the congressperson */
  nome: Scalars['String']['output'];
  /** Party of the congressperson */
  siglaPartido?: Maybe<Scalars['String']['output']>;
  /** Federal State of the congressperson */
  siglaUf: Scalars['String']['output'];
  /** Contact number of congressperson's office */
  telefone?: Maybe<Scalars['String']['output']>;
  /** REST endpoint of congressperson's data */
  uri: Scalars['String']['output'];
  /** Url of the congressperson's photo */
  urlFoto?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** GET deputatado */
  deputado: Deputado;
  /** GET deputatados */
  deputados: Array<Deputado>;
};


export type QueryDeputadoArgs = {
  id: Scalars['String']['input'];
};


export type QueryDeputadosArgs = {
  itens?: InputMaybe<Scalars['String']['input']>;
  pagina?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

export type DeputadosQueryVariables = Exact<{
  pagina?: InputMaybe<Scalars['String']['input']>;
  itens?: InputMaybe<Scalars['String']['input']>;
}>;


export type DeputadosQuery = { __typename?: 'Query', deputados: Array<{ __typename?: 'Deputado', nome: string }> };

export type DeputadosFilterQueryVariables = Exact<{
  pagina?: InputMaybe<Scalars['String']['input']>;
  itens?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
}>;


export type DeputadosFilterQuery = { __typename?: 'Query', deputados: Array<{ __typename?: 'Deputado', id: number, nome: string, siglaUf: string, email?: string | null, siglaPartido?: string | null }> };

export type DeputadoQueryVariables = Exact<{
  deputadoId: Scalars['String']['input'];
}>;


export type DeputadoQuery = { __typename?: 'Query', deputado: { __typename?: 'Deputado', id: number, uri: string, nome: string, siglaPartido?: string | null, siglaUf: string, idLegislatura: number, urlFoto?: string | null, email?: string | null, telefone?: string | null } };


export const DeputadosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Deputados"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagina"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itens"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deputados"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagina"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagina"}}},{"kind":"Argument","name":{"kind":"Name","value":"itens"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itens"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nome"}}]}}]}}]} as unknown as DocumentNode<DeputadosQuery, DeputadosQueryVariables>;
export const DeputadosFilterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DeputadosFilter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagina"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"itens"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deputados"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagina"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagina"}}},{"kind":"Argument","name":{"kind":"Name","value":"itens"},"value":{"kind":"Variable","name":{"kind":"Name","value":"itens"}}},{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nome"}},{"kind":"Field","name":{"kind":"Name","value":"siglaUf"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"siglaPartido"}}]}}]}}]} as unknown as DocumentNode<DeputadosFilterQuery, DeputadosFilterQueryVariables>;
export const DeputadoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Deputado"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deputadoId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deputado"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deputadoId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"nome"}},{"kind":"Field","name":{"kind":"Name","value":"siglaPartido"}},{"kind":"Field","name":{"kind":"Name","value":"siglaUf"}},{"kind":"Field","name":{"kind":"Name","value":"idLegislatura"}},{"kind":"Field","name":{"kind":"Name","value":"urlFoto"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"telefone"}}]}}]}}]} as unknown as DocumentNode<DeputadoQuery, DeputadoQueryVariables>;