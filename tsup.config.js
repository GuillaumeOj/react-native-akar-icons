import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: false,
  clean: true,
  outDir: "dist",
  splitting: false,
  target: "es2020",
  external: ["react", "react-native", "react-native-svg"],
});
