import { type JSX, type ReactNode, Suspense } from "react";

export type Loader<T> = () => T;

export type ChildrenRender<T> = (props: T) => ReactNode;

export interface SuspenseLoaderProps<T> {
  loader: Loader<T>;
  childrenRender: ChildrenRender<T>;
  loadingFallback: ReactNode;
}

export function SuspenseLoader<T>({
  loader,
  childrenRender,
  loadingFallback,
}: SuspenseLoaderProps<T>): JSX.Element {
  function Loader(): ReactNode {
    const data = loader();
    return childrenRender(data);
  }
  return (
    <Suspense fallback={loadingFallback}>
      <Loader />
    </Suspense>
  );
}
