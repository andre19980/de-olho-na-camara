import { useState, useEffect, useCallback } from "react";
import { gql } from "@/app/__generated__";
import { useSuspenseQuery } from "@apollo/client";
import { ReadonlyURLSearchParams, usePathname, useRouter } from "next/navigation";

const GET_DEPUTADOS_SEARCH_RESULT = gql(`
  query DeputadosFilter($pagina: String, $itens: String, $query: String) {
    deputados(pagina: $pagina, itens: $itens, query: $query) {
      id
      nome
      siglaUf
      email
      partido {
        sigla
      }
    }
  }
`);

const ITEMS_PER_PAGE = 5;

interface DataTableHookProps {
  searchParams: ReadonlyURLSearchParams;
  deputados: {
    title: string;
    id: string;
    subtitle: string
  }[];
}


export function useDataTable() {
  const { data: { deputados } } = useSuspenseQuery(GET_DEPUTADOS_SEARCH_RESULT);

  const mappedDeputados = deputados.map(deputado => ({
    title: deputado.nome,
    id: deputado.id,
    subtitle: `${deputado.partido.sigla} | ${deputado.siglaUf}`
  }))

  return { deputados: mappedDeputados };
}

export const useFilteredData = ({ deputados, searchParams }: DataTableHookProps) => {
  const queryParam = searchParams.get('nome');
  const decodedQuery = queryParam && decodeURIComponent(queryParam);

  const normalizedDeputados = deputados.map(deputado => deputado.title.toLocaleLowerCase());

  const data = decodedQuery
  ? deputados.filter((_, idx) =>
    normalizedDeputados[idx]?.match(decodedQuery.toLocaleLowerCase()))
  : deputados;

  return data;
}


interface PaginationHookProps {
  dataLength: number;
  searchParams: ReadonlyURLSearchParams;
}

export function usePagination({ dataLength, searchParams }: PaginationHookProps) {
  const { replace } = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState<boolean>(true);
  const pageParam = searchParams.get('pagina');
  const [page, setPage] = useState<number>(Number(pageParam));
  const totalPages = dataLength > 0 && Math.ceil(dataLength / ITEMS_PER_PAGE) || 0;

  const handleChangePage = useCallback((
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
    const params = new URLSearchParams(searchParams);
    params.set('pagina', value.toString());

    replace(`${pathname}?${params.toString()}`);
  }, []);

  useEffect(() => {
    if (!pageParam) {
      setLoading(true)
      const params = new URLSearchParams(searchParams);
      params.set('pagina', '1');
      setPage(1);
      
      replace(`${pathname}?${params.toString()}`);
    }
    setLoading(false);
  }, []);

  return {
    page,
    totalPages,
    handleChangePage,
    loading,
    items: ITEMS_PER_PAGE,
  }
}