import { Extensions } from "@esxl/constants";
import type { Linter } from "eslint";

/**
 * `eslint-plugin-react` rules
 *
 * @see https://github.com/yannickcr/eslint-plugin-react
 */
export default {
  "react/boolean-prop-naming": ["error"],
  "react/jsx-closing-bracket-location": ["warn", "tag-aligned"],
  "react/jsx-curly-brace-presence": ["warn", "never"],
  "react/jsx-filename-extension": [
    "error",
    { extensions: [`.${Extensions.TypeScript_JSX}`, `.${Extensions.JSX}`] },
  ],
  "react/jsx-first-prop-new-line": ["warn", "multiline-multiprop"],
  "react/jsx-indent-props": ["warn", 2],
  "react/jsx-max-props-per-line": ["warn", { maximum: 1, when: "always" }],
  "react/react-in-jsx-scope": ["off"],
  "react/require-default-props": ["error"],
  "react/sort-prop-types": ["warn"],
} as Linter.RulesRecord;
