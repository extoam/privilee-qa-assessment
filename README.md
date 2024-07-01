# Privilee QA Assessment


#  1. Automated Test Scenario Development for the website


## Cypress Tests for MapPage


This project contains Cypress tests for the MapPage of the Privilee website. The tests are designed to verify UI elements, functionality, performance, and data accuracy. The tests are executed using GitHub Actions, and the test reports are stored in Cypress Cloud.


## Prerequisites


Before you can run the tests, you need to have the following installed:


- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Cypress](https://www.cypress.io/)


## Running Tests in GitHub Actions


The tests are set up to run automatically in GitHub Actions. The GitHub Actions configuration file is in `.github/workflows/Cypress_CI.yml`. The test reports are automatically uploaded to Cypress Cloud.


GitHub Action Test run -- `https://github.com/extoam/privilee-qa-assessment/actions/runs/9748056922 `
Cypress Cloud Test run -- `https://cloud.cypress.io/projects/rp2jth/runs/3/overview?roarHideRunsWithDiffGroupsAndTags=1`




## Test Report


Test reports are stored in Cypress Cloud. You can view the test reports in the Public Cypress Cloud Project  dashboard:
`https://cloud.cypress.io/projects/rp2jth/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&tagsMatch=ANY&timeRange=%7B%22startDate%22%3A%222023-07-02%22%2C%22endDate%22%3A%222024-07-01%22%7D`




### Test Structure


- **UI Verification**: Ensure that UI elements are present and functional.
- **Performance Validation**: Ensure that API response times are within acceptable limits.
- **Functional Tests**: Ensure that the core functionality works as expected from an end-user perspective.
- **Data Accuracy**: Ensure that the data displayed is accurate and consistent.


Detailed Tests Coverage Report can be found in `Test Summary Report.txt`






#  2. Automated API Test 


This repository contains also Postman automated tests to validate the different endpoints available at `https://dummyapi.online/`.


## Endpoints Covered


The following endpoints are tested:


- `/api/movies`
- `/api/blogposts`
- `/api/users`
- `/api/pokemon`
- `/api/products`


## Prerequisites


Ensure you have the following installed:


- [Node.js](https://nodejs.org/en/download/)
- [Newman](https://www.npmjs.com/package/newman)
- [Postman]  (https://www.postman.com/)




## Test Coverage


API test scripts were created using Postman Tool and chai.js assertions.
The covered tests coverage can be found in the postman collection `.collections/Privilee_API_Test_Assessment.postman_collection.json` as well as Postman Cloud `https://www.postman.com/cloudy-shadow-285835/workspace/qa-assessment/collection/1431873-d2572fe6-1ab0-4c93-ac49-3df799d7ff98?action=share&source=copy-link&creator=1431873`


Global variables and test data variables are stored separately in the environment collection `.collections/DummyAPI_Variables.postman_environment.json` and Postman cloud `https://www.postman.com/cloudy-shadow-285835/workspace/qa-assessment/environment/1431873-778254ca-6009-41a2-8683-81548be8dbfc?action=share&source=copy-link&creator=1431873`


## Continuous Integration


This repository is integrated with GitHub Actions for Continuous Integration (CI). The tests are executed automatically on every push request to the main branch.


GitHub Actions Workflow


The GitHub Actions workflow file is located at `.github/workflows/Postman_CI.yml` It uses Newman CL to run the tests and generate a report.
Postman tests and Environment Collections are located - at `./collections`


## Viewing Test Reports


After the tests run, the Newman report is generated as an HTML file. In the GitHub Actions workflow, the report is uploaded as an artifact. To view the test report:


   1.  Go to the Actions tab in your GitHub repository `https://github.com/extoam/privilee-qa-assessment/actions/runs/9748005464`
   2.  Select the workflow run you are interested in.
   3.  Download the Newman-report artifact to view the detailed test report.



