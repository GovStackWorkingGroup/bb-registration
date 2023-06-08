const chai = require('chai');
const { spec } = require('pactum');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const {
  localhost,
  dataStatisticsEndpoint,
  dataStatisticsResponseSchema,
  defaultExpectedResponseTime,
} = require('./helpers/helpers');

chai.use(require('chai-json-schema'));

let specDataStatistics;

const baseUrl = localhost + dataStatisticsEndpoint;
const endpointTag = { tags: `@endpoint=/${dataStatisticsEndpoint}` };

Before(endpointTag, () => {
  specDataStatistics = spec();
});

// Scenario: Retrieve the service statistics
Given(
  'User wants to retrieve the service statistics',
  () => 'User wants to retrieve the service statistics'
);

When(
  'User sends GET request with given {string} as Information-Mediator-Client header',
  InformationMediatorClient =>
    specDataStatistics
      .get(baseUrl)
      .withHeaders('Information-Mediator-Client', InformationMediatorClient)
);

Then('User receives a response', async () => await specDataStatistics.toss());

Then('The response should be returned in a timely manner', () =>
  specDataStatistics
    .response()
    .to.have.responseTimeLessThan(defaultExpectedResponseTime)
);

Then('The response should have status 200', () =>
  specDataStatistics.response().to.have.status(200)
);

Then('The response should match json schema', () =>
  chai
    .expect(specDataStatistics._response.json)
    .to.be.jsonSchema(dataStatisticsResponseSchema)
);

// Scenario: Retrieve the service statistics using optional parameters
When(
  'User provides optional query parameters {string} as startDate {string} as endDate {string} as registrationName {string} as operator {string} as role {string} as timeframe',
  (startDate, endDate, registrationName, operator, role, timeframe) =>
    specDataStatistics.withQueryParams({
      startDate: startDate,
      endDate: endDate,
      registrationName: registrationName,
      operator: operator,
      role: role,
      timeframe: timeframe,
    })
);

Then('The response header content-type should be {string}', expected =>
  specDataStatistics.response().to.have.header('content-type', expected)
);

// Scenario: Unable to retrieve the service statistics because of an invalid header
Then('The response should have status 400', () =>
  specDataStatistics.response().to.have.status(400)
);

// Scenario: Unable to retrieve the service statistics because of a missing header
When('User sends GET request without Information-Mediator-Client header', () =>
  specDataStatistics.get(baseUrl)
);

// Scenario: Unable to retrieve the service statistics because they do not exist
When(
  'User provides query parameter {string} as registrationName',
  registrationName => {
    specDataStatistics.withQueryParams('registrationName', registrationName);
  }
);

Then('The response should have status 404', () =>
  specDataStatistics.response().to.have.status(404)
);

After(endpointTag, () => {
  specDataStatistics.end();
});
