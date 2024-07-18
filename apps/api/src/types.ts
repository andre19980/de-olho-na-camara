import { GraphQLResolveInfo } from 'graphql';
import { DeputadoModel, PartidoModel } from './models';
import { DataSourceContext } from './context';
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
  id: Scalars['ID']['output'];
  /** Identifier number of the congressperson's mandate */
  idLegislatura: Scalars['Int']['output'];
  /** Name of the congressperson */
  nome: Scalars['String']['output'];
  /** Party of the congressperson */
  partido: Partido;
  /** Federal State of the congressperson */
  siglaUf: Scalars['String']['output'];
  /** REST endpoint of congressperson's data */
  uri: Scalars['String']['output'];
  /** Url of the congressperson's photo */
  urlFoto?: Maybe<Scalars['String']['output']>;
};

/** Partido represents the party of a congressperson */
export type Partido = {
  __typename?: 'Partido';
  id: Scalars['ID']['output'];
  nome: Scalars['String']['output'];
  numeroEleitoral?: Maybe<Scalars['Int']['output']>;
  sigla: Scalars['String']['output'];
  status: PartidoStatus;
  uri: Scalars['String']['output'];
  urlFacebook?: Maybe<Scalars['String']['output']>;
  urlLogo?: Maybe<Scalars['String']['output']>;
  urlWebSite?: Maybe<Scalars['String']['output']>;
};

export type PartidoStatus = {
  __typename?: 'PartidoStatus';
  data?: Maybe<Scalars['String']['output']>;
  idLegislatura: Scalars['ID']['output'];
  situacao?: Maybe<Scalars['String']['output']>;
  totalMembros?: Maybe<Scalars['Int']['output']>;
  totalPosse?: Maybe<Scalars['Int']['output']>;
  uriMembros?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** GET deputatados */
  deputados: Array<Deputado>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Deputado: ResolverTypeWrapper<DeputadoModel>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Partido: ResolverTypeWrapper<PartidoModel>;
  PartidoStatus: ResolverTypeWrapper<PartidoStatus>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Deputado: DeputadoModel;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Partido: PartidoModel;
  PartidoStatus: PartidoStatus;
  Query: {};
  String: Scalars['String']['output'];
};

export type DeputadoResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Deputado'] = ResolversParentTypes['Deputado']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  idLegislatura?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nome?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  partido?: Resolver<ResolversTypes['Partido'], ParentType, ContextType>;
  siglaUf?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  urlFoto?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PartidoResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Partido'] = ResolversParentTypes['Partido']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nome?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  numeroEleitoral?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sigla?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['PartidoStatus'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  urlFacebook?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  urlLogo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  urlWebSite?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PartidoStatusResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['PartidoStatus'] = ResolversParentTypes['PartidoStatus']> = {
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  idLegislatura?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  situacao?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalMembros?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalPosse?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  uriMembros?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  deputados?: Resolver<Array<ResolversTypes['Deputado']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = DataSourceContext> = {
  Deputado?: DeputadoResolvers<ContextType>;
  Partido?: PartidoResolvers<ContextType>;
  PartidoStatus?: PartidoStatusResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

