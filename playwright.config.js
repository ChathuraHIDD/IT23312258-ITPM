// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,

  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    slowMo: 500,
  },

  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['list']
  ],
});