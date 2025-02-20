
module.exports = {
  e2e: {
      baseUrl: 'https://practice.expandtesting.com/notes/api'
  }
};
const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", { downloadFile });
    },
  },
});
