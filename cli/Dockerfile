# Dockerfile for cli package
FROM node:24-alpine AS deps
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@10.17.1 --activate

# Copy only manifests for install layer caching
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./
COPY cli/package.json ./cli/package.json
COPY lib/package.json ./lib/package.json

# Install all dependencies (including dev)
RUN pnpm install --frozen-lockfile

# Copy source code
COPY lib ./lib
COPY cli ./cli

# Build cli and its dependencies
WORKDIR /app
RUN pnpm --filter cli... build || true

# Production image, copy only needed files
FROM node:24-alpine AS runner
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@10.17.1 --activate

# Copy only built output and production deps
COPY --from=deps /app/cli ./cli
COPY --from=deps /app/lib ./lib
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/cli/node_modules ./cli/node_modules
COPY --from=deps /app/lib/node_modules ./lib/node_modules

WORKDIR /app/cli
CMD ["pnpm", "start"]
