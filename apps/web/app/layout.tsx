import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ApolloWrapper } from "@/app/_lib/apollo-provider";
import { AppRouterCacheProvider } from "@repo/ui";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "De Olho na Câmara",
  description: "Palataforma pública para análise e pesquisa sobre Deputados",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloWrapper>
          <AppRouterCacheProvider>
            {children}
          </AppRouterCacheProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
