const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log(message) {
          console.log(message)
          return null
        }
      })

      return config
    }
  }
});
