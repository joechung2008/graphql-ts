export { Environment, getDiagnostics } from "./clients/Diagnostics.js";
// Object type schema
export { ArmExtensions as ArmExtensionsSchema } from "./schema/ArmExtensions.js";
export { BuildInfo as BuildInfoSchema } from "./schema/BuildInfo.js";
export { ClusterInfo as ClusterInfoSchema } from "./schema/ClusterInfo.js";
export { ConfigEntry } from "./schema/ConfigEntry.js";
export { Diagnostics as DiagnosticsSchema } from "./schema/Diagnostics.js";
export { Extension as ExtensionSchema } from "./schema/Extension.js";
export { ExtensionSync as ExtensionSyncSchema } from "./schema/ExtensionSync.js";
export { ExtensionsEntry } from "./schema/ExtensionsEntry.js";
export { schema } from "./schema/index.js";
// Query schema
export { Query as QuerySchema } from "./schema/Query.js";
export { ServerInfo as ServerInfoSchema } from "./schema/ServerInfo.js";
export { StageDefinitionEntry } from "./schema/StageDefinitionEntry.js";

// TypeScript type definitions
export type { ArmExtensions } from "./types/ArmExtensions.js";
export type { BuildInfo } from "./types/BuildInfo.js";
export type { ClusterInfo } from "./types/ClusterInfo.js";
export type { Diagnostics } from "./types/Diagnostics.js";
export type { Extension } from "./types/Extension.js";
export type { ExtensionSync } from "./types/ExtensionSync.js";
export type { ServerInfo } from "./types/ServerInfo.js";
