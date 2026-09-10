import { defineConfig, devices, type Project } from "@playwright/test";

/**
 * Plan de pruebas de F8 (docs/roadmap/08-testing-qa.md §3). Proyectos:
 *
 * - `<motor>-<ancho>`: la matriz de §3.1 para las suites de interacción.
 * - `static`: comprobaciones que no dependen del navegador (SEO, analítica); solo Chromium.
 * - `a11y`: axe-core en todas las rutas × tema × viewport (07 §4.2).
 * - `visual`: regresión visual. Solo dentro de la imagen oficial de Playwright (`pnpm test:docker`),
 *   que es la misma del CI, para que las capturas no dependan de las fuentes y el renderizado del host.
 */
const port = 4322;
const baseURL = `http://127.0.0.1:${port}`;

const interaction = /\/(navigation|i18n|theme|access|modules|faq|notify-form)\.spec\.ts$/;

const matrix: Project[] = [
  { name: "chromium-375", use: { ...devices["Pixel 7"], viewport: { width: 375, height: 812 } } },
  { name: "chromium-768", use: { ...devices["Desktop Chrome"], viewport: { width: 768, height: 1024 } } },
  { name: "chromium-1280", use: { ...devices["Desktop Chrome"], viewport: { width: 1280, height: 800 } } },
  { name: "chromium-1920", use: { ...devices["Desktop Chrome"], viewport: { width: 1920, height: 1080 } } },
  { name: "firefox-375", use: { ...devices["Desktop Firefox"], viewport: { width: 375, height: 812 } } },
  { name: "firefox-1280", use: { ...devices["Desktop Firefox"], viewport: { width: 1280, height: 800 } } },
  { name: "webkit-375", use: { ...devices["iPhone 12"], viewport: { width: 375, height: 812 } } },
  { name: "webkit-1280", use: { ...devices["Desktop Safari"], viewport: { width: 1280, height: 800 } } },
];

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : "list",
  snapshotPathTemplate: "{testDir}/visual/__screenshots__/{arg}{ext}",
  expect: {
    toHaveScreenshot: { maxDiffPixelRatio: 0.001, animations: "disabled", scale: "css" },
  },
  use: {
    baseURL,
    reducedMotion: "reduce",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  projects: [
    ...matrix.map((project) => ({ ...project, testMatch: interaction })),
    { name: "static", testMatch: /\/(seo|analytics)\.spec\.ts$/, use: { ...devices["Desktop Chrome"] } },
    { name: "a11y", testMatch: "a11y/**/*.spec.ts", use: { ...devices["Desktop Chrome"] } },
    { name: "visual", testMatch: "visual/**/*.spec.ts", use: { ...devices["Desktop Chrome"] } },
  ],
  webServer: {
    // Build propio de E2E: equivale a un despliegue de preview. Umami está configurado pero sin
    // `PUBLIC_DEPLOY_CONTEXT=production`, así que no debe cargarse (analytics.spec.ts); el formulario
    // apunta a un usuario de Buttondown ficticio que los tests interceptan con `page.route`.
    // `--ignore-lock`: Astro 7 no arranca un segundo preview del mismo proyecto (p. ej. el de Lighthouse o
    // uno manual en el 4321); los tests necesitan el suyo, con su build y su puerto.
    command: `pnpm build && pnpm preview --host 127.0.0.1 --port ${port} --ignore-lock`,
    url: `${baseURL}/`,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
    env: {
      // Astro 7 lanza el preview en segundo plano si detecta un agente de IA en la terminal; Playwright
      // necesita el proceso en primer plano. Definir la variable desactiva esa detección.
      ASTRO_PREVIEW_BACKGROUND: "false",
      PUBLIC_BUTTONDOWN_USER: "enki-e2e",
      PUBLIC_UMAMI_SRC: "https://analytics.example.com/script.js",
      PUBLIC_UMAMI_WEBSITE_ID: "00000000-0000-0000-0000-000000000000",
      PUBLIC_UMAMI_DOMAINS: "enki.rezzt.dev",
      PUBLIC_DEPLOY_CONTEXT: "preview",
    },
  },
});
