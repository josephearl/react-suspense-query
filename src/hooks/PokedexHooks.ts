import { useContext } from "react";
import type { Pokedex, PokedexEntry } from "@/domain/Pokedex.d.ts";
import { PokedexService } from "@/domain/PokedexService.ts";
import { useSuspenseQuery } from "@tanstack/react-query";
import { PokedexServiceContext } from "@/hooks/PokedexServiceContext.tsx";

function usePokedexService(): PokedexService {
  const service = useContext(PokedexServiceContext);
  if (!service) {
    throw new Error(
      "No PokedexService set, use PokedexServiceProvider to set one",
    );
  }
  return service;
}

export function usePokedex(): Pokedex {
  const service = usePokedexService();
  const { data } = useSuspenseQuery({
    queryKey: ["pokedex"],
    queryFn: () => service.getPokedex(),
  });
  return data;
}

export function usePokedexEntry(id: number): PokedexEntry {
  const service = usePokedexService();
  const { data } = useSuspenseQuery({
    queryKey: ["pokedex", id],
    queryFn: () => service.getPokedexEntry(id),
  });
  return data;
}
