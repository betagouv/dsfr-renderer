import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["src/index.ts"],
    format: ["esm"],
    dts: true,
    clean: true,
    external: ["react", "react-dom", "@json-render/core", "@json-render/react", "@gouvfr/dsfr", "zod"],
  },
  {
    entry: { "catalog/index": "src/catalog/index.ts" },
    format: ["esm"],
    dts: true,
    clean: false,
    external: ["zod", "@json-render/core"],
  },
]);
