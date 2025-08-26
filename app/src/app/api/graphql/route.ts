import { Environment, getDiagnostics, schema } from "@graphql-ts/lib";
import { createHandler } from "graphql-http/lib/use/fetch";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest): Promise<Response> {
	const handler = createHandler({
		schema,
		context: async () => {
			const diagnostics = await getDiagnostics(Environment.Public);
			return { diagnostics };
		},
	});

	// Pass NextRequest as Fetch API Request
	return handler(req);
}
