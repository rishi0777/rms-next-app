const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  /* type check */
  '**/*.ts?(x)': () => 'tsc --noEmit --pretty',

  /* lint-staged with `next lint`
  https://nextjs.org/docs/basic-features/eslint#lint-staged */
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],

  /* stylelint */
  '**/*.{css,scss}': 'stylelint --fix',
  /* prettier */
  '**/*.{js,jsx,ts,tsx,css,scss,md,mdx,json}': 'prettier --write',
};
