import type { Pokedex, PokedexEntry } from "@/domain/Pokedex.d.ts";
import { type PokeApi } from "@/api/PokeApi.ts";

export class PokedexService {
  constructor(private readonly api: PokeApi) {}

  async getPokedex(): Promise<Pokedex> {
    const response = await this.api.getAllPokemon();
    const entries = response.results.map(({ name, url }) => ({
      id: Number(url.split("/")[6]),
      name,
    }));
    return { entries, count: entries.length };
  }

  async getPokedexEntry(id: number): Promise<PokedexEntry> {
    const response = await this.api.getPokemon(id);
    const { name, height, weight, base_experience } = response;
    return { id, name, height, weight, baseExperience: base_experience };
  }
}
