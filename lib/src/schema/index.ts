import { makeSchema } from "nexus";
import { ArmExtensions } from "./ArmExtensions";
import { BuildInfo } from "./BuildInfo";
import { ClusterInfo } from "./ClusterInfo";
import { ConfigEntry } from "./ConfigEntry";
import { Diagnostics } from "./Diagnostics";
import { Extension } from "./Extension";
import { ExtensionSync } from "./ExtensionSync";
import { ExtensionsEntry } from "./ExtensionsEntry";
import { Query } from "./Query";
import { ServerInfo } from "./ServerInfo";
import { StageDefinitionEntry } from "./StageDefinitionEntry";

export const schema = makeSchema({
	types: [
		Query,
		ArmExtensions,
		BuildInfo,
		ClusterInfo,
		Diagnostics,
		ExtensionsEntry,
		Extension,
		ConfigEntry,
		StageDefinitionEntry,
		ExtensionSync,
		ServerInfo,
	],
});
