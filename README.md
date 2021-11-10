# [@commission-on-post/eslint-config-recommended](https://www.npmjs.com/package/@commission-on-post/eslint-config-recommended)
The official [**Commission on Peace Officer Standards and Training**](https://github.com/Commission-on-POST) linting package.

## Install
```bash
$ npm install @typescript-eslint/parser
$ npm install @commission-on-post/tslint-config-recommended
```
---

## Recommended `.eslint.json`
```json
{
    "root": true,
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "./tsconfig.json"
    },
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        // You do not need the other "recommended" sets they are included in the POST rules
        "@commission-on-post/eslint-config-recommended"
    ],
    "rules": {
    }
}
```
---
### Peer Dependencies
| Package | Version |
|---------|---------|
| @typescript-eslint/eslint-plugin | >=5.3.0 |
| @typescript-eslint/parser | >=5.3.0 |
| eslint | >=8.1.0 |
| typescript | >=4.4.4 |
---
### Workspace Setup
#### Suggested VS Code Extensions
Name | Description | [:large_blue_circle:](##Scripts "LOGO / LINK") 
--|--|:--:
**ESLint**| Integrates ESLint into VS Code. The extension uses the ESLint library installed in the opened workspace folder |[<img alt="ES-Lint Logo" width="120px" src="https://dbaeumer.gallerycdn.vsassets.io/extensions/dbaeumer/vscode-eslint/2.2.2/1634813919455/Microsoft.VisualStudio.Services.Icons.Default"/>](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
**LintLens - ESLint rules made easier** | Augment your ESLint rules in Visual Studio Code by Adding metadata and usage information beside each ESLint rule. |[<img alt="LinLens Logo" width="120px" src="https://cdn.vsassets.io/v/M194_20211025.9/_content/Header/default_icon_128.png"/>](https://marketplace.visualstudio.com/items?itemName=ghmcadams.lintlens)

#### VS Code setting.json (fix on save)
- If you have format on save in vs code you may need to disable it, because mine started fighting.
```json
// (file->preferences->settings [switch to json view])
"eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  }
```
