import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";


export default defineConfig([
  { files: [ `**/*.{js,mjs,cjs}` ], languageOptions: { globals: globals.browser } },
  { files: [ `**/*.{js,mjs,cjs}` ], plugins: { js }, extends: [ `js/recommended` ] },
  { files: [ `**/*.{js,mjs,cjs}` ], 
    rules: {
      "array-bracket-spacing": [ 2, `always` ],
      "no-const-assign": 2,
      "no-var": `error`,
      "indent": [ 2, 2 ],
      "quotes": [ 2, `backtick` ],
      "eqeqeq": `error`,
    },
  },
]);