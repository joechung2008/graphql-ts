import type { ArmExtensions } from "./ArmExtensions";
import type { BuildInfo } from "./BuildInfo";
import type { ClusterInfo } from "./ClusterInfo";
import type { Extension } from "./Extension";
import type { ServerInfo } from "./ServerInfo";

export interface Diagnostics {
	buildInfo: BuildInfo;
	extensions: Record<string, Extension>;
	serverInfo: ServerInfo;
	clusterInfo: ClusterInfo;
	armExtensions: ArmExtensions;
}
