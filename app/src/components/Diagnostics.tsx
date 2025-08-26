import { executeQuery } from "@/lib/executeQuery";
import { Code } from "@heroui/react";
import { Suspense, use } from "react";
import { HighlightedCode } from "./HighlightedCode";
import { Loading } from "./Loading";

export function Diagnostics() {
  const diagnostics = use(executeQuery());

  return (
    <Suspense fallback={<Loading />}>
      <Code className="fade-in">
        <HighlightedCode
          code={JSON.stringify(diagnostics, null, 2)}
          lang="json"
        />
      </Code>
    </Suspense>
  );
}
