"use client";

import { PlayIcon } from "@heroicons/react/24/solid";
import {
	Button,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from "@heroui/react";
import { useCallback, useState } from "react";
import { GraphQlIcon } from "@/components/GraphQlIcon";
import { QueryEditor } from "@/components/QueryEditor";
import { QueryResponse } from "@/components/QueryResponse";
import { executeQuery } from "@/lib/executeQuery";

function stringify(obj: unknown) {
	return JSON.stringify(obj, null, 2);
}

export default function Home() {
	const [query, setQuery] = useState("");
	const [response, setResponse] = useState<string>("");

	const handleRunQuery = useCallback(() => {
		executeQuery(query)
			.then((res) => {
				setResponse(stringify(res));
			})
			.catch((reason) => {
				setResponse(stringify({ error: String(reason) }));
			});
	}, [query]);

	return (
		<div className="box-border flex flex-col h-screen p-4">
			<Navbar className="pb-2" position="static">
				<NavbarContent className="flex w-full justify-between items-center">
					<NavbarBrand>
						<GraphQlIcon className="w-24 h-8" aria-label="GraphQL logo" />
					</NavbarBrand>
					<NavbarItem className="flex">
						<Button aria-label="Run Query" onPress={handleRunQuery}>
							<PlayIcon className="cursor-pointer h-6 w-6" />
						</Button>
					</NavbarItem>
				</NavbarContent>
			</Navbar>
			<div className="flex flex-row gap-2 h-[100%] items-start">
				<div className="flex-1 h-full min-w-0">
					<QueryEditor value={query} onChange={setQuery} />
				</div>
				<div className="flex-1 h-full min-w-0">
					<QueryResponse response={response} />
				</div>
			</div>
		</div>
	);
}
