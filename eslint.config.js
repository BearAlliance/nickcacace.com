const angularEslint = require('@angular-eslint/eslint-plugin');
const angularTemplate = require('@angular-eslint/eslint-plugin-template');
const angularTemplateParser = require('@angular-eslint/template-parser');
const tsParser = require('@typescript-eslint/parser');

module.exports = [
  {
    ignores: ['projects/**/*'],
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        createDefaultProgram: true,
        ecmaVersion: 2020,
        project: ['tsconfig.json'],
        sourceType: 'module',
      },
    },
    plugins: {
      '@angular-eslint': angularEslint,
      '@angular-eslint/template': angularTemplate,
    },
    processor: angularTemplate.processors['extract-inline-html'],
    rules: {
      ...angularEslint.configs.recommended.rules,
      '@angular-eslint/prefer-standalone': 'off',
      '@angular-eslint/component-selector': [
        'error',
        {
          prefix: 'app',
          style: 'kebab-case',
          type: 'element',
        },
      ],
      '@angular-eslint/directive-selector': [
        'error',
        {
          prefix: 'app',
          style: 'camelCase',
          type: 'attribute',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    languageOptions: {
      parser: angularTemplateParser,
    },
    plugins: {
      '@angular-eslint/template': angularTemplate,
    },
    rules: {
      ...angularTemplate.configs.recommended.rules,
    },
  },
];
