const bun = require("bun");

bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "lib/module/",
  minify: true,
  splitting: false,
  target: "node",
  format: "esm",
  external: ["react", "react-native", "react-native-svg"],
});

bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "lib/commonjs/",
  minify: true,
  splitting: false,
  target: "node",
  format: "cjs",
  external: ["react", "react-native", "react-native-svg"],
});
