import { codeToHtml } from "shiki";

interface HighlightedCodeProps {
  code: string;
  lang: string;
}

export async function HighlightedCode({ code, lang }: HighlightedCodeProps) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: await codeToHtml(code, { lang, theme: "github-dark" }),
      }}
    />
  );
}
