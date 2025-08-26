import { objectType } from "nexus";

export const ConfigEntry = objectType({
	name: "ConfigEntry",
	definition(t) {
		t.string("key");
		t.string("value");
	},
});
