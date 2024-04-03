export default {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "project": "./tsconfig.json"
    },
    extends: [
        "eslint:recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    plugins: [
        "@typescript-eslint",
        "import"
    ],
    rules: {
        "@typescript-eslint/adjacent-overload-signatures":  "error",
        "@typescript-eslint/consistent-generic-constructors":  [
            "error",
            "type-annotation"
        ],
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/explicit-module-boundary-types": "error",
        "@typescript-eslint/naming-convention": [
            "warn",
            {
                selector: ['classProperty', 'objectLiteralProperty', "parameter", 'variable'],
                format: ['camelCase', "snake_case" ],
                leadingUnderscore: 'allow'
            },
            {
                selector: ['class', 'classMethod', 'function', 'typeMethod'],
                format: ['PascalCase'],
                leadingUnderscore: 'allow'
            },
            {
                selector: 'interface',
                format: ['PascalCase']
            }
        ]

    },
    settings: {
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import/resolver": {
          "typescript": {
            "alwaysTryTypes": true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
    
            // use <root>/path/to/folder/tsconfig.json
            "project": "path/to/folder"
          },
          "node": true,
          "typescript": true
        }
      }
};