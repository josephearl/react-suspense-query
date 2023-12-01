import { type JSX } from "react";
import { Link } from "react-router-dom";
import { QueryErrorBoundary } from "@/components/QueryErrorBoundary.tsx";
import { ErrorMessage } from "@/components/ErrorMessage.tsx";
import { SuspenseLoader } from "@/components/SuspenseLoader.tsx";
import { Loading } from "@/components/Loading.tsx";
import { Pokedex } from "@/components/Pokedex.tsx";
import { usePokedex } from "@/hooks/PokedexHooks.ts";

export function PokedexIndexPage(): JSX.Element {
  return (
    <>
      <h2>Pokedex</h2>
      <p>
        <Link to="../">Home</Link>
      </p>
      <QueryErrorBoundary
        fallbackRender={(props) => <ErrorMessage {...props} />}
      >
        <SuspenseLoader
          loader={usePokedex}
          childrenRender={(pokedex) => <Pokedex pokedex={pokedex} />}
          loadingFallback={<Loading />}
        />
      </QueryErrorBoundary>
    </>
  );
}

export function PokedexIndexRoute(): JSX.Element {
  return <PokedexIndexPage />;
}
