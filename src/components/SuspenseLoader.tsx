import { type JSX, type ReactNode, Suspense } from "react";

export type Loader<T> = () => T;

export type SuspenseLoaderChildrenRenderFunction<T> = (props: T) => ReactNode;

export interface SuspenseLoaderProps<T> {
  loader: Loader<T>;
  fallback: ReactNode;
  children: ReactNode | SuspenseLoaderChildrenRenderFunction<T>;
}

export function SuspenseLoader<T>({
  loader,
  children,
  fallback,
}: SuspenseLoaderProps<T>): JSX.Element {
  function Loader(): ReactNode {
    const data = loader();
    return typeof children === "function" ? children(data) : children;
  }
  return (
    <Suspense fallback={fallback}>
      <Loader />
    </Suspense>
  );
}
