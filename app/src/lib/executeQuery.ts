export async function executeQuery() {
  const response = await fetch("http://localhost:3000/graphql", {
    body: JSON.stringify({
      query:
        'query GetDiagnostics($environment: String! = "https://hosting.portal.azure.net/api/diagnostics") { diagnostics(environment: $environment) { armExtensions { RpServerVersion lastChangedTime } buildInfo { buildVersion } clusterInfo { webWorkerCount isStartup lastChangedTime } extensions { key value { extensionName managedSdpEnabled config { key value } stageDefinition { key value } } } serverInfo { hostname serverId deploymentId extensionSync { totalSyncAllCount lastChangedTime } } } }',
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  return response.json();
}
