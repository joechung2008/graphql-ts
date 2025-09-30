# Dockerfile for app package (Next.js)
FROM node:24-alpine AS deps

WORKDIR /app

# Install pnpm 10.17.1
RUN corepack enable && corepack prepare pnpm@10.17.1 --activate

# Build app and its dependencies
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml .npmrc ./
COPY app ./app
COPY lib ./lib
RUN pnpm --filter app... install --frozen-lockfile
RUN pnpm --filter app... build

WORKDIR /app
ENV NODE_ENV=production
EXPOSE 3000
CMD ["pnpm", "--filter", "app", "start"]
