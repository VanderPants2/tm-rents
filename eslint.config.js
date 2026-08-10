import js from '@eslint/js';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import sortDestructureKeys from 'eslint-plugin-sort-destructure-keys';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {ignores: ['dist']},
    js.configs.recommended,
    {
        files: ['**/*.{ts,tsx}'],
        extends: [tseslint.configs.base],
        languageOptions: {
            globals: globals.browser,
            parserOptions: {ecmaFeatures: {jsx: true}},
        },
        plugins: {
            react,
            'sort-destructure-keys': sortDestructureKeys,
        },
        rules: {
            '@typescript-eslint/no-unused-vars': 'error',
            'no-undef': 'off',
            'no-unused-vars': 'off',
            'react/jsx-sort-props': 'error',
            'sort-destructure-keys/sort-destructure-keys': 'error',
        },
        settings: {react: {version: 'detect'}},
    },
    {
        files: ['*.{js,ts}'],
        languageOptions: {globals: globals.node},
    },
    prettierRecommended,
);
