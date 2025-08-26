import dynamic from "next/dynamic";

interface QueryEditorProps {
	value: string;
	onChange: (value: string) => void;
	height?: string;
}

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
	ssr: false,
});

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
