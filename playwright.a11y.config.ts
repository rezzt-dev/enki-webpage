import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e/a11y",
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL: "http://127.0.0.1:4321",
    browserName: "chromium",
    reducedMotion: "reduce",
    trace: "retain-on-failure",
  },
  webServer: {
    command: "pnpm preview --host 127.0.0.1 --port 4321",
    port: 4321,
    reuseExistingServer: !process.env.CI,
  },
});
