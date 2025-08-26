import type { Diagnostics } from "../types/Diagnostics";

export enum Environment {
	Public = "https://hosting.portal.azure.net/api/diagnostics",
	Fairfax = "https://hosting.azureportal.usgovcloudapi.net/api/diagnostics",
	Mooncake = "https://hosting.azureportal.chinacloudapi.cn/api/diagnostics",
}

export async function getDiagnostics(
	environment: Environment,
): Promise<Diagnostics> {
	const response = await fetch(environment);
	const json = await response.json();
	return json as Diagnostics;
}
