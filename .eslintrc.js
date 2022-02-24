module.exports = {
  root: true,
  env: {
    browser: true, // browser global variables
    // adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12.
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'plugin:prettier/recommended'
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    'prettier/prettier': 'error',
    'linebreak-style': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'accumulator', // for reduce accumulators
          'e', // for e.returnvalue
          'ctx', // for Koa routing
          'context', // for Koa routing
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          '$scope', // for Angular 1 scopes
          'staticContext', // for ReactRouter context
          'state' // for vuex state
        ]
      }
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    // https://stackoverflow.com/questions/68551748/missing-file-extension-tsx-for-typescript-react-project
    'no-console': 'off',
    'no-debugger': 'off',
    'object-curly-spacing': 'off',
    'space-before-function-paren': 'off',
    camelcase: 'off',
    'template-curly-spacing': 'off',
    indent: 'off',
    'prefer-const': 0,
    'import/prefer-default-export': 'off', // 关掉Prefer default export报错 https://stackoverflow.com/questions/52627477/eslint-prefer-default-export-import-prefer-default-export
    'vue/require-default-prop': 'off',
    "allowForLoopAfterthoughts": true //允许++写法
  }
}
