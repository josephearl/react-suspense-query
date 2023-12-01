import { type JSX, type PropsWithChildren, createContext } from "react";
import { PokedexService } from "@/domain/PokedexService.ts";

export const PokedexServiceContext = createContext<PokedexService | undefined>(
  undefined,
);

export interface PokedexServiceProviderProps extends PropsWithChildren {
  service: PokedexService;
}

export function PokedexServiceProvider({
  service,
  children,
}: PokedexServiceProviderProps): JSX.Element {
  return (
    <PokedexServiceContext.Provider value={service}>
      {children}
    </PokedexServiceContext.Provider>
  );
}
