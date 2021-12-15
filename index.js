module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
        'react/require-default-props': 'off',
      },
    },
  ],
}
