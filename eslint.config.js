//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'
import importPlugin from 'eslint-plugin-import-x'

export default [
  ...tanstackConfig,
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
          ],

          // 👇 This ensures "@/db" and all "@/..." imports come AFTER external imports
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after',
            },
          ],

          pathGroupsExcludedImportTypes: ['builtin', 'external'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
]
