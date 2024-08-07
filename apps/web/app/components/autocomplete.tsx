"use client";

import { gql } from "@/app/__generated__";
import { useSuspenseQuery } from "@apollo/client";
import { useDebouncedCallback } from 'use-debounce';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Autocomplete as AutocompleMUI, TextField } from "@repo/ui";

const GET_DEPUTADOS_NAMES = gql(`
  query Deputados($pagina: String, $itens: String) {
    deputados(pagina: $pagina, itens: $itens) {
      nome
    }
  }
`);

export default function Autocomplete() {
  const { data = { deputados: [] } } = useSuspenseQuery(GET_DEPUTADOS_NAMES);

  const searchParams = useSearchParams();
  const autocompleteOptions = data.deputados.map(deputado => deputado.nome);
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((
    event: React.SyntheticEvent<Element, Event>,
    term: string | null
  ) => {
    const params = new URLSearchParams(searchParams);
    params.set('pagina', '1');

    if (term) {
      params.set('nome', encodeURIComponent(term));
    } else {
      params.delete('nome');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 600)

  return <AutocompleMUI
    disablePortal
    id="autocomplete-input"
    options={autocompleteOptions}
    sx={{ width: 300 }}
    style={{ background: "white" }}
    onInputChange={handleSearch}
    renderInput={(params) => <TextField {...params} label="Deputado" />}
  />
}

