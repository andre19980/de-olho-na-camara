"use client";

import { createContext, ReactNode, Dispatch, SetStateAction } from "react";

import { useState, useEffect, useCallback } from "react";
import { gql } from "@/app/__generated__";
import { useQuery } from "@apollo/client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const GET_DEPUTADOS_SEARCH_RESULT = gql(`
  query DeputadosFilter($pagina: String, $itens: String, $query: String) {
    deputados(pagina: $pagina, itens: $itens, query: $query) {
      id
      nome
      siglaUf
      email
      siglaPartido
    }
  }
`);

const ITEMS_PER_PAGE = 5;

type TableFilterContextType = {
  deputados: Array<{
    __typename?: "Deputado";
    id: number;
    nome: string;
    siglaUf: string;
    email?: string | null;
    siglaPartido?: string | null;
  }>;
  length: number;
  page: number;
  items: number;
  // eslint-disable-next-line no-unused-vars
  handleChangePage: (e: React.ChangeEvent<unknown>, value: number) => void;
  setPage: Dispatch<SetStateAction<number>>;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  loading: boolean;
};

export const TableFilterContext = createContext<TableFilterContextType | null>(
  null,
);

export function getDeputados() {
  const { data, loading } = useQuery(GET_DEPUTADOS_SEARCH_RESULT);

  return {
    deputados: data?.deputados,
    loading,
  };
}

export default function TableFilterProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { deputados = [], loading } = getDeputados();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const pageParam = searchParams.get("pagina");
  const [page, setPage] = useState<number>(Number(pageParam));
  const [filter, setFilter] = useState<string>("");

  const decodedQuery = filter !== "" && decodeURIComponent(filter);

  const normalizedDeputados = deputados.map((deputado) =>
    deputado.nome.toLocaleLowerCase(),
  );

  const data = decodedQuery
    ? deputados.filter((_, idx) =>
        normalizedDeputados[idx]?.match(decodedQuery.toLocaleLowerCase()),
      )
    : deputados;

  const handleChangePage = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
      const params = new URLSearchParams(searchParams);
      params.set("pagina", value.toString());

      replace(`${pathname}?${params.toString()}`);
    },
    [],
  );

  useEffect(() => {
    if (!pageParam) {
      const params = new URLSearchParams(searchParams);
      params.set("pagina", "1");
      setPage(1);

      replace(`${pathname}?${params.toString()}`);
    }
  }, []);

  const contextValue = {
    deputados: data,
    length: data.length,
    page,
    items: ITEMS_PER_PAGE,
    handleChangePage,
    setPage,
    filter,
    setFilter,
    loading,
  };

  return (
    <TableFilterContext.Provider value={contextValue}>
      {children}
    </TableFilterContext.Provider>
  );
}
