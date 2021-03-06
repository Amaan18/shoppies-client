module.exports = {
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parserOptions: {
                project: 'tsconfig.json',
                sourceType: 'module',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: ['plugin:prettier/recommended'],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'prettier/prettier': ['error', { singleQuote: true }],
    },
};
