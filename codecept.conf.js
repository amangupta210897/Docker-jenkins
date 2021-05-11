const { Helper } = require("codeceptjs");

exports.config = {
  output: './output',

  helpers: {
    Playwright: {
      url: 'https://staging.yellowmessenger.com/user',
      show: true,
      windowSize: '1200x900'
    }  
  },

  include: {
    I: './steps_file.js'
  },

  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    allure:{
      output_dir:'allure-results',
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'codeceptjsdemo'
}
