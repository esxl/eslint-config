import { ECMA_EXTENSIONS, Extensions } from "@esxl/constants";
import type { Linter } from "eslint";
import eslintPluginImport, {
  cjs as eslintPluginImportCJS,
} from "./rules/eslint-plugin-import";
import eslintPluginJest from "./rules/eslint-plugin-jest";
import eslintPluginReact from "./rules/eslint-plugin-react";
import typescriptEslintPlugin from "./rules/typescript-eslint";

export default {
  env: {
    amd: false,
    applescript: false,
    atomtest: false,
    browser: false,
    commonjs: false,
    embertest: false,
    es2017: true,
    es2020: true,
    es2021: true,
    es6: true,
    greasemonkey: false,
    jasmine: false,
    jest: false,
    jquery: false,
    meteor: false,
    mocha: false,
    mongo: false,
    nashorn: false,
    node: false,
    phantomjs: false,
    prototypejs: false,
    protractor: false,
    qunit: false,
    serviceworker: false,
    "shared-node-browser": true,
    shelljs: false,
    webextensions: false,
    worker: false,
  },
  extends: ["eslint:recommended"],
  overrides: [
    {
      files: [
        `**/*.${Extensions.TypeScript}`,
        `**/*.${Extensions.TypeScript_JSX}`,
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ["@typescript-eslint/eslint-plugin"],
      rules: typescriptEslintPlugin,
    },
    {
      env: {
        jest: true,
        "jest/globals": true,
      },
      files: ECMA_EXTENSIONS.map(
        (extension) => `src/**/__tests__/*.test.${extension}`
      ),
      plugins: ["eslint-plugin-jest"],
      rules: eslintPluginJest,
    },
    {
      extends: ["plugin:react/recommended", "eslint-config-prettier"],
      files: [`**/*.${Extensions.TypeScript_JSX}`, `**/*.${Extensions.JSX}`],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        ...eslintPluginReact,
      },
      settings: {
        react: {
          version: "17.0.2",
        },
      },
    },
    {
      env: {
        commonjs: true,
      },
      files: `**/*.${Extensions.CommonJS}`,
      rules: eslintPluginImportCJS,
    },
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    jsx: false,
    requireConfigFile: false,
    sourceType: "module",
  },
  plugins: ["@babel/eslint-plugin", "eslint-plugin-import"],
  rules: {
    "array-callback-return": "warn",
    "default-case": [
      "warn",
      {
        commentPattern: "^no default$",
      },
    ],
    "dot-location": ["warn", "property"],
    eqeqeq: ["warn", "smart"],
    "getter-return": "warn",
    "new-parens": "warn",
    "no-array-constructor": "warn",
    "no-caller": "warn",
    "no-cond-assign": ["warn", "except-parens"],
    "no-const-assign": "warn",
    "no-control-regex": "warn",
    "no-delete-var": "warn",
    "no-dupe-args": "warn",
    "no-dupe-class-members": "warn",
    "no-dupe-keys": "warn",
    "no-duplicate-case": "warn",
    "no-empty-character-class": "warn",
    "no-empty-pattern": "warn",
    "no-eval": "warn",
    "no-ex-assign": "warn",
    "no-extend-native": "warn",
    "no-extra-bind": "warn",
    "no-extra-label": "warn",
    "no-fallthrough": "warn",
    "no-func-assign": "warn",
    "no-implied-eval": "warn",
    "no-invalid-regexp": "warn",
    "no-iterator": "warn",
    "no-label-var": "warn",
    "no-labels": [
      "warn",
      {
        allowLoop: true,
        allowSwitch: false,
      },
    ],
    "no-lone-blocks": "warn",
    "no-loop-func": "warn",
    "no-mixed-operators": [
      "warn",
      {
        allowSamePrecedence: false,
        groups: [
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"],
        ],
      },
    ],
    "no-multi-str": "warn",
    "no-native-reassign": "warn",
    "no-negated-in-lhs": "warn",
    "no-new-func": "warn",
    "no-new-object": "warn",
    "no-new-symbol": "warn",
    "no-new-wrappers": "warn",
    "no-obj-calls": "warn",
    "no-octal": "warn",
    "no-octal-escape": "warn",
    "no-regex-spaces": "warn",
    "no-restricted-properties": [
      "error",
      {
        message: "Use import() instead.",
        object: "require",
        property: "ensure",
      },
      {
        message: "Use import() instead.",
        object: "System",
        property: "import",
      },
    ],
    "no-restricted-syntax": ["warn", "WithStatement"],
    "no-script-url": "warn",
    "no-self-assign": "warn",
    "no-self-compare": "warn",
    "no-sequences": "warn",
    "no-shadow-restricted-names": "warn",
    "no-sparse-arrays": "warn",
    "no-template-curly-in-string": "warn",
    "no-this-before-super": "warn",
    "no-throw-literal": "warn",
    "no-undef": "error",
    "no-unreachable": "warn",
    "no-unused-expressions": "off",
    "no-unused-labels": "warn",
    "no-unused-vars": [
      "warn",
      {
        args: "none",
        ignoreRestSiblings: true,
      },
    ],
    "no-use-before-define": [
      "warn",
      {
        classes: false,
        functions: false,
        variables: false,
      },
    ],
    "no-useless-computed-key": "warn",
    "no-useless-concat": "warn",
    "no-useless-constructor": "warn",
    "no-useless-escape": "warn",
    "no-useless-rename": [
      "warn",
      {
        ignoreDestructuring: false,
        ignoreExport: false,
        ignoreImport: false,
      },
    ],
    "no-whitespace-before-property": "warn",
    "no-with": "warn",
    "require-yield": "warn",
    "rest-spread-spacing": ["warn", "never"],
    "sort-keys": [
      "error",
      "asc",
      {
        caseSensitive: true,
        natural: true,
      },
    ],
    strict: ["warn", "never"],
    "unicode-bom": ["warn", "never"],
    "use-isnan": "warn",
    "valid-typeof": "warn",
    ...eslintPluginImport,
  },
} as Linter.Config;
