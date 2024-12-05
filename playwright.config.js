const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  reporter: [
    ['line'],
    ['junit', {outputFile: 'results.xml'}],
    ["allure-playwright",
      {
        detail: true,
        outputFolder: "allure-results",
        suiteTitle: false,
      },
    ]

  ],
  use: {
    baseURL: 'https://animated-gingersnap-8cf7f2.netlify.app/',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: "e2e",
      use: {
        browserName: 'chromium',
        viewport: {width: 1280, height: 1400},
        headless: true,
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
        launchOptions:{
          args: ["--start-maximized"]
         },
        contextOptions: {
          ignoreHTTPSErrors: true
         }
      }
    },
    
    {
      name: 'chrome',
      use: {
         browserName: 'chromium',
         headless: false,
         screenshot: 'only-on-failure',
         trace: 'retain-on-failure',
         //viewport: {width: 1280, height: 800},
         viewport: null,
         launchOptions:{
          //slowMo: 50,
          args: ["--start-maximized"]
         },
         contextOptions: {
          ignoreHTTPSErrors: true
         }
        },
    },
  ],
});
