import { objectType } from "nexus";

export const ClusterInfo = objectType({
	name: "ClusterInfo",
	definition(t) {
		t.int("webWorkerCount");
		t.boolean("isStartup");
		t.string("lastChangedTime");
	},
});
