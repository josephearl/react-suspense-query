import { type JSX, type PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {}

export function PokedexLayout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <h1>Gotta Catch 'Em All!</h1>
      {children}
    </>
  );
}
