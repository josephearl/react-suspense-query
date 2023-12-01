export interface PokedexEntryItem {
  id: number;
  name: string;
}

export interface Pokedex {
  entries: PokedexEntryItem[];
  count: number;
}

export interface PokedexEntry extends PokedexEntryItem {
  height: number;
  weight: number;
  baseExperience: number;
}
