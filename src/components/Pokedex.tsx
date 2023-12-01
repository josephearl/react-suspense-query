import { type JSX } from "react";
import type { Pokedex } from "@/domain/Pokedex.d.ts";
import { PokemonList } from "@/components/PokemonList.tsx";

export interface PokedexProps {
  pokedex: Pokedex;
}

export function Pokedex({ pokedex }: PokedexProps): JSX.Element {
  return (
    <>
      <p>There are {pokedex.count} pokemon!</p>
      <PokemonList pokemon={pokedex.entries} />
    </>
  );
}
