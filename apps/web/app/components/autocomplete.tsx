"use client";

import { useContext } from "react";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Autocomplete as AutocompleMUI, TextField } from "@repo/ui";
import { TableFilterContext } from "@/app/_contexts/table";

export default function Autocomplete() {
  const context = useContext(TableFilterContext);

  const searchParams = useSearchParams();
  const autocompleteOptions =
    context?.deputados.map((deputado) => deputado.nome) ?? [];
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback(
    (event: React.SyntheticEvent<Element, Event>, term: string | null) => {
      const params = new URLSearchParams(searchParams);
      params.set("pagina", "1");
      context?.setPage(1);

      if (term) {
        params.set("nome", encodeURIComponent(term));
        context?.setFilter(encodeURIComponent(term));
      } else {
        params.delete("nome");
        context?.setFilter("");
      }

      replace(`${pathname}?${params.toString()}`);
    },
    600,
  );

  return (
    <AutocompleMUI
      disablePortal
      id="autocomplete-input"
      options={autocompleteOptions}
      sx={{ width: 300 }}
      style={{ background: "white" }}
      onInputChange={handleSearch}
      renderInput={(params) => <TextField {...params} label="Deputado" />}
    />
  );
}
