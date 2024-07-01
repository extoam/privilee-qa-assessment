const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "cb1uoc",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

