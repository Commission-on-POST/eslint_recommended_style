import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import _import from "eslint-plugin-import";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...fixupConfigRules(compat.extends(
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
)), {
    plugins: {
        "@typescript-eslint": fixupPluginRules(typescriptEslint),
        import: fixupPluginRules(_import),
    },
    files: ["**/*.ts"],
    languageOptions: {
        parser: tsParser,
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            project: "./tsconfig.json",
        },
    },

    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },

        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
                project: "path/to/folder",
            },

            node: true,
        },
    },

    rules: {
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/consistent-generic-constructors": ["error", "type-annotation"],
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/explicit-module-boundary-types": "error",

        "@typescript-eslint/naming-convention": ["warn", {
            selector: ["classProperty", "objectLiteralProperty", "parameter", "variable"],
            format: ["camelCase", "snake_case"],
            leadingUnderscore: "allow",
        }, {
            selector: ["class", "classMethod", "function", "typeMethod"],
            format: ["camelCase"],
            leadingUnderscore: "allow",
        }, {
            selector: ["interface", "class"],
            format: ["PascalCase"],
        }],

        "@typescript-eslint/no-confusing-non-null-assertion": "error",
        "@typescript-eslint/no-confusing-void-expression": "error",
        "@typescript-eslint/no-dynamic-delete": "error",
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-inferrable-types": "error",
        "no-invalid-this": "off",
        "@typescript-eslint/no-invalid-this": "error",
        "@typescript-eslint/no-invalid-void-type": "error",

        "@typescript-eslint/no-misused-promises": ["error", {
            checksVoidReturn: false,
        }],

        "@typescript-eslint/no-mixed-enums": "error",
        "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
        "@typescript-eslint/no-require-imports": "error",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/no-unnecessary-condition": "error",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": "error",
        "no-unused-vars": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": "warn",
        "@typescript-eslint/no-useless-constructor": "error",
        "@typescript-eslint/no-useless-empty-export": "error",
        "@typescript-eslint/non-nullable-type-assertion-style": "error",
        "@typescript-eslint/parameter-properties": "error",
        "@typescript-eslint/prefer-for-of": "warn",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-includes": "error",
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/prefer-readonly": "error",
        "@typescript-eslint/prefer-reduce-type-parameter": "error",
        "@typescript-eslint/prefer-string-starts-ends-with": "error",
        "@typescript-eslint/promise-function-async": "error",
        "@typescript-eslint/require-array-sort-compare": "warn",
        "@typescript-eslint/switch-exhaustiveness-check": "error",
        "@typescript-eslint/unified-signatures": "error",
        "array-callback-return": "warn",
        "no-const-assign": "warn",
        "no-constant-binary-expression": "error",
        "no-debugger": "warn",
        "no-fallthrough": "warn",

        "no-irregular-whitespace": ["error", {
            skipStrings: true,
            skipTemplates: true,
            skipJSXText: true,
        }],

        "no-new-native-nonconstructor": "error",
        "no-promise-executor-return": "warn",
        "no-self-compare": "warn",
        "no-sparse-arrays": "warn",
        "no-template-curly-in-string": "off",
        "no-unreachable-loop": "error",
        "no-unsafe-negation": "warn",
        "no-unused-private-class-members": "warn",
        "require-atomic-updates": "warn",
        "block-scoped-var": "warn",
        "capitalized-comments": "error",
        "class-methods-use-this": "warn",
        complexity: "warn",
        "default-case": "error",
        "default-case-last": "warn",
        eqeqeq: "error",

        "max-depth": ["warn", {
            max: 5,
        }],

        "max-params": ["warn", {
            max: 4,
        }],

        "no-alert": "warn",
        "no-caller": "error",
        "no-case-declarations": "warn",
        "no-console": "warn",
        "no-div-regex": "warn",
        "no-else-return": "error",
        "no-empty": "warn",
        "no-empty-static-block": "warn",
        "no-extra-label": "error",
        "no-global-assign": "error",
        "no-implied-eval": "error",
        "no-label-var": "error",
        "no-lone-blocks": "warn",
        "no-lonely-if": "error",
        "no-multi-str": "warn",
        "no-return-assign": "error",
        "no-sequences": "error",
        "no-undef-init": "error",
        "no-undefined": "warn",
        "no-unneeded-ternary": "error",
        "no-useless-call": "warn",
        "no-useless-computed-key": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": "error",
        "object-shorthand": "error",
        "prefer-arrow-callback": "error",
        "prefer-const": "warn",
        "prefer-exponentiation-operator": "error",
        "prefer-numeric-literals": "error",
        "prefer-object-has-own": "error",
        "prefer-object-spread": "error",
        "require-unicode-regexp": "warn",
    },
}];