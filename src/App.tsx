import { type JSX } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import "@/App.css";
import { PokedexServiceProvider } from "@/hooks/PokedexServiceContext.tsx";
import { PokedexService } from "@/domain/PokedexService.ts";
import { PokeApiClient } from "@/api/PokeApi.ts";
import { PokedexLayout } from "@/pages/PokedexLayout.tsx";
import { PokedexErrorRoute } from "@/pages/PokedexErrorPage.tsx";
import { PokedexIndexRoute } from "@/pages/PokedexIndexPage.tsx";
import { PokedexEntryRoute } from "@/pages/[id]/PokedexEntryPage.tsx";

const client = new QueryClient();
const service = new PokedexService(
  new PokeApiClient("https://pokeapi.co/api/v2"),
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <PokedexLayout>
          <Outlet />
        </PokedexLayout>
      }
      errorElement={
        <PokedexLayout>
          <PokedexErrorRoute />
        </PokedexLayout>
      }
    >
      <Route index element={<PokedexIndexRoute />} />
      <Route path=":id" element={<PokedexEntryRoute />} />
    </Route>,
  ),
);

function App(): JSX.Element {
  return (
    <QueryClientProvider client={client}>
      <PokedexServiceProvider service={service}>
        <RouterProvider router={router} />
      </PokedexServiceProvider>
    </QueryClientProvider>
  );
}

export default App;
