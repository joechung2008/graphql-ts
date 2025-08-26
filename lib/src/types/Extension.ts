export interface Extension {
	extensionName: string;
	managedSdpEnabled: boolean;
	/** Can be unset for extensions with no active configurations */
	config?: Record<string, string>;
	/** Set only when `managedSdpEnabled` is `false` */
	stageDefinition?: Record<string, string[]>;
}
