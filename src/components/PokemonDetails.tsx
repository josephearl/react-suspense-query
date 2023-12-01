import { type JSX } from "react";
import type { PokedexEntry } from "@/domain/Pokedex.d.ts";

export interface PokemonDetailsProps {
  pokemon: PokedexEntry;
}

export function PokemonDetails({ pokemon }: PokemonDetailsProps): JSX.Element {
  return (
    <>
      <dl>
        <dt>Name</dt>
        <dd>{pokemon.name}</dd>
        <dt>Height</dt>
        <dd>{pokemon.height}</dd>
        <dt>Weight</dt>
        <dd>{pokemon.weight}</dd>
        <dt>Base exp</dt>
        <dd>{pokemon.baseExperience}</dd>
      </dl>
    </>
  );
}
