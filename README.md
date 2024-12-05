# Playwright UI and API automation suite instruction
  - Automation framework leveraging
    - Playwright JS
    - Page Object model Concept 
    - Data-Driven Concept 
    - Keyword Drien Concept
    - Allure Report 
    - KISS & Dry, SOLID, Clean Code Principle
    - Reusability, Scalability

## Pre Requirement to execute the automation suite
  - Install Latest version of NodeJS
  - Install Java and Configure environment variable (this only for Allure report)
  - Install VS Code or any other editor or you can execute it from the CMD command prompt or Terminal

## Clone the project in your local machine from GitHub
  - Clone Project > [GitHub Repo(git@github.com:gits5213/netlifyAppUIAutomation.git)
  - Open with VS Code 
  - Create a file (.env.secret) file on your project root
    - Add Credential (For now I am adding it, only for instruction purposes)
      - USERNAME=admin 
      - PASSWORD=password123
 
## Executing end-to-end test suite
  - Runs the end-to-end tests in a headless mode.
    - CMD/Terminal > Project root > npm run test
  - Runs the end-to-end tests in a headed (Browser) mode.
    - CMD/Terminal > Project root > npm run browser
    
## Generating Allure Report and open on a browser
  - If all the tests are passing or failing it doesn't matter
    - CMD/Terminal > Project Root > npm run post-test on the terminal

## CI Pipe (Push & Nightly) build Configuration 
  - Configured CI (Github action) based on each push build
    - It will automatically execute an automation regression suite based on each push, it will generate an allure report and deploy the allure report to the GitHub page (github.io host)
  - Configured CI (Github action) nightly build 
    - It will automatically execute the automation regression suite overnight, it will generate an allure report, and deploy the allure report to the  GitHub page (github.io host)

## Allure report published on GitHub page
  - [Navigate to the Repogitory](https://github.com/gits5213/netlifyAppUIAutomation)
    - Right side > Under the About section 
      - Click on the GitHub page Link, The Link will update with each trigger on the  build and save the Result's history. 
