module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'next',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['**/dist/**', '**/*.stories.tsx'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'off',
    'react/jsx-props-no-spreading': 0,
    'arrow-body-style': 0,
    'react/prop-types': 0,
    'no-use-before-define': 0,
    'import/extensions': 0,
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 0,
    'react/require-default-props': 0,
    'react/function-component-definition': 0,
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/no-var-requires': ['warn'],
    '@typescript-eslint/ban-ts-comment': ['warn'],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.ts', '.jsx', '.tsx'] },
    ],
    // Disable the base `no-shadow` rule as it can report incorrect errors in typescript
    // Enable `@typescript-eslint/no-shadow`
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-shadow.md
    'no-shadow': 'off',
    // Disabled, we only require label to nest input OR use htmlFor
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/b800f40a2a69ad48015ae9226fbe879f946757ed/docs/rules/label-has-associated-control.md
    'jsx-a11y/label-has-associated-control': [
      'off',
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'both',
        depth: 25,
      },
    ],
    // Require that Labels nest their input or uses htmlFor
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
    'jsx-a11y/label-has-for': [
      'error',
      {
        components: [],
        required: {
          some: ['nesting', 'id'],
        },
        allowChildren: false,
      },
    ],
  },
  overrides: [
    {
      files: ['*module.scss.d.ts'],
      rules: {
        camelcase: 'off',
      },
    },
  ],
};
