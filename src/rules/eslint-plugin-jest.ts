import type { Linter } from "eslint";

export default {
  "jest/consistent-test-it": ["error", { fn: "test" }],
  "jest/expect-expect": ["error"],
  "jest/lowercase-name": ["off"],
  "jest/no-alias-methods": ["error"],
  "jest/no-commented-out-tests": ["error"],
  "jest/no-conditional-expect": ["error"],
  /**
   * This rule can be problematic because it requires you to declare the
   * major version of Jest that you're running, or it tries to
   * determine the version through introspection. If Jest isn't available
   * to this configuration, perhaps because it is installed as part of a
   * toolchain, instead of being declared as a dev dependency, then the
   * introspection may fail.
   *
   * We use Jest's `errorOnDeprecated configuration to cover deprecations.
   *
   * @see https://jestjs.io/docs/configuration#errorondeprecated-boolean
   */
  "jest/no-deprecated-functions": ["off"],
  "jest/no-disabled-tests": ["error"],
  "jest/no-done-callback": ["error"],
  "jest/no-duplicate-hooks": ["error"],
  "jest/no-export": ["error"],
  "jest/no-focused-tests": ["error"],
  "jest/no-hooks": ["off"],
  "jest/no-identical-title": ["error"],
  "jest/no-if": ["error"],
  "jest/no-interpolation-in-snapshots": ["error"],
  "jest/no-jasmine-globals": ["error"],
  "jest/no-jest-import": ["error"],
  "jest/no-large-snapshots": ["error"],
  "jest/no-mocks-import": ["error"],
  "jest/no-restricted-matchers": ["error"],
  "jest/no-standalone-expect": ["error"],
  "jest/no-test-prefixes": ["error"],
  "jest/no-test-return-statement": ["error"],
  "jest/prefer-called-with": ["error"],
  "jest/prefer-expect-assertions": [
    "error",
    { onlyFunctionsWithAsyncKeyword: true },
  ],
  "jest/prefer-hooks-on-top": ["error"],
  "jest/prefer-spy-on": ["error"],
  "jest/prefer-strict-equal": ["error"],
  "jest/prefer-to-be-null": ["error"],
  "jest/prefer-to-be-undefined": ["error"],
  "jest/prefer-to-contain": ["error"],
  "jest/prefer-to-have-length": ["error"],
  "jest/prefer-todo": ["error"],
  "jest/require-to-throw-message": ["error"],
  "jest/require-top-level-describe": ["off"],
  "jest/unbound-method": ["error"],
  "jest/valid-describe": ["error"],
  "jest/valid-expect": ["error"],
  "jest/valid-expect-in-promise": ["error"],
  "jest/valid-title": ["error"],
} as Linter.RulesRecord;
