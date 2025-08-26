import { build } from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';

build({
  bundle: true,
  entryPoints: ['src/index.ts'],
  external: ['nexus'],
  format: 'esm',
  outdir: './dist',
  platform: 'node',
  plugins: [nodeExternalsPlugin()],
  sourcemap: true,
}).catch(() => process.exit(1));
