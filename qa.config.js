const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    username: "nucknuck@681mail.com",
    password: "1234567",
    url: "https://thinking-tester-contact-list.herokuapp.com/"
  },
});
