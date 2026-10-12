const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: true,
  e2e: {
    baseUrl: 'https://www.admlucid.com',
  },
});
