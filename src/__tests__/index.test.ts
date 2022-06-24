import { Extensions } from "@esxl/constants";
import { ESLint } from "eslint";
import { join } from "path";
import * as config from "../index";

const rootDir = process.cwd();
const __dirname = join(rootDir, "src", "__tests__");
const fixtures = join(__dirname, "..", "__fixtures__");

describe("index", () => {
  test("it provides a default export", () => {
    expect(config.default).toBeDefined();
  });

  describe("Given ESLint is configured with the `@esxl/eslint-config` configuration", () => {
    let eslint: ESLint;
    beforeAll(() => {
      eslint = new ESLint({
        cwd: rootDir,
        baseConfig: config.default,
        useEslintrc: false,
      });
    });

    /**
     * Temporarily disabling TypeScript tests until Jest 28 is released.
     * In Jest 27, the TypeScript tests fail with message:
     *
     * `Failed to load plugin '@typescript-eslint/eslint-plugin' declared in 'BaseConfig#overrides[0]': Cannot find module 'eslint/use-at-your-own-risk' from 'node_modules/@typescript-eslint/eslint-plugin/dist/util/getESLintCoreRule.js'`
     *
     * This is a known issue with Jest 27; it does not honor `package.json["exports"]`, and
     *
     * @see https://github.com/facebook/jest/issues/9771
     * @see https://github.com/typescript-eslint/typescript-eslint/issues/4063#issuecomment-953935258
     */
    test.each([Extensions.JavaScript /*Extensions.TypeScript*/])(
      "When it runs against a file with valid code, Then it does not return any errors or warnings (%s)",
      async (extension) => {
        expect.hasAssertions();

        const [result] = await eslint.lintFiles([
          join(fixtures, `simple.${extension}`),
        ]);
        expect(result).toMatchObject({
          errorCount: 0,
          warningCount: 0,
        });
      }
    );

    test.each([Extensions.JavaScript /*Extensions.TypeScript*/])(
      "When it runs against a file with code that uses DOM APIs, Then it returns with an error (%s)",
      async (extension) => {
        expect.hasAssertions();

        const [result] = await eslint.lintFiles([
          join(fixtures, `DOM.${extension}`),
        ]);
        expect(result).toMatchObject({
          errorCount: 1,
          warningCount: 0,
        });
      }
    );

    test.each([Extensions.JavaScript /*Extensions.TypeScript*/])(
      "When it runs against a file with code that uses CommonJS APIs, Then it returns with an error (%s)",
      async (extension) => {
        expect.hasAssertions();

        const [result] = await eslint.lintFiles([
          join(fixtures, `commonjs.${extension}`),
        ]);
        expect(result).toMatchObject({
          errorCount: 2,
          warningCount: 0,
        });
      }
    );

    test.each([Extensions.CommonJS])(
      "When it runs against a file with code that uses CommonJS APIs, Then it returns without an error (%s)",
      async (extension) => {
        expect.hasAssertions();

        const [result] = await eslint.lintFiles([
          join(fixtures, `commonjs.${extension}`),
        ]);
        expect(result).toMatchObject({
          errorCount: 0,
          warningCount: 0,
        });
      }
    );
  });
});
