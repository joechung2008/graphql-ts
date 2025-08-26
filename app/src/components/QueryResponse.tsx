import { Suspense } from "react";
import { HighlightedCode } from "./HighlightedCode";

interface QueryResponseProps {
  response: string;
}

export function QueryResponse({ response }: QueryResponseProps) {
  return (
    <Suspense>
      <HighlightedCode className="h-full" code={response} lang="json" />
    </Suspense>
  );
}
