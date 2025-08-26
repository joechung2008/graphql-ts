const defaultQuery = `
query GetDiagnostics($environment: String! = "https://hosting.portal.azure.net/api/diagnostics") {
  diagnostics(environment: $environment) {
    armExtensions {
      RpServerVersion
      lastChangedTime
    }
  }
}
`;

export async function executeQuery(query = defaultQuery) {
  const response = await fetch("http://localhost:3000/graphql", {
    body: JSON.stringify({
      query,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  return response.json();
}
