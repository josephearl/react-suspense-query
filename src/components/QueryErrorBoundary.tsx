import { type JSX, type PropsWithChildren, type ReactNode } from "react";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";

export type QueryErrorBoundaryFallbackRenderFunction = (
  props: FallbackProps,
) => ReactNode;

export interface QueryErrorBoundaryProps extends PropsWithChildren {
  fallbackRender: QueryErrorBoundaryFallbackRenderFunction;
}

export function QueryErrorBoundary({
  children,
  fallbackRender,
}: QueryErrorBoundaryProps): JSX.Element {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary fallbackRender={fallbackRender} onReset={reset}>
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}
