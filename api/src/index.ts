import { Environment, getDiagnostics, schema } from "@graphql-ts/lib";
import cors from "cors";
import express from "express";
import { createHandler } from "graphql-http/lib/use/express";

const app = express();
app.use(cors());

const port = process.env.PORT ?? 3000;

app.all(
	"/graphql",
	createHandler({
		schema,
		context: async () => {
			const diagnostics = await getDiagnostics(Environment.Public);
			return {
				diagnostics,
			};
		},
	}),
);

app.listen(port, () => {
	console.log(`Express server listening on port ${port}`);
});
