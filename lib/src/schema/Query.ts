import { objectType } from "nexus";
import { Diagnostics } from "./Diagnostics";

export const Query = objectType({
	name: "Query",
	definition(t) {
		t.field("diagnostics", {
			type: Diagnostics,
			args: {
				environment: "String",
			},
			resolve: (_parent, _args, ctx) => {
				return ctx.diagnostics;
			},
		});
	},
});
