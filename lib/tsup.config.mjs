// tsup.config.mjs
/** @type {import('tsup').Options} */
export default {
	dts: true,
	entry: ["src/index.ts"],
	external: ["nexus"],
	format: ["esm"],
	outDir: "dist",
	sourcemap: true,
	target: "esnext",
};
