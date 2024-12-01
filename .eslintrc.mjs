module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true
  },
  parser: '@babel/eslint-parser',
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    'react/react-in-jsx-scope': 'off', // Важливо для React 17+
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // Підтримка JSX у .js та .jsx файлах
    'react/display-name': 'off', // Можна залишити для зручності
    'react/no-unescaped-entities': 'off', // Для уникнення помилок з апострофами

    // Додані стилістичні правила
    'lines-around-comment': [
      'error',
      {
        beforeLineComment: true,
        beforeBlockComment: true,
        allowBlockStart: true,
        allowClassStart: true,
        allowObjectStart: true,
        allowArrayStart: true
      }
    ],

    'newline-before-return': 'error',

    'import/newline-after-import': [
      'error',
      {
        count: 1
      }
    ],

    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['export'], next: ['*'] },
      { blankLine: 'always', prev: ['*'], next: ['multiline-const', 'multiline-let', 'multiline-var', 'export'] }
    ]
  }
}

