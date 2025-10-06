import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
})

const config = [
  {
    ignores: [
      '**/node_modules/**',
      '.next/**',
      'out/**',
      'playwright-report/**',
      'test-results/**',
      'coverage/**',
      'next-env.d.ts',
      'public/**',
    ],
  },
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
  }),
]

export default config
