import type { ExtensionSync } from "./ExtensionSync";

export interface ServerInfo {
  hostname: string;
  serverId: string;
  deploymentId: string;
  extensionSync: ExtensionSync;
}
