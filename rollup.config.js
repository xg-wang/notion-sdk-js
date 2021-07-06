import json from "@rollup/plugin-json"
import replace from "@rollup/plugin-replace"
import sourcemaps from "rollup-plugin-sourcemaps"

export default [
  {
    input: "build/src/index.js",
    external: 'node-fetch',
    plugins: [json(), sourcemaps()],
    output: {
      file: "build/dist/bundle-node.js",
      format: "cjs",
      sourcemap: true,
      sourcemapExcludeSources: true,
    },
  },
  {
    input: "build/src/index.js",
    plugins: [
      replace({
        'import isomorphicFetch from "node-fetch"': "const isomorphicFetch = fetch.bind(window)",
        delimiters: ["", ""],
      }),
      json(),
      sourcemaps(),
    ],
    output: {
      file: "build/dist/bundle-browser.js",
      format: "es",
      sourcemap: true,
      sourcemapExcludeSources: true,
    },
  },
]
