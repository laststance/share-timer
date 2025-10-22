import nextConfig from 'eslint-config-next'

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
  ...nextConfig,
]

export default config
