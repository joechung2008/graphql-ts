import { objectType } from "nexus";

export const Extension = objectType({
	name: "Extension",
	definition(t) {
		t.string("extensionName");
		t.boolean("managedSdpEnabled");
		// Maps config: Record<string, string> to an array of { key, value } objects for GraphQL.
		t.list.field("config", {
			type: "ConfigEntry",
			resolve(extension) {
				return Object.entries(extension.config ?? {}).map(([key, value]) => ({
					key,
					value,
				}));
			},
		});
		// Maps stageDefinition: Record<string, string[]> to an array of { key, value: string[] } objects for GraphQL.
		t.list.field("stageDefinition", {
			type: "StageDefinitionEntry",
			resolve(extension) {
				return Object.entries(extension.stageDefinition ?? {}).map(
					([key, value]) => ({
						key,
						value,
					}),
				);
			},
		});
	},
});
