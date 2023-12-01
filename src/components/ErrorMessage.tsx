import { type JSX } from "react";
import { type FallbackProps } from "react-error-boundary";

export interface ErrorProps extends FallbackProps {}

export function ErrorMessage({
  error,
  resetErrorBoundary,
}: ErrorProps): JSX.Element {
  return (
    <>
      <p>Something went wrong:</p>
      <pre>{error.toString()}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </>
  );
}
