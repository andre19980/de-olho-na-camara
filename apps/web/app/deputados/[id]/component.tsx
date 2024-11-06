"use client";

import { Suspense } from "react";
import { useReadQuery, QueryRef, useBackgroundQuery } from "@apollo/client";
import { Unstable_Grid2 as Grid, Card, CardContent } from "@repo/ui";
import Image from "next/image";
import { gql } from "@/app/__generated__";

import { DeputadoQuery } from "@/app/__generated__/graphql";

// import { PersonOutlined } from "@repo/ui/icons";
import classes from "./page.module.css";

const GET_DEPUTADO = gql(`
  query Deputado($deputadoId: String!) {
    deputado(id: $deputadoId) {
      id
      uri
      nome
      siglaPartido
      siglaUf
      idLegislatura
      urlFoto
      email
      telefone
    }
  }
`);

export default function DeputadoWrapper({ id }: { id: string }) {
  const [queryRef] = useBackgroundQuery(GET_DEPUTADO, {
    variables: { deputadoId: id },
  });

  return (
    <Suspense fallback={<>Loading...</>}>
      <Deputado queryRef={queryRef} />
    </Suspense>
  );
}

function Deputado({ queryRef }: { queryRef: QueryRef<DeputadoQuery> }) {
  const { data } = useReadQuery(queryRef);

  return (
    <main className={classes.main}>
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        rowSpacing={5}
      >
        <Grid display="flex" justifyContent="center" xs={12}>
          <Card className={classes.card}>
            <CardContent style={{ position: "relative" }}>
              {data.deputado.urlFoto && (
                <Image
                  priority
                  src={data.deputado.urlFoto}
                  width={280}
                  height={374}
                  alt="Deputado foto"
                />
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </main>
  );
}
