"use client";

import classes from "./page.module.css";
import { Unstable_Grid2 as Grid } from "@repo/ui";
import Image from "next/image";
import { Suspense } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import Autocomplete from "@/app/components/autocomplete";
import Table from "@/app/components/table";

interface PageProps {
  searchParams?: {
    nome?: string;
    pagina?: string;
  }
}

export default function Page({ searchParams }: PageProps): JSX.Element {
  const { pagina } = searchParams ?? {};
  const { replace } = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!pagina) {
      const params = new URLSearchParams(searchParams);
      params.set('pagina', '1');

      replace(`${pathname}?${params.toString()}`);
    }
  }, []);

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
          <Suspense fallback={<div>Loading...</div>}>
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
          <Suspense fallback={<div>Loading...</div>}>
            <Table />
          </Suspense>
        </Grid>
      </Grid>
    </main>
  );
}
