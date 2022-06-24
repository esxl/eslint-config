import type { Linter } from "eslint";

/**
 * `@typescript-eslint/eslint-plugin` rules
 *
 * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
 */
export default {
  "@typescript-eslint/consistent-type-assertions": "warn",
  "@typescript-eslint/no-array-constructor": "warn",
  "@typescript-eslint/no-unused-expressions": [
    "error",
    {
      allowShortCircuit: true,
      allowTaggedTemplates: true,
      allowTernary: true,
    },
  ],
  "@typescript-eslint/no-unused-vars": [
    "warn",
    {
      args: "none",
      ignoreRestSiblings: true,
    },
  ],
  "@typescript-eslint/no-use-before-define": [
    "warn",
    {
      classes: false,
      functions: false,
      typedefs: false,
      variables: false,
    },
  ],
  "@typescript-eslint/no-useless-constructor": "warn",
  "default-case": "off",
  "no-array-constructor": "off",
  "no-dupe-class-members": "off",
  "no-undef": "off",
  "no-unused-vars": "off",
  "no-use-before-define": "off",
  "no-useless-constructor": "off",
} as Linter.RulesRecord;
