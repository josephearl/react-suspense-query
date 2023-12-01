import { type JSX } from "react";
import { Link, useParams } from "react-router-dom";
import { QueryErrorBoundary } from "@/components/QueryErrorBoundary.tsx";
import { ErrorMessage } from "@/components/ErrorMessage.tsx";
import { SuspenseLoader } from "@/components/SuspenseLoader.tsx";
import { Loading } from "@/components/Loading.tsx";
import { PokemonDetails } from "@/components/PokemonDetails.tsx";
import { usePokedexEntry } from "@/hooks/PokedexHooks.ts";

export interface PokedexEntryPageProps {
  id: number;
}

export function PokedexEntryPage({ id }: PokedexEntryPageProps): JSX.Element {
  const usePokedexEntryWithId = usePokedexEntry.bind(null, id);

  return (
    <div>
      <h2>#{id}</h2>
      <p>
        <Link to="../">Back</Link>
      </p>
      <QueryErrorBoundary
        fallbackRender={(props) => <ErrorMessage {...props} />}
      >
        <SuspenseLoader
          loader={usePokedexEntryWithId}
          childrenRender={(pokemon) => <PokemonDetails pokemon={pokemon} />}
          loadingFallback={<Loading />}
        />
      </QueryErrorBoundary>
    </div>
  );
}

function isIdValid(id: string | undefined): boolean {
  return id !== undefined && /^[1-9][0-9]*$/.test(id);
}

export function PokedexEntryRoute(): JSX.Element {
  const { id } = useParams();
  if (!isIdValid(id)) throw new TypeError(`ID ${id} is not a positive integer`);
  return <PokedexEntryPage id={Number(id)} />;
}
