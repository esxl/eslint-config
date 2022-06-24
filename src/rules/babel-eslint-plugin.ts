import type { Linter } from "eslint";

/**
 * `@babel/eslint-plugin` rules
 *
 * @see https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin
 */
export default {
  "@babel/new-cap": "error",
  "@babel/no-invalid-this": "error",
  "@babel/no-unused-expressions": [
    "error",
    {
      allowShortCircuit: true,
      allowTaggedTemplates: true,
      allowTernary: true,
    },
  ],
  // Prettier should handle spacing.
  "@babel/object-curly-spacing": "off",
  // Prettier should handle semicolons.
  "@babel/semi": "off",
} as Linter.RulesRecord;
