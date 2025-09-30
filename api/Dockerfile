# Dockerfile for api package (Express)
FROM node:24-alpine AS deps
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy only manifests for install layer caching
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./
COPY api/package.json ./api/package.json
COPY lib/package.json ./lib/package.json

# Install all dependencies (including dev)
RUN pnpm install --frozen-lockfile

# Copy source code
COPY lib ./lib
COPY api ./api

# Build api and its dependencies
WORKDIR /app
RUN pnpm --filter api... build || true

# Production image, copy only needed files
FROM node:24-alpine AS runner
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy only built output and production deps
COPY --from=deps /app/api ./api
COPY --from=deps /app/lib ./lib
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/api/node_modules ./api/node_modules
COPY --from=deps /app/lib/node_modules ./lib/node_modules

WORKDIR /app/api
CMD ["pnpm", "start"]
