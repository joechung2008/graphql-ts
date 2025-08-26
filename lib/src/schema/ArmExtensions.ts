import { objectType } from "nexus";

export const ArmExtensions = objectType({
	name: "ArmExtensions",
	definition(t) {
		t.string("RpServerVersion");
		t.string("lastChangedTime");
	},
});
