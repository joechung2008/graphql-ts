"use client";

import { codeToHtml } from "shiki";
import useSWR from "swr";

interface HighlightedCodeProps {
  code: string;
  lang: string;
  className?: string;
}

async function renderCode(code: string, lang: string, theme = "github-dark") {
  return codeToHtml(code, { lang, theme });
}

export function HighlightedCode({
  className,
  code,
  lang,
}: HighlightedCodeProps) {
  const { data, error, isLoading } = useSWR(
    `${code}-${lang}`,
    () => renderCode(code, lang),
    {
      fallbackData: "",
      suspense: true,
    }
  );

  let __html: string;
  if (isLoading) {
    __html = "Loading...";
  } else if (error) {
    __html = "Error: ${String(error)}";
  } else {
    // Inject h-full class into the root element (usually <pre>)
    __html = (data ?? "").replace(
      /<pre([^>]*)class="([^"]*)"/,
      '<pre$1 class="$2 h-full whitespace-pre-wrap"'
    );
  }

  return <div className={className} dangerouslySetInnerHTML={{ __html }} />;
}
