const chai = require('chai');
const { spec } = require('pactum');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const {
  header,
  localhost,
  defaultExpectedResponseTime,
  applicantApplicationsEndpoint,
  applicantApplicationsResponseSchema,
} = require('./helpers/helpers');

chai.use(require('chai-json-schema'));

let specApplicationsList;

const baseUrl = localhost + applicantApplicationsEndpoint;
const endpointTag = { tags: `@endpoint=/${applicantApplicationsEndpoint}` };

Before(endpointTag, () => {
  specApplicationsList = spec();
});

// Scenario: Successfully retrieves all application files smoke type test
Given(
  'User wants to retrieve all application files',
  () => 'User wants to retrieve all application files'
);

When(
  'GET request to get all application files is sent with given Information-Mediator-Client header',
  () => {
    specApplicationsList.get(baseUrl).withHeaders(header.key, header.value);
  }
);

Then('The response from the \\/applications endpoint is received', async () =>
  specApplicationsList.toss()
);

Then(
  'The \\/applications response should be returned in a timely manner 15000ms',
  () =>
    specApplicationsList
      .response()
      .to.have.responseTimeLessThan(defaultExpectedResponseTime)
);

Then('The \\/applications response should have status 200', () =>
  specApplicationsList.response().to.have.status(200)
);

Then('The \\/applications response should match json schema', () =>
  chai
    .expect(specApplicationsList._response.json)
    .to.be.jsonSchema(applicantApplicationsResponseSchema)
);

// Scenario: Successfully retrieves all application files that match the serviceId provided in optional parameter
// Others Given, When, Then are written in the aforementioned example
When(
  'GET request to get all application files is sent with given Information-Mediator-Client header and a payload with {string} as serviceId parameter',
  serviceId => {
    specApplicationsList
      .get(baseUrl)
      .withHeaders(header.key, header.value)
      .withQueryParams('serviceId', serviceId);
  }
);

// Scenario: Successfully retrieves all application files that match the applicantId provided in optional parameter
// Others Given, When, Then are written in the aforementioned example
When(
  'GET request to get all application files is sent with given Information-Mediator-Client header and a payload with {string} as applicantId parameter',
  applicantId => {
    specApplicationsList
      .get(baseUrl)
      .withHeaders(header.key, header.value)
      .withQueryParams('applicantId', applicantId);
  }
);

// Scenario: Successfully retrieves all application files when provides all optional parameters
// Others Given, When, Then are written in the aforementioned example
When(
  'The request contains a payload with {string} as serviceId parameter',
  serviceId => {
    specApplicationsList.withQueryParams('serviceId', serviceId);
  }
);

When(
  'The request contains a payload with {string} as applicantId parameter',
  applicantId => {
    specApplicationsList.withQueryParams('applicantId', applicantId);
  }
);

When(
  'The request contains a payload with {int} as firstResult, {int} as maxResult, {string} as sortBy and {string} as sortOrder',
  (firstResult, maxResult, sortBy, sortOrder) => {
    specApplicationsList.withQueryParams({
      firstResult: firstResult,
      maxResult: maxResult,
      sortBy: sortBy,
      sortOrder: sortOrder,
    });
  }
);

// Scenario: Retrieves any application files because provided serviceId was not found
// Others Given, When, Then are written in the aforementioned example
Then(
  'The \\/applications response should contains empty array',
  () => chai.expect(specApplicationsList._response.json).to.be.empty
);

// Scenario: Retrieves any application files because provided applicantId was not found
// Others Given, When, Then are written in the aforementioned example

After(endpointTag, () => {
  specApplicationsList.end();
});
