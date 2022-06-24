import type { Linter } from "eslint";

/**
 * `eslint-plugin-import` rules
 *
 * @see https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
 */
export default {
  "import/first": "error",
  "import/no-amd": "error",
  // "import/no-anonymous-default-export": "warn",
  "import/no-commonjs": "error",
  "import/no-dynamic-require": "error",
  "import/no-webpack-loader-syntax": "error",
} as Linter.RulesRecord;

export const cjs = {
  "import/no-commonjs": "off",
} as Linter.RulesRecord;
