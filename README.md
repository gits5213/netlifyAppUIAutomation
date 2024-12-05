# Playwright ui and api automation sutie instruction
  - Automation Framewrok leveraging
    - Playwright JS
    - Page Object model Concept 
    - Data Driven Concept 
    - Keyword Drien Concept
    - Allure Report 
    - KISS & Dry, SOLID, Clean Code Principle
    - Reusability, Scalability

## Pre Requirment to executing the automation suite
  - Install Latest version of NodeJS
  - Install Java and Configure environment variable (this only for allure report)
  - Install VS Code or any other editor or you can execute it from the CMD command prompt or Terminal

## Clone the project in your local machine from GitHub
  - Clone Project (GitHub Repo)
  - Open with VS Code 
  - Create a file (.env.secret) file on your project root
    - Add Credential (For now I am adding it, only instruction purpose)
      - USERNAME=admin 
      - PASSWORD=password123
 
## Executing end to end test
  - Runs the end-to-end tests in a headless mode.
    - CMD/Terminal > Project root > npm run test
  - Runs the end-to-end tests in a headed (Browser) mode.
    - CMD/Terminal > Project root > npm run browser
    
## Generating Allure Report
  - If, all the tests is passing then allure report will automatically open in a browser
  - If, tests are failing then 
    - CMD/Terminal > Project Root > npm run posttest on the terminal

## CI Pipe Configuration 
  - Configured CI (Github action) based on each push build
    - It will automatically execute automation regression suite based on each push and generate allure report and deploy allure report to github page (github.io host)
  - Configured CI (Github action) nightly build 
    - It will automatically execute automation regression suite overnight and generate allure report and deploy allure report to github page (github.io host)
