"use client";

import { useContext } from "react";
import { TableFilterContext } from "../_contexts/table";

import DataTable from "@repo/ui/table";
import { NextLinkComposed } from "@/app/components/link";
import Skeleton from "./skeleton";

export default function Table() {
  const context = useContext(TableFilterContext);
  const data = context?.deputados.map((deputado) => ({
    title: deputado.nome,
    id: deputado.id.toString(),
    subtitle: `${deputado.siglaPartido} | ${deputado.siglaUf}`,
  }));

  return !context?.loading ? (
    <DataTable
      data={data ?? []}
      page={context?.page ?? 0}
      items={context?.items ?? 0}
      linkComponent={NextLinkComposed}
    />
  ) : (
    <Skeleton height={440} />
  );
}
