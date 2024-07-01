# Privilee QA Assessment


## 1. Website Automated Tests Development 


### Cypress.io tool for Map Page frontend automation testing

The Map Page of the Privilee website was automated using the `Cypress.io` framework. [Cypress Test Script](https://github.com/extoam/privilee-qa-assessment/blob/main/cypress/e2e/mapPageTests.cy.js)
 is designed to verify UI elements, functionality, performance, and data accuracy of the web page. The tests are executed in  CI/CD pipeline in GitHub Actions, and the test reports are stored automatically in Cypress Cloud.


### Prerequisites

The following dependencies are used for test execution:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Cypress](https://www.cypress.io/)


### Running Tests in GitHub Actions

The tests are set up to run automatically in GitHub Actions. The GitHub Actions configuration file is stored in `.github/workflows/Cypress_CI.yml`. 

[GitHub Action Test run](https://github.com/extoam/privilee-qa-assessment/actions/runs/9748056922)

Test reports are automatically uploaded to Cypress Cloud.

[Cypress Cloud Test run](https://cloud.cypress.io/projects/rp2jth/runs/3/overview?roarHideRunsWithDiffGroupsAndTags=1)



### Test Run Report

Detailed Test Run reports are stored in Cypress Cloud and can be found in the [Public Project dashboard](https://cloud.cypress.io/projects/rp2jth/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&tagsMatch=ANY&timeRange=%7B%22startDate%22%3A%222023-07-02%22%2C%22endDate%22%3A%222024-07-01%22%7D)


### Test Structure

The Cypress test script covers different aspects of the Map page of Privilee website verification.
All implemented tests ensure the Map Page is functional, user-friendly, and performs well. 

- **UI Verification**: Ensure that UI elements are present and functional.
- **Performance Validation**: Ensure that API response times are within acceptable limits.
- **Functional Tests**: Ensure that the core functionality works as expected from an end-user perspective.
- **Data Accuracy**: Ensure that the data displayed is accurate and consistent.

Detailed Tests Coverage  can be found in [Cypress Test Summary Report.txt](https://github.com/extoam/privilee-qa-assessment/blob/main/Cypress%20Test%20Summary%20Report.txt)



##  2. Automated API Test 

This repository contains  Postman automated tests to validate the different endpoints available at (https://dummyapi.online/).
API test scripts were created using Postman Tool and chai.js assertions.


### Endpoints Covered

The following endpoints are tested:

- GET `/api/movies`
- GET `/api/blogposts`
- GET `/api/users`
- GET `/api/pokemon`
- GET `/api/products`


### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Newman](https://www.npmjs.com/package/newman)
- [Postman](https://www.postman.com/)

### Test Coverage

To ensure API reliability, performance, and usability and that the requests work as expected the following API tests have been implemented for dummyapi.online endpoints:
  1. Status Code Tests
  2. Response Time Tests
  3. Response Body Tests
  4. Header Tests
  5. Response Data Validation Tests
  6. Schema Validation


The tests coverage can be found in the postman collection `.collections/Privilee_API_Test_Assessment.postman_collection.json` as well as [Postman Cloud Collection](https://www.postman.com/cloudy-shadow-285835/workspace/qa-assessment/collection/1431873-d2572fe6-1ab0-4c93-ac49-3df799d7ff98?action=share&source=copy-link&creator=1431873)

Global variables and test data are stored separately in the environment collection `.collections/DummyAPI_Variables.postman_environment.json` and [Postman cloud environment](https://www.postman.com/cloudy-shadow-285835/workspace/qa-assessment/environment/1431873-778254ca-6009-41a2-8683-81548be8dbfc?action=share&source=copy-link&creator=1431873)


### Running Postman API Tests in GitHub Actions


Postman API tests can be run in GitHub Actions. The tests are executed automatically on every push request to the main branch.
The GitHub Actions workflow file is located at `.github/workflows/Postman_CI.yml` 
It uses Newman CL to run the tests and generate a report.
Postman tests and Environment Collections are located - at `./collections`


### Viewing Postman Test Reports

After the tests run, the Newman report is generated as an HTML file. 
In the GitHub Actions workflow, the report is uploaded as an artifact. To view the test report:

   1.  Go to the Actions tab in your [GitHub repository](https://github.com/extoam/privilee-qa-assessment/actions/runs/9748005464)
   2.  Select the workflow run you are interested in.
   3.  Download the Newman-report artifact to view the detailed test report.



