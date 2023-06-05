const chai = require('chai');
const { spec } = require('pactum');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const {
  header,
  localhost,
  defaultExpectedResponseTime,
  applicantTasksEndpoint,
  applicantTasksResponseSchema,
} = require('./helpers/helpers');

chai.use(require('chai-json-schema'));

let specTasksList;

const baseUrl = localhost + applicantTasksEndpoint;
const endpointTag = { tags: `@endpoint=/${applicantTasksEndpoint}` };

Before(endpointTag, () => {
  specTasksList = spec();
});

// Scenario: Successfully retrieves all tasks smoke type test
Given(
  'User wants to retrieve all tasks',
  () => 'User wants to retrieve all tasks'
);

When(
  'GET request to get all tasks is sent with given Information-Mediator-Client header',
  () => {
    specTasksList.get(baseUrl).withHeaders(header.key, header.value);
  }
);

Then(
  /^The response from the \/tasks endpoint is received$/, async () =>
  specTasksList.toss()
);

Then(
  /^The \/tasks response should be returned in a timely manner 15000ms$/,
  () =>
    specTasksList
      .response()
      .to.have.responseTimeLessThan(defaultExpectedResponseTime)
);

Then(
  /^The \/tasks response should have status 200$/, () =>
  specTasksList.response().to.have.status(200)
);

Then(
  /^The \/tasks response should match json schema$/, () =>
  chai
    .expect(specTasksList._response.json)
    .to.be.jsonSchema(applicantTasksResponseSchema)
);

// Scenario: Successfully retrieves all tasks that match the fileId provided in optional parameter
// Others Given, When, Then are written in the aforementioned example
When(
  'GET request to get all tasks is sent with given Information-Mediator-Client header and a payload with {string} as fileId parameter',
  fileId => {
    specTasksList
      .get(baseUrl)
      .withHeaders(header.key, header.value)
      .withQueryParams('fileId', fileId);
  }
);

// Scenario: Successfully retrieves all tasks that match the mainTaskId provided in optional parameter
// Others Given, When, Then are written in the aforementioned example
When(
  'GET request to get all tasks is sent with given Information-Mediator-Client header and a payload with {string} as mainTaskId parameter',
  mainTaskId => {
    specTasksList
      .get(baseUrl)
      .withHeaders(header.key, header.value)
      .withQueryParams('mainTaskId', mainTaskId);
  }
);

// Scenario: Successfully retrieves all tasks that match the assigneeId provided in optional parameter
// Others Given, When, Then are written in the aforementioned example
When(
  'GET request to get all tasks is sent with given Information-Mediator-Client header and a payload with {string} as assigneeId parameter',
  assigneeId => {
    specTasksList
      .get(baseUrl)
      .withHeaders(header.key, header.value)
      .withQueryParams('assigneeId', assigneeId);
  }
);

// Scenario: Successfully retrieves all tasks when provides all optional parameters
// Others Given, When, Then are written in the aforementioned example
When(
  'The request contains a payload with {string} as fileId parameter',
  fileId => {
    specTasksList.withQueryParams('fileId', fileId);
  }
);

When(
  'The request contains a payload with {string} as mainTaskId parameter',
  mainTaskId => {
    specTasksList.withQueryParams('mainTaskId', mainTaskId);
  }
);

When(
  'The request contains a payload with {string} as assigneeId parameter',
  assigneeId => {
    specTasksList.withQueryParams('assigneeId', assigneeId);
  }
);

When(
  'The request contains a payload with {int} as firstResult, {int} as maxResult, {string} as sortBy and {string} as sortOrder',
  (firstResult, maxResult, sortBy, sortOrder) => {
    specTasksList.withQueryParams({
      firstResult: firstResult,
      maxResult: maxResult,
      sortBy: sortBy,
      sortOrder: sortOrder,
    });
  }
);

// Scenario: Retrieves any tasks because provided serviceId was not found
// Others Given, When, Then are written in the aforementioned example
Then(
  /^The \/tasks response should contains empty array$/,
  () => chai.expect(specTasksList._response.json).to.be.empty
);

// Scenario: Retrieves any tasks because provided applicantId was not found
// Others Given, When, Then are written in the aforementioned example

After(endpointTag, () => {
  specTasksList.end();
});
