import { build } from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';

build({
  bundle: true,
  entryPoints: ['src/index.ts'],
  external: ['@graphql-ts/lib', 'graphql'],
  format: 'esm',
  outfile: './dist/index.mjs',
  platform: 'node',
  plugins: [nodeExternalsPlugin()],
  sourcemap: true,
}).catch(() => process.exit(1));
