"use client";

import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Code } from "@repo/ui/code";
import styles from "./page.module.css";

import { gql, useSuspenseQuery } from "@apollo/client";

const GET_DEPUTADOS = gql`query Deputados {
  deputados {
    id
    nome
    siglaUf
    email
  }
}`;

export default function Page(): JSX.Element {
  const { data } = useSuspenseQuery(GET_DEPUTADOS);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          examples/basic&nbsp;
          <Code className={styles.code}>web</Code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"
            rel="noopener noreferrer"
            target="_blank"
          >
            By{" "}
            <Image
              alt="Vercel Logo"
              className={styles.vercelLogo}
              height={24}
              priority
              src="/vercel.svg"
              width={100}
            />
          </a>
        </div>
      </div>

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.logos}>
            <div className={styles.circles}>
              <Image
                alt="Turborepo"
                height={614}
                src="circles.svg"
                width={614}
              />
            </div>

            <div className={styles.logo}>
              <Image
                alt=""
                height={120}
                priority
                src="turborepo.svg"
                width={120}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        {JSON.stringify(data)}
      </div>
    </main>
  );
}
