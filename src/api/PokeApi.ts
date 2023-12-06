import { delay } from "@/utils/delay.ts";

export interface PokemonResult {
  name: string;
  url: string;
}

export interface AllPokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonResult[];
}

export interface PokemonResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
}

export interface PokeApi {
  getAllPokemon(): Promise<AllPokemonResponse>;
  getPokemon(id: number): Promise<PokemonResponse>;
}

export class PokeApiClient implements PokeApi {
  private apiCallCount = 0;

  constructor(private readonly baseUrl: string) {}

  async getAllPokemon(): Promise<AllPokemonResponse> {
    await delay(1000);
    this.failEveryOtherCall();
    const res = await fetch(`${this.baseUrl}/pokemon?limit=150`);
    return await res.json();
  }

  async getPokemon(id: number): Promise<PokemonResponse> {
    await delay(1000);
    this.failEveryOtherCall();
    const res = await fetch(`${this.baseUrl}/pokemon/${id}`);
    return await res.json();
  }

  private failEveryOtherCall(): void {
    if (this.apiCallCount++ % 2 === 0) {
      throw new Error("Failed to fetch pokemon");
    }
  }
}
