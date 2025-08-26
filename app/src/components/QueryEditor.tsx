import MonacoEditor from "@monaco-editor/react";
import React from "react";

interface QueryEditorProps {
  value: string;
  onChange: (value: string) => void;
  height?: string;
}

export function QueryEditor({
  value,
  onChange,
  height = "100%",
}: QueryEditorProps) {
  return (
    <MonacoEditor
      defaultLanguage="graphql"
      height={height}
      language="graphql"
      options={{
        automaticLayout: true,
        fontSize: 16,
        minimap: { enabled: false },
        wordWrap: "on",
      }}
      theme="vs-dark"
      value={value}
      onChange={(v) => onChange(v ?? "")}
    />
  );
}
