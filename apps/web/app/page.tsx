"use client";

import classes from "./page.module.css";
import { Unstable_Grid2 as Grid } from "@repo/ui";
import Table from "@repo/ui/table";
import Autocomplete from "@repo/ui/autocomplete";
import Image from "next/image";

import { useSuspenseQuery } from "@apollo/client";
import { gql } from "@/app/__generated__";

import classesTable from './table.module.css'

const GET_DEPUTADOS = gql(`
  query Deputados {
    deputados {
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

export default function Page(): JSX.Element {
  const { data } = useSuspenseQuery(GET_DEPUTADOS);
  const autocompleteOptions = data.deputados.map(deputado => deputado.nome);

  return (
    <main className={classes.main}>
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        rowSpacing={5}
      >
        <Grid display="flex" justifyContent="center" xs={12}>
          <Image
            src="/logo-camara-deputados.png"
            width={115}
            height={115}
            alt="Logo da Câmara dos Deputados"
            priority
          />
        </Grid>
        <Grid display="flex" justifyContent="center" xs={12}>
          <Autocomplete options={autocompleteOptions}/>
        </Grid>
        <Grid xs={12}>
          <Table data={data.deputados} />
        </Grid>
      </Grid>
    </main>
  );
}
