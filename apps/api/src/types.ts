import { GraphQLResolveInfo } from 'graphql';
import { DataSourceContext } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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
  Deputado: ResolverTypeWrapper<Deputado>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Deputado: Deputado;
  Int: Scalars['Int']['output'];
  Query: {};
  String: Scalars['String']['output'];
};

export type DeputadoResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Deputado'] = ResolversParentTypes['Deputado']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  idLegislatura?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nome?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  siglaPartido?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  siglaUf?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  telefone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  urlFoto?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  deputado?: Resolver<ResolversTypes['Deputado'], ParentType, ContextType, RequireFields<QueryDeputadoArgs, 'id'>>;
  deputados?: Resolver<Array<ResolversTypes['Deputado']>, ParentType, ContextType, Partial<QueryDeputadosArgs>>;
};

export type Resolvers<ContextType = DataSourceContext> = {
  Deputado?: DeputadoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

