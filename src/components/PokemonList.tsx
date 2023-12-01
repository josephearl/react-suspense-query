import { type JSX } from "react";
import { Link } from "react-router-dom";
import type { PokedexEntryItem } from "@/domain/Pokedex.d.ts";

export interface PokedexListProps {
  pokemon: PokedexEntryItem[];
}

export function PokemonList({ pokemon }: PokedexListProps): JSX.Element {
  return (
    <ol>
      {pokemon.map(({ id, name }) => (
        <li key={id}>
          <Link to={`${id}`}>{name}</Link>
        </li>
      ))}
    </ol>
  );
}
