const chai = require('chai');
const { spec } = require('pactum');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const {
  header,
  localhost,
  defaultExpectedResponseTime,
  applicationTasksTaskIdEndpoint,
  applicationTasksTaskIdResponseSchema,
} = require('./helpers/helpers');

chai.use(require('chai-json-schema'));

let specApplicantTasksTaskId;

const baseUrl = localhost + applicationTasksTaskIdEndpoint;
const endpointTag = { tags: `@endpoint=/${applicationTasksTaskIdEndpoint}` };

Before(endpointTag, () => {
  specApplicantTasksTaskId = spec();
});

// Scenario: Successfully get task information smoke type test
Given(
  /^User wants to get task information$/,
  () => 'User wants to get task information'
);

When(
  /^GET request to get task is sent with given "([^"]*)" as taskId parameter$/,
  taskId =>
    specApplicantTasksTaskId
      .get(baseUrl)
      .withPathParams('taskId', taskId)
);

Then(
  /^The response from the \/tasks\/\{taskId\} endpoint is received$/,
  async () => specApplicantTasksTaskId.toss()
);

Then(
  /^The \/tasks\/\{taskId\} response should be returned in a timely manner 15000ms$/,
  () =>
    specApplicantTasksTaskId
      .response()
      .to.have.responseTimeLessThan(defaultExpectedResponseTime)
);

Then(
  /^The \/tasks\/\{taskId\} response should have status (\d+)$/,
  status => specApplicantTasksTaskId.response().to.have.status(status)
);

Then(
  /^The \/tasks\/\{taskId\} response should match json schema$/,
  () =>
    chai
      .expect(specApplicantTasksTaskId._response.json)
      .to.be.jsonSchema(applicationTasksTaskIdResponseSchema)
);


Then(
  /^The \/tasks\/\{taskId\} response's taskId should be equal to the taskId from the request "([^"]*)"$/,
  taskId =>
    chai
      .expect(specApplicantTasksTaskId._response.json.taskId)
      .to.be.equal(taskId)
);

// Scenario: Could not get task information because provided taskId was not found
// Others Given, When, Then are written in the aforementioned example

After(endpointTag, () => {
  specApplicantTasksTaskId.end();
});
