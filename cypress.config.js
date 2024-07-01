const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "rp2jth",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

