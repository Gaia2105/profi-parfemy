import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.profi-parfemy.cz",
    supportFile: "cypress/support/e2e.ts",
    projectId: "wtpxy4"
  }
});