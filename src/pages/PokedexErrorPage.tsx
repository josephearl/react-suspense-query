import { type JSX } from "react";
import { type FallbackProps } from "react-error-boundary";
import { ErrorMessage } from "@/components/ErrorMessage.tsx";
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";

export interface PageErrorProps extends FallbackProps {}

export function PokedexErrorPage({
  error,
  resetErrorBoundary,
}: PageErrorProps): JSX.Element {
  return (
    <>
      <h2>We're really sorry</h2>
      <ErrorMessage error={error} resetErrorBoundary={resetErrorBoundary} />
    </>
  );
}

export function PokedexErrorRoute(): JSX.Element {
  let error = useRouteError();
  if (isRouteErrorResponse(error)) {
    error = new Error(`${error.status} ${error.statusText}: ${error.data}`);
  }
  const navigate = useNavigate();
  return (
    <PokedexErrorPage error={error} resetErrorBoundary={() => navigate(0)} />
  );
}
