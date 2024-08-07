"use client";

import { useCallback, useState } from "react";
import TableMUI from "@repo/ui/table";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { gql } from "@/app/__generated__";
import { useSuspenseQuery } from "@apollo/client";
import { Unstable_Grid2 as Grid, Pagination } from "@repo/ui";

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

export default function Table() {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryParam = searchParams.get('nome');
  const pageParam = searchParams.get('pagina');
  const decodedQuery = queryParam && decodeURIComponent(queryParam);
  const [page, setPage] = useState<number>(Number(pageParam));
  
  const { data: { deputados } } = useSuspenseQuery(GET_DEPUTADOS_SEARCH_RESULT);
  const normalizedDeputados = deputados.map(deputado => deputado.nome.toLocaleLowerCase());
  
  const data = decodedQuery
    ? deputados.filter((_, idx) =>
      normalizedDeputados[idx]?.match(decodedQuery.toLocaleLowerCase()))
    : deputados;
  
  const totalPages = data.length > 0 && Math.ceil(data.length / ITEMS_PER_PAGE) || 0;

  const handleChangePage = useCallback((
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
    const params = new URLSearchParams(searchParams);
    params.set('pagina', value.toString());
    replace(`${pathname}?${params.toString()}`);
  }, []);

  return (
    <>
      <TableMUI data={data} page={page} items={ITEMS_PER_PAGE} />
      <Pagination
        count={totalPages}
        color="primary"
        page={page}
        style={{
          margin: 'auto'
        }}
        onChange={handleChangePage}
      />
    </>
  );
  
}