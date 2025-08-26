import { objectType } from "nexus";

export const ExtensionSync = objectType({
	name: "ExtensionSync",
	definition(t) {
		t.int("totalSyncAllCount");
		t.string("lastChangedTime");
	},
});
