import { Suspense } from "react";
import classes from "./page.module.css";
import { Unstable_Grid2 as Grid } from "@repo/ui";
import Image from "next/image";
import Autocomplete from "@/app/components/autocomplete";
import Table from "@/app/components/table";
import Skeleton from "@/app/components/skeleton";

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
          <Suspense fallback={<Skeleton height={59} width={300} />}>
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
          <Suspense fallback={<Skeleton height={440} />}>
            <Table />
          </Suspense>
        </Grid>
      </Grid>
    </main>
  );
}
