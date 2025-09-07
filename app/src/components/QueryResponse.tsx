import dynamic from "next/dynamic";

interface QueryResponseProps {
	response: string;
}

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
	ssr: false,
});

export function QueryResponse({ response }: QueryResponseProps) {
	return (
		<MonacoEditor
			defaultLanguage="json"
			height="100%"
			language="json"
			options={{
				automaticLayout: true,
				fontSize: 16,
				minimap: { enabled: false },
				readOnly: true,
				scrollBeyondLastLine: false,
				wordWrap: "on",
			}}
			theme="vs-dark"
			value={response}
		/>
	);
}
