// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      // @ts-ignore
      eslintPluginPrettierRecommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
  
    ],
    processor: angular.processInlineTemplates,
    rules: {
      'prettier/prettier': ['error'],
      "@typescript-eslint/no-non-null-assertion": "off",

"@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/prefer-as-const": "error",
        "@typescript-eslint/typedef": [
          "error",
          {
            "arrowParameter": false,
            "variableDeclaration": true,
            "memberVariableDeclaration": true,
            "arrayDestructuring": false,
            "objectDestructuring": false
          }
        ],
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "prefix": "app",
            "style": "camelCase"
          }
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "prefix": "app",
            "style": "kebab-case"
          }
        ]
    },
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    rules: {},
  }
);
