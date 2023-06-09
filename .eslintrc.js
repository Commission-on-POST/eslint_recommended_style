module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "project": "./tsconfig.json"
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    plugins: [
        "@typescript-eslint",
        "import/no-duplicates" // This was imported to replace the rule `no-duplicate-imports`
    ],
    rules: {
        /*
        * ESLint provides rules, but it doesn't support TypeScript syntax; it may crash, ignores the syntax, or falsely report against the rule. 
        * For these cases, typescript-eslint creates extension rules; rules within the plugin that has the same functionality, but also supports TypeScript.
        */
        "@typescript-eslint/brace-style": [
            "warn",
            "1tbs",
            {
                "allowSingleLine": false
            }
        ],
        "@typescript-eslint/comma-dangle": [
            "warn",
            "never"
        ],
        "@typescript-eslint/comma-spacing": [
            "warn",
            {
                "after": true,
                "before": false
            }
        ],
        "@typescript-eslint/default-param-last": [
            "error"
        ],
        "@typescript-eslint/dot-notation": [
            "off"
            // This was turned off because .catch was being transformed to ["catch"]
            // "warn",
            // {
            //     "allowIndexSignaturePropertyAccess": true,
            //     "allowKeywords": false,
            //     "allowPrivateClassPropertyAccess": false,
            //     "allowProtectedClassPropertyAccess": false
            // }
        ],
        "@typescript-eslint/func-call-spacing": [
            "warn",
            "never"
        ],
        "@typescript-eslint/indent": [
            "warn",
            4
        ],
        "@typescript-eslint/init-declarations": [
            "error",
            "always"
        ],
        "@typescript-eslint/no-unsafe-argument": [
            "off" // Unfortunately working with JS APIs necessitates working with functions that accept an any type
        ],
        "@typescript-eslint/no-unsafe-call": [
            "off" // Unfortunately working with JS APIs necessitates working with functions that accept an any type
        ],
        "@typescript-eslint/no-unsafe-member-access": [
            "off" // Unfortunately working with JS APIs necessitates working with functions that accept an any type
        ],
        "@typescript-eslint/no-unsafe-assignment": [
            "off" // Unfortunately working with JS APIs necessitates working with functions that accept an any type
        ],
        "@typescript-eslint/keyword-spacing": [
            "warn",
            {
                "overrides": {
                    "from": { "before": true, "after": true },
                    "as": { "before": true, "after": true }
                    // { keyword: {before: <boolean>, after: <boolean>}}
                    // "abstract", "as", "async", "await", "boolean", "break", "byte", "case", "catch", "char", 
                    // "class", "const", "continue", "debugger", "default", "delete", "do", "double", "else", "enum", 
                    // "export", "extends", "false", "final", "finally", "float", "for", "from", "function", "get", 
                    // "goto", "if", "implements", "import", "in", "instanceof", "int", "interface", "let", "long", 
                    // "native", "new", "null", "of", "package", "private", "protected", "public", "return", "set", 
                    // "short", "static", "super", "switch", "synchronized", "this", "throw", "throws", "transient", 
                    // "true", "try", "typeof", "var", "void", "volatile", "while", "with", "yield"
                },
                "after": true,
                "before": false
            }
        ],
        "@typescript-eslint/lines-between-class-members": [
            "warn",
            "always",
            {
                "exceptAfterSingleLine": true
            }
        ],
        "@typescript-eslint/no-array-constructor": [
            "warn"
        ],
        "@typescript-eslint/no-dupe-class-members": [
            "error"
        ],
        // Rule updated from `no-duplicate-imports` 
        "import/no-duplicates": [
            "error",
            {
                "prefer-inline": true
            }
        ],
        "@typescript-eslint/no-empty-function": [
            "warn",
            {
                "allow": [
                    "arrowFunctions",
                    "generatorFunctions",
                    "generatorMethods",
                    "constructors",
                    "asyncMethods"
                ]
            }
        ],
        "@typescript-eslint/no-extra-parens": [
            "off"
        ],
        "@typescript-eslint/no-extra-semi": [
            "warn"
        ],
        "@typescript-eslint/no-implied-eval": [
            "error"
        ],
        "@typescript-eslint/no-inferrable-types": [
            "off"
        ],
        "@typescript-eslint/no-invalid-this": [
            "error"
        ],
        "@typescript-eslint/no-loop-func": [
            "error"
        ],
        "@typescript-eslint/no-loss-of-precision": [
            "error"
        ],
        "@typescript-eslint/unbound-method":[
            "off"
        ],
        "@typescript-eslint/no-magic-numbers": [
            "warn",
            {
                "ignore": [
                    -1,
                    0,
                    1,
                    2,
                    69,
                    420
                ]
            }
        ],
        "@typescript-eslint/no-redeclare": [
            "error",
            {
                "builtinGlobals": true,
                "ignoreDeclarationMerge": true
            }
        ],
        "@typescript-eslint/no-restricted-imports": [
            "off"
        ],
        "@typescript-eslint/no-shadow": [
            "warn" // This rule might cause some issues, feel free to disable
        ],
        "@typescript-eslint/no-throw-literal": [
            "warn"
        ],
        "@typescript-eslint/no-unused-expressions": [
            "warn"
        ],
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                //"varsIgnorePattern": ,
                "args": "none", // With restful request chains this rule gets a bit verbose when set to anything else
                //"argsIgnorePattern": ,
                "caughtErrors": "none",
                //"caughtErrorsIgnorePattern":
                "vars": "all", //. You can use the /* exported variableName */ comment block to indicate that this variable is being exported and therefore should not be considered unused.
                "ignoreRestSiblings": false
            }
        ],
        "@typescript-eslint/no-use-before-define": [
            "error",
            {
                "classes": false,
                "enums": true,
                "functions": false,
                "ignoreTypeReferences": true,
                "typedefs": true,
                "variables": true
            }
        ],
        "@typescript-eslint/no-useless-constructor": [
            "off"
        ],
        "@typescript-eslint/object-curly-spacing": [
            "warn",
            "always"
        ],
        "@typescript-eslint/padding-line-between-statements": [
            "off" // If inconsistent spacing between functions, returns, or class members starts to become an issue consider revisiting.
        ],
        "@typescript-eslint/quotes": [
            "warn",
            "double"
        ],
        "@typescript-eslint/require-await": [
            "error"
        ],
        "@typescript-eslint/return-await": [
            "off"
        ],
        "@typescript-eslint/semi": [
            "warn",
            "always"
        ],
        "@typescript-eslint/space-before-function-paren": [
            "warn",
            {
                "anonymous": "never",
                "asyncArrow": "always",
                "named": "never"
            }
        ],
        "@typescript-eslint/space-infix-ops": [
            "warn",
            {
                "int32Hint": true
            }
        ],
        "array-bracket-newline": [
            "warn",
            "consistent"
        ],
        "array-bracket-spacing": [
            "warn",
            "always",
            {
                "arraysInArrays": false,
                "objectsInArrays": true,
                "singleValue": false
            }
        ],
        "arrow-body-style": [
            "warn",
            "as-needed"
        ],
        "arrow-parens": [
            "warn",
            "always"
        ],
        "arrow-spacing": [
            "warn",
            {
                "after": true,
                "before": true
            }
        ],
        "block-spacing": [
            "warn",
            "always"
        ],
        "camelcase": [
            "warn",
            {
                "properties": "always",
                "ignoreDestructuring": false, // You may need to change this if importing from a third part library and using the spread operator.
                "ignoreGlobals": true,
                "ignoreImports": false // You may need to disable this if convention dictates importing as non-camelcase
            }
        ],
        "comma-style": [
            "warn",
            "last"
        ],
        "complexity": [
            "error",
            15
        ],
        "computed-property-spacing": [
            "warn",
            "always"
        ],
        "curly": [
            "warn",
            "all"
        ],
        "default-case": [
            "warn"
        ],
        "default-case-last": [
            "error"
        ],
        "dot-location": [
            "warn",
            "property"
        ],
        "eol-last": [
            "warn",
            "always"
        ],
        "eqeqeq": [
            "warn",
            "always"
        ],
        "func-style": [
            "error",
            "declaration",
            {
                "allowArrowFunctions": true
            }
        ],
        "function-call-argument-newline": [
            "warn",
            "consistent"
        ],
        "function-paren-newline": [
            "warn",
            "multiline"
        ],
        "generator-star-spacing": [
            "warn",
            {
                "after": true,
                "before": true
            }
        ],
        "implicit-arrow-linebreak": [
            "warn",
            "beside"
        ],
        "jsx-quotes": [
            "warn",
            "prefer-double"
        ],
        "key-spacing": [
            "warn",
            {
                "align": "colon", // This may become obnoxious consider other settings before removing
                "mode": "minimum",
                "afterColon": true,
                "beforeColon": false
            }

        ],
        "linebreak-style": [
            "warn",
            "windows"
        ],
        "max-classes-per-file": [
            "warn",
            1
        ],
        "max-len": [
            "warn",
            {
                "code": 160,
                "tabWidth": 4,
                "ignoreComments": true,
                "ignoreRegExpLiterals": true,
                "ignoreStrings": true,
                "ignoreTemplateLiterals": true,
                "ignoreTrailingComments": true,
                "ignoreUrls": true
            }
        ],
        "max-nested-callbacks": [
            "warn",
            8
        ],
        "max-statements-per-line": [
            "warn",
            {
                "max": 1
            }
        ],
        "multiline-ternary": [
            "error",
            "always-multiline"
        ],
        "new-parens": [
            "error",
            "always"
        ],
        "newline-per-chained-call": [
            "error",
            {
                "ignoreChainWithDepth": 3
            }
        ],
        "no-alert": [
            "warn"
        ],
        "no-caller": [
            "error"
        ],
        "no-confusing-arrow": [
            "error",
            {
                "allowParens": true
            }
        ],
        "no-console": [
            "warn"
        ],
        "no-continue": [
            "error"
        ],
        "no-else-return": [
            "warn",
            {
                "allowElseIf": true
            }
        ],
        "no-empty": [
            "warn",
            {
                "allowEmptyCatch": true
            }
        ],
        "no-eval": [
            "error"
        ],
        "no-extend-native": [
            "error"
        ],
        "no-extra-boolean-cast": [
            "warn"
        ],
        "no-floating-decimal": [
            "error"
        ],
        "no-iterator": [
            "error"
        ],
        "no-labels": [
            "error"
        ],
        "no-lone-blocks": [
            "error"
        ],
        "no-lonely-if": [
            "warn"
        ],
        "no-multi-assign": [
            "error"
        ],
        "no-multi-spaces": [
            "warn",
            {
                "exceptions": {
                    "ImportDeclaration": true,
                    "Property": true,
                    "VariableDeclarator": true
                },
                "ignoreEOLComments": true
            }
        ],
        "no-multi-str": [
            "warn"
        ],
        "no-multiple-empty-lines": [
            "warn",
            {
                "max": 2,
                "maxBOF": 1,
                "maxEOF": 2
            }
        ],
        "no-new-func": [
            "error"
        ],
        "no-new-object": [
            "error"
        ],
        "no-new-wrappers": [
            "warn"
        ],
        "no-octal-escape": [
            "error"
        ],
        "no-proto": [
            "error"
        ],
        "no-return-assign": [
            "warn"
        ],
        "no-script-url": [
            "error"
        ],
        "no-sequences": [
            "error"
        ],
        "no-trailing-spaces": [
            "warn",
            {
                "ignoreComments": true,
                "skipBlankLines": true
            }
        ],
        "no-unneeded-ternary": [
            "warn"
        ],
        "no-useless-computed-key": [
            "warn" // This turns "var a = { [0]: 0 };" into var a = { 0: 0 }; May be annoying
        ],
        "no-useless-concat": [
            "warn"
        ],
        "no-useless-rename": [
            "error"
        ],
        "no-useless-return": [
            "warn"
        ],
        "no-var": [
            "error"
        ],
        "no-void": [
            "error"
        ],
        "no-warning-comments": [
            "warn",
            {
                "location": "anywhere",
                "terms": [
                    "todo",
                    "hack",
                    "fixme",
                    "yikes"
                ]
            }
        ],
        "no-whitespace-before-property": [
            "warn"
        ],
        "nonblock-statement-body-position": [
            "warn",
            "below"
        ],
        "object-curly-newline": [
            "warn",
            {
                "ExportDeclaration": "never",
                "ImportDeclaration": "never",
                "ObjectExpression": {
                    "minProperties": 2 // Updated from 3
                },
                "ObjectPattern": {
                    "multiline": true
                }
            }
        ],
        /*
        *"object-shorthand": [1
        *    "warn",
        *    "consistent-as-needed"
        *],
        */
        "one-var": [
            "error",
            {
                "const": "never",
                "let": "never",
                "var": "never",
                "separateRequires": true
            }
        ],
        "operator-assignment": [
            "warn",
            "always"
        ],
        "prefer-arrow-callback": [
            "warn"
        ],
        "prefer-const": [
            "warn"
        ],
        "prefer-exponentiation-operator": [
            "error"
        ],
        "prefer-numeric-literals": [
            "error"
        ],
        "prefer-object-spread": [
            "warn"
        ],
        "prefer-promise-reject-errors": [
            "error"
        ],
        "prefer-rest-params": [
            "error"
        ],
        "prefer-spread": [
            "warn"
        ],
        "prefer-template": [
            "warn"
        ],
        "quote-props": [
            "warn",
            "as-needed" // more options required?
        ],
        "radix": [
            "error",
            "as-needed"
        ],
        "require-unicode-regexp": [
            "warn"
        ],
        "rest-spread-spacing": [
            "error",
            "never"
        ],
        "semi-spacing": [
            "warn",
            {
                "after": true,
                "before": false
            }
        ],
        "semi-style": [
            "warn",
            "last"
        ],
        "sort-imports": [
            "off"
            // This rule has proven overly obnoxious for not much gain in code readability
            // The auto-fixer for this rule cannot reorder imports just sub-modules
            // "warn",
            // {
            //     "allowSeparatedGroups": true,
            //     "ignoreCase": true
            // }
        ],
        "sort-keys": [
            "warn",
            "asc",
            {
                "minKeys": 8,
                "caseSensitive": false,
                "natural": false
            }
        ],
        "space-before-blocks": [
            "warn",
            {
                "classes": "never",
                "functions": "never",
                "keywords": "never"
            }
        ],
        "space-in-parens": [
            "warn",
            "never"
        ],
        "space-unary-ops": [
            "warn",
            {
                "nonwords": false,
                "words": true
            }
        ],
        "spaced-comment": [
            "warn",
            "always",
            {
                "exceptions": [
                    "-",
                    "+",
                    "~"
                ]
            }
        ],
        "switch-colon-spacing": [
            "warn",
            {
                "after": true,
                "before": false
            }
        ],
        "symbol-description": [
            "warn"
        ],
        "template-curly-spacing": [
            "warn",
            "never"
        ],
        "template-tag-spacing": [
            "warn",
            "never"
        ],
        "unicode-bom": [
            "error",
            "never"
        ],
        "wrap-iife": [
            "error",
            "outside",
            {
                "functionPrototypeMethods": false
            }
        ],
        "wrap-regex": [
            "error"
        ],
        "yield-star-spacing": [
            "warn",
            "both"
        ],
        "yoda": [
            "warn",
            "never",
            {
                "onlyEquality": true
            }
        ],
        // ~~~~~ Rules exclusive to the typescript eslint extension (not inherited from recommended)
        "@typescript-eslint/array-type": [
            "warn",
            {
                "default": "array",
                "readonly": "array"
            }
        ],
        "@typescript-eslint/ban-tslint-comment": [
            "off"
        ],
        "@typescript-eslint/class-literal-property-style": [
            "warn",
            "fields"
        ],
        "@typescript-eslint/consistent-indexed-object-style": [
            "warn",
            "record"
        ],
        "@typescript-eslint/consistent-type-assertions": [
            "error",
            {
                "assertionStyle": "as",
                "objectLiteralTypeAssertions": "never"
            }
        ],
        "@typescript-eslint/consistent-type-definitions": [
            "error",
            "interface"
        ],
        "@typescript-eslint/consistent-type-exports": [
            "off"
        ],
        "@typescript-eslint/consistent-type-imports": [
            "warn",
            {
                "prefer": "no-type-imports",
                "disallowTypeAnnotations": false
            }
        ],
        "@typescript-eslint/explicit-function-return-type": [
            "warn",
            {
                "allowExpressions": false,
                "allowTypedFunctionExpressions": true,
                "allowHigherOrderFunctions": false,
                "allowDirectConstAssertionInArrowFunctions": true,
                "allowConciseArrowFunctionExpressionsStartingWithVoid": true
            }
        ],
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "accessibility": "explicit",
                "overrides": {
                    "constructors": "no-public" // Might want to add arrow functions here
                }
            }
        ],
        "@typescript-eslint/explicit-module-boundary-types": [
            "warn"
        ], // Not really sure how you are able to have non-strict with other rules but guess i'll turn this on
        "@typescript-eslint/member-delimiter-style": [
            "warn"
        ],
        "@typescript-eslint/method-signature-style": [
            "warn",
            "method"
        ],
        // "@typescript-eslint/naming-convention":[], // I think other rules cover camelCase so this just feel redundant
        "@typescript-eslint/no-base-to-string": [
            "warn"
        ],
        "@typescript-eslint/no-confusing-non-null-assertion": [
            "warn"
        ],
        "@typescript-eslint/no-confusing-void-expression": [
            "error",
            {
                "ignoreArrowShorthand": true,
                "ignoreVoidOperator": true
            }
        ],
        "@typescript-eslint/no-dynamic-delete": [
            "error"
        ], // If you are disabling this rule consider changing your data structure
        "@typescript-eslint/no-extraneous-class": [
            "off"
        ], // I don't think we have developers using namespaces as classes, but if they wanted to I don't think the linter should stop them
        "@typescript-eslint/no-invalid-void-type": [
            "warn",
            {
                "allowInGenericTypeArguments": true,
                "allowAsThisParameter": false
            }
        ],
        "@typescript-eslint/no-meaningless-void-operator": [
            "error"
        ],
        "@typescript-eslint/no-non-null-asserted-nullish-coalescing": [
            "warn"
        ], // Wrap your expression in parenthesis
        "@typescript-eslint/parameter-properties": [
            "warn",
            {
                "allow":[ "private readonly" ],
                "prefer": "parameter-property"
            }
        ], // I like parameter properties
        "@typescript-eslint/no-require-imports": [
            "error"
        ],
        "@typescript-eslint/no-type-alias": [
            "warn",
            {
                "allowAliases": "in-unions-and-intersections",
                "allowCallbacks": "always",
                "allowConditionalTypes": "never",
                "allowConstructors": "never",
                "allowLiterals": "in-unions-and-intersections",
                "allowMappedTypes": "always",
                "allowTupleTypes": "never",
                "allowGenerics": "always"
            }
        ],
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": [
            "warn",
            {
                "allowComparingNullableBooleansToTrue": false,
                "allowComparingNullableBooleansToFalse": false
            }
        ], // I feel a bit torn about this one. I like the verbosity of an explicit comparison sometimes but it does add code bloat and points of failure with nully-operators
        /*"@typescript-eslint/no-unnecessary-condition":["warn", { "allowConstantLoopConditions": true,  "allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing": true}]*/
        "@typescript-eslint/no-unnecessary-qualifier": [
            "warn"
        ],
        "@typescript-eslint/no-unnecessary-type-arguments": [
            "off"
        ],
        "@typescript-eslint/non-nullable-type-assertion-style": [
            "warn"
        ],
        "@typescript-eslint/prefer-enum-initializers": [
            "warn"
        ],
        "@typescript-eslint/prefer-for-of": [
            "warn"
        ],
        "@typescript-eslint/prefer-function-type": [
            "warn"
        ], // Feel free to turn this off (although you may consider an interface restructuring first)
        "@typescript-eslint/prefer-includes": [
            "warn"
        ],
        "@typescript-eslint/prefer-literal-enum-member": [
            "off"
        ], // values are locally scoped 
        "@typescript-eslint/prefer-nullish-coalescing": [
            "off" // This rule was getting very annoying so it has been turned off going forward
        ],
        "@typescript-eslint/prefer-optional-chain": [
            "warn"
        ],
        "@typescript-eslint/prefer-readonly": [
            "warn",
            {
                "onlyInlineLambdas": false
            }
        ],
        "@typescript-eslint/prefer-readonly-parameter-types": [
            "off"
        ], // This level of verbosity for primitive types is excessive (assume anything you give to a function may be mutated)
        "@typescript-eslint/prefer-reduce-type-parameter": [
            "warn"
        ], // Use the built in template functionality
        "@typescript-eslint/prefer-regexp-exec": [
            "off"
        ],
        "@typescript-eslint/prefer-return-this-type": [
            "error"
        ],
        "@typescript-eslint/prefer-string-starts-ends-with": [
            "warn"
        ],
        "@typescript-eslint/prefer-ts-expect-error": [
            "warn"
        ],
        "@typescript-eslint/promise-function-async": [
            "warn",
            {
                "allowAny": true,
                "allowedPromiseNames": [
                    "Thenable"
                ],
                "checkArrowFunctions": true,
                "checkFunctionDeclarations": true,
                "checkFunctionExpressions": true,
                "checkMethodDeclarations": true
            }
        ],
        "@typescript-eslint/require-array-sort-compare": [
            "warn",
            {
                "ignoreStringArrays": true
            }
        ],
        "@typescript-eslint/sort-type-constituents": [
            // This rule has been turned off because the settings are not granular enough to allow for `let x: string | string[] = undefined`
            // It does not allow you to allow for arrays after literals without changing every group order.
            // Developers will have to sort their own keys if they care about order.
            "off" 
        ],
        "@typescript-eslint/strict-boolean-expressions": [
            "off"
        ],
        "@typescript-eslint/switch-exhaustiveness-check": [
            "warn"
        ],
        "@typescript-eslint/type-annotation-spacing": [
            "warn",
            {
                before: false,
                after: true
            }
        ],
        "@typescript-eslint/typedef": [
            "warn",
            {
                "arrayDestructuring": true,
                "arrowParameter": true,
                "memberVariableDeclaration": true,
                "objectDestructuring": true,
                "parameter": true,
                "propertyDeclaration": true,
                "variableDeclaration": true,
                "variableDeclarationIgnoreFunction": true
            }
        ],
        "@typescript-eslint/unified-signatures": [
            "warn"
        ],
        // This rule was added later and
        "@typescript-eslint/restrict-template-expressions": [
            "warn",
            {
                "allowNumber": true,
                "allowBoolean": true,
                "allowAny": true,
                "allowNullish": true,
                "allowRegExp": true,
                "allowNever": true
            }
        ],
        // ~~~~~ Rules set to "off" because the tslinter overrides their base behavior ~~~~~
        "comma-dangle": [
            "off"
        ],
        "brace-style": [
            "off"
        ],
        "comma-spacing": [
            "off"
        ],
        "default-param-last": [
            "off"
        ],
        "dot-notation": [
            "off"
        ],
        "func-call-spacing": [
            "off"
        ],
        "indent": [
            "off"
        ],
        "init-declarations": [
            "off"
        ],
        "keyword-spacing": [
            "off"
        ],
        "lines-between-class-members": [
            "off"
        ],
        "no-array-constructor": [
            "off"
        ],
        "no-dupe-class-members": [
            "off"
        ],
        "no-duplicate-imports": [
            "off"
        ],
        "no-empty-function": [
            "off"
        ],
        "no-extra-parens": [
            "off"
        ],
        "no-extra-semi": [
            "off"
        ],
        "no-implied-eval": [
            "off"
        ],
        "no-invalid-this": [
            "off"
        ],
        "no-loop-func": [
            "off"
        ],
        "no-loss-of-precision": [
            "off"
        ],
        "no-magic-numbers": [
            "off"
        ],
        "no-redeclare": [
            "off"
        ],
        "no-restricted-imports": [
            "off"
        ],
        "no-shadow": [
            "off"
        ],
        "no-throw-literal": [
            "off"
        ],
        "no-unused-expressions": [
            "off"
        ],
        "no-unused-vars": [
            "off"
        ],
        "no-use-before-define": [
            "off"
        ],
        "no-useless-constructor": [
            "off"
        ],
        "object-curly-spacing": [
            "off"
        ],
        "padding-line-between-statements": [
            "off"
        ],
        "quotes": [
            "off"
        ],
        "require-await": [
            "off"
        ],
        // This rule was renamed to have a `no-` in front of it
        "no-return-await": [
            "off"
        ],
        "semi": [
            "off"
        ],
        "space-before-function-paren": [
            "off"
        ],
        "space-infix-ops": [
            "off"
        ]
    }
}