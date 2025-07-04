module.exports = {
    extends: [
      'next/core-web-vitals',
      'eslint:recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'plugin:prettier/recommended',
    ],
    plugins: ['import'],
    rules: {
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',    // react, fs, etc.
            'external',   // 3rd-party libs
            'internal',   // alias: @/hooks, @/components, vs.
            'parent',     // ../
            'sibling',    // ./
            'index'       // ./index
          ],
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'always',
        },
      ],
    },
  };
  