import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import nodePolyfills from "rollup-plugin-node-polyfills";

function createConfig(format) {
  const dir = format === "module" ? "esm" : format;
  return {
    input: require.resolve("markdown-it"),
    output: {
      file: `${dir}/index.js`,
      sourcemap: true,
      format,
    },
    plugins: [nodePolyfills(), json(), nodeResolve(), commonjs(), terser()],
  };
}

export default [createConfig("module"), createConfig("system")];
