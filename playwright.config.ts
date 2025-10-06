import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'list',

  use: {
    baseURL: 'http://localhost:3009',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5 landscape'] },
    },
    {
      name: 'Tablet Safari',
      use: { ...devices['iPad Pro landscape'] },
    },
  ],

  webServer: {
    command: 'pnpm start',
    url: 'http://localhost:3009',
    reuseExistingServer: !process.env.CI,
  },
})
