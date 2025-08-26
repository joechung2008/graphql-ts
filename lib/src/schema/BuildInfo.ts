import { objectType } from "nexus";

export const BuildInfo = objectType({
	name: "BuildInfo",
	definition(t) {
		t.string("buildVersion");
	},
});
