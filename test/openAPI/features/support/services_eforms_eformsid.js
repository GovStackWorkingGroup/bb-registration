const chai = require('chai');
const { spec } = require('pactum');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const {
  header,
  localhost,
  defaultExpectedResponseTime,
  servicesEformsEformIdEndpoint,
  servicesEformsEformIdResponseSchema,
} = require('./helpers/helpers');

chai.use(require('chai-json-schema'));

let specServicesEformsEformId;

const baseUrl = localhost + servicesEformsEformIdEndpoint;
const endpointTag = { tags: `@endpoint=/${servicesEformsEformIdEndpoint}` };

Before(endpointTag, () => {
  specServicesEformsEformId = spec();
});

// Scenario: Successfully get eForm information smoke type test
Given(
  /^User wants to get eForm information$/,
  () => 'User wants to get eForm information'
);

When(
  /^GET request to get eForm is sent with given "([^"]*)" as eFormId parameter$/,
  eFormId =>
    specServicesEformsEformId
      .get(baseUrl)
      .withPathParams('eFormId', eFormId)
);

Then(
  /^The response from the \/eForms\/\{eFormId\} endpoint is received$/,
  async () => specServicesEformsEformId.toss()
);

Then(
  /^The \/eForms\/\{eFormId\} response should be returned in a timely manner 15000ms$/,
  () =>
    specServicesEformsEformId
      .response()
      .to.have.responseTimeLessThan(defaultExpectedResponseTime)
);

Then(
  /^The \/eForms\/\{eFormId\} response should have status (\d+)$/,
  status => specServicesEformsEformId.response().to.have.status(status)
);

Then(
  /^The \/eForms\/\{eFormId\} response should match json schema$/,
  () =>
    chai
      .expect(specServicesEformsEformId._response.json)
      .to.be.jsonSchema(servicesEformsEformIdResponseSchema)
);


Then(
  /^The \/eForms\/\{eFormId\} response's eFormId should be equal to the eFormId from the request "([^"]*)"$/,
  eFormId =>
    chai
      .expect(specServicesEformsEformId._response.json.eFormId)
      .to.be.equal(eFormId)
);

// Scenario: Could not get eForm information because provided eFormId was not found
// Others Given, When, Then are written in the aforementioned example

After(endpointTag, () => {
  specServicesEformsEformId.end();
});
