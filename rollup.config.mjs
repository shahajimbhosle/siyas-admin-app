import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json" assert { type: "json" };
import babel from "@rollup/plugin-babel";
import url from "@rollup/plugin-url";
import terser from "@rollup/plugin-terser";
import { visualizer } from "rollup-plugin-visualizer";

const dev = process.env.NODE_ENV !== "production";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    external: [
      "react",
      "react-dom",
      "@tanstack/react-query",
      "@types/react",
      "formik",
      "localforage",
      "lodash",
      "moment",
      "react",
      "react-dom",
      "react-icons",
      "react-router",
      "react-router-dom",
      "rsuite",
      "styled-components",
      "tslib",
      "typescript",
      "yup",
    ], // Mark react and react-dom as external
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts"],
      }),
      postcss({ extensions: [".css"], inject: true, extract: false }),
      babel({ babelHelpers: "bundled" }),
      url({
        // All files will be inlined if their size is less than 10 kB
        limit: 10 * 1024,

        // Include all image files
        include: ["**/*.svg", "**/*.png", "**/*.jpg", "**/*.gif"],

        // Emit files to the output directory
        emitFiles: true,

        // Directory to emit files to
        fileName: "[name][extname]",
      }),
      terser({
        ecma: 2015,
        mangle: { toplevel: true },
        compress: {
          toplevel: true,
          drop_console: !dev,
          drop_debugger: !dev,
        },
        output: { quote_style: 1 },
      }),
      visualizer(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
