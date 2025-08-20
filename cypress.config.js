const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    username: "51093801@code-gmail.com",
    password: "7654321",
    url: "https://thinking-tester-contact-list.herokuapp.com/"
  },
});
