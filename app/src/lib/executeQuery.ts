export async function executeQuery(query: string) {
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
