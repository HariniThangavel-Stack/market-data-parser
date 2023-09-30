module.exports = {
   env: {
      browser: true,
      es2021: true
   },
   extends: [
      'eslint:recommended',
      'airbnb-base'
   ],
   parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module'
   },
   rules: {
      'max-len': ['error', { code: 200 }],
      indent: 'off',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'consistent-return': 'off',
      'no-unreachable': 'error',
      eqeqeq: ['error', 'smart'],
      'no-return-await': 'error',
      'no-unused-labels': 'error',
      'no-redeclare': 'error',
      'import/extensions': ['error', 'always', { ignorePackages: true }],
      'comma-dangle': ['error', 'never'],
      'no-shadow': ['error', { builtinGlobals: false, hoist: 'functions', allow: [] }],
      'arrow-parens': ['error', 'as-needed']
   }
};
