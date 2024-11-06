import { Suspense } from "react";
import Image from "next/image";
import { Unstable_Grid2 as Grid } from "@repo/ui";

import Autocomplete from "@/app/components/autocomplete";
import Table from "@/app/components/table";

import { gql } from "./__generated__";

import classes from "./page.module.css";

export default function Page() {
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
          <Suspense>
            <Autocomplete />
          </Suspense>
        </Grid>
        <Grid
          xs={12}
          display="flex"
          flexDirection="column"
          rowGap={2}
          justifyContent="center"
        >
          <Suspense>
            <Table />
          </Suspense>
        </Grid>
      </Grid>
    </main>
  );
}
