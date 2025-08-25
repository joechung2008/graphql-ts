import { Environment, getDiagnostics, schema } from "@graphql-ts/lib";
import { graphql } from "graphql";
import * as readline from "node:readline";

process.stdin.setEncoding("utf8");

function readStdin() {
  return new Promise<string>((resolve, reject) => {
    let query = "";

    process.stdin.on("data", (chunk) => {
      query += chunk + "\n";
    });

    process.stdin.on("end", () => {
      resolve(query);
    });

    process.stdin.on("error", reject);
  });
}

function readStdinUsingReadline() {
  return new Promise<string>((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    let query = "";

    rl.on("line", (line) => {
      query += line + "\n";
    });

    rl.on("close", () => {
      resolve(query);
    });
  });
}

async function processQuery(source: string) {
  const diagnostics = await getDiagnostics(Environment.Public);
  const result = await graphql({
    schema,
    source,
    variableValues: {
      environment: Environment.Public,
    },
    contextValue: {
      diagnostics,
    },
  });

  console.log(JSON.stringify(result, null, 2));
}

try {
  let query: string;
  if (process.stdin.isTTY) {
    query = await readStdinUsingReadline();
  } else {
    query = await readStdin();
  }

  await processQuery(query);
} catch (err) {
  console.error("Error:", err);
  process.exit(1);
}
