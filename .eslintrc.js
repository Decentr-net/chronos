module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    project: 'tsconfig.eslint.json',
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@angular-eslint/recommended',
  ],
  "plugins": [
    '@angular-eslint/template',
    '@typescript-eslint',
  ],
  overrides: [
    {
      files: [
        "*.ts",
      ],
      parserOptions: {
        project: [
          "tsconfig.*?.json",
        ],
        createDefaultProgram: true,
      },
      extends: [
        "plugin:@angular-eslint/recommended",
      ],
      rules: {
        "@typescript-eslint/no-unsafe-member-access": [
          "off",
        ],
        "@typescript-eslint/no-floating-promises": [
          "off",
        ],
        "@typescript-eslint/ban-types": [
          "off",
        ],
        "@typescript-eslint/no-unsafe-assignment": [
          "off",
        ],
        "@typescript-eslint/no-unsafe-return": [
          "off",
        ],
        "semi": [
          "off",
        ],
        "@typescript-eslint/semi": [
          "error",
        ],
        "comma-dangle": [
          "error",
          "always-multiline",
        ],
      },
    },
  ],
};
