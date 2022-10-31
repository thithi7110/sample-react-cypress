import { defineConfig } from "cypress";
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin';

export default defineConfig({
  chromeWebSecurity: false,


  e2e: {

    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config);
    },
  },

  component: {
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config);
    },
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
