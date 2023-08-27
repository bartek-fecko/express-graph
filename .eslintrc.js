module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'array-bracket-spacing': ['warn'],
        'object-curly-spacing': ['warn', 'always'],
        'no-console': 'off',
        'no-useless-escape': 'off',
        'prefer-const': ['error'],
        '@typescript-eslint/no-explicit-any': ['error'],
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
    },
};
