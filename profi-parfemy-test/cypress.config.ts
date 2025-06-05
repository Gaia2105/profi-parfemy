import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.profi-parfemy.cz',
    projectId: "wtpxy4",
    setupNodeEvents(on, config) {
      // events, если нужны
    }
  },
  env: {
    siteLanguage: "cz"
  }
});

