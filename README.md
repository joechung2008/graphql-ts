# graphql-ts

This monorepo contains a small Next.js app, a minimal GraphQL API, and a shared library
for working with Azure Portal Extensions data. It provides an interactive query editor
and example queries to inspect extension metadata via a local GraphQL endpoint.

## Features

- Next.js (App Router) UI with an interactive GraphQL query editor and response viewer
- Minimal GraphQL HTTP server used for local development and testing
- Shared TypeScript library with schema, query helpers and types
- Example GraphQL queries under the `queries/` directory and recorded responses in `testdata/`

## Getting started

Prerequisites

- Node.js 18+ (LTS recommended)
- pnpm (this repository uses pnpm workspaces)

Install dependencies (from the repository root):

```bash
pnpm install
```

Run the Next.js app (development):

```bash
cd app
pnpm --filter app dev
```

Run the API server (development / build):

```bash
pnpm --filter api start
```

Open the app in your browser (dev server prints the local URL). The UI includes a query
editor that can target the local API.

## Project layout

Top-level

- `package.json`  workspace scripts and turbo config
- `queries/`  example GraphQL queries used by the UI and tests
- `testdata/`  recorded REST/response fixtures

app/

- Next.js application (UI)
- `src/components/QueryEditor.tsx`, `QueryResponse.tsx`  interactive editor and response viewer
- `src/lib/executeQuery.ts`  helper used by the UI to call the GraphQL endpoint

api/

- Small GraphQL HTTP server and build script (`build.mjs`)
- Exposes a GraphQL HTTP endpoint

lib/

- Shared TypeScript code: schema, types, and helpers used by both `app` and `api`

cli/

- Command-line utilities (if you'd like to run scripted queries or helpers)

## Conventions

- TypeScript, ESM modules across packages
- One-file-per-component pattern for React components under `app/src/components`
- Keep tests and fixtures close to the components or queries they validate

## Adding a new component or query

1. For UI work: add `src/components/MyComponent.tsx` in `app`, include a companion test when appropriate.
2. For API or schema changes: update `lib/schema/*` and the server in `api`.
3. Add example queries to `queries/` and sample responses to `testdata/` if helpful for development.

## Linting & formatting

- Formatting uses `biome` in workspace packages. From a package directory:

```bash
pnpm run format
pnpm run lint
```

Or run the root workspace targets:

```bash
pnpm -w run format
pnpm -w run lint
```

## Tests

This repo contains lightweight tests and fixtures. Run the workspace test runner from the root:

```bash
pnpm -w run test
```

## License

MIT
