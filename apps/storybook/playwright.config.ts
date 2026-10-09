import { defineConfig, devices } from '@playwright/test';

const PORT = 6106;

// Real-browser tests run against the static Storybook build, so they exercise what is published.
export default defineConfig({
  testDir: './browser-tests',
  testMatch: '**/*.browser.ts',
  fullyParallel: true,
  forbidOnly: process.env['CI'] !== undefined,
  reporter: 'list',
  use: {
    baseURL: `http://localhost:${String(PORT)}`,
    trace: 'retain-on-failure',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: `vite preview --outDir storybook-static --port ${String(PORT)} --strictPort`,
    port: PORT,
    reuseExistingServer: process.env['CI'] === undefined,
  },
});
