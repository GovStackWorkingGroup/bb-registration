const chai = require('chai');
const { spec } = require('pactum');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const {
  localhost,
  defaultExpectedResponseTime,
  applicantCompleteTaskEndpoint,
  applicantCompleteTaskResponseSchema,
} = require('./helpers/helpers');

chai.use(require('chai-json-schema'));

let specCompleteTask;

const baseUrl = localhost + applicantCompleteTaskEndpoint;
const endpointTag = { tags: `@endpoint=/${applicantCompleteTaskEndpoint}` };

Before(endpointTag, () => {
  specCompleteTask = spec();
});

// Scenario: Successfully completes the task smoke type test
Given(
  'User wants to complete the task',
  () => 'User wants to complete the task'
);

When(
  'POST request to completes the task is sent with given {string} as a taskId parameter and body',
  taskId =>
    specCompleteTask
      .post(baseUrl)
      .withPathParams('taskId', taskId)
      .withJson({
        data: {
          additionalProp1: {},
          additionalProp2: {},
          additionalProp3: {},
        },
      })
);

Then(
  'The response from the \\/tasks\\/\\{taskId}\\/complete endpoint is received',
  async () => await specCompleteTask.toss()
);

Then(
  'The \\/tasks\\/\\{taskId}\\/complete response should be returned in a timely manner 15000ms',
  () =>
    specCompleteTask
      .response()
      .to.have.responseTimeLessThan(defaultExpectedResponseTime)
);

Then(
  'The \\/tasks\\/\\{taskId}\\/complete response should have status {int}',
  status => specCompleteTask.response().to.have.status(status)
);

Then(
  'The \\/tasks\\/\\{taskId}\\/complete response should match json schema',
  () =>
    chai
      .expect(specCompleteTask._response.json)
      .to.be.jsonSchema(applicantCompleteTaskResponseSchema)
);

// Scenario: Could not complete the task because provided taskId was not found
// Others Given, When, Then are written in the aforementioned example

After(endpointTag, () => {
  specCompleteTask.end();
});
