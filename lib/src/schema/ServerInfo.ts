import { objectType } from "nexus";

export const ServerInfo = objectType({
	name: "ServerInfo",
	definition(t) {
		t.string("hostname");
		t.string("serverId");
		t.string("deploymentId");
		t.field("extensionSync", { type: "ExtensionSync" });
	},
});
