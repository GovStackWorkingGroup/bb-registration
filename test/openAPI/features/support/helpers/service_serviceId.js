const chai = require('chai');
const { spec } = require('pactum');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const {
  serviceIdEndpoint,
  defaultExpectedResponseTime,
  servicesResponseSchema,
  localhost,
  header
} = require('./helpers');

chai.use(require('chai-json-schema'));

const baseUrl = localhost + serviceIdEndpoint;
const endpointTag = { tags: `@endpoint=/${serviceIdEndpoint}` };

Before(endpointTag, () => {
  specServiceId = spec().inspect();
});

// Scenario: Retrieve the information of single service smoke type test
Given(
  /^User wants to retrieve the service$/,
  () => 'User wants to retrieve the service'
);

When(/^GET request to retrieve the information of single service with given "([^"]*)" as serviceId$/,
  (serviceId) =>
    specServiceId
      .get(baseUrl)
      .withHeaders(header.key, header.value)
      .withPathParams({
        serviceId: serviceId,
      })
);

Then(
  /^The response from the \/services\/\{serviceId\} endpoint is received$/,
  async () => await specServiceId.toss()
);

Then(
  /^The \/services\/\{serviceId\} response should be returned in a timely manner 15000ms$/,
  () =>
    specServiceId
      .response()
      .to.have.responseTimeLessThan(defaultExpectedResponseTime)
);

Then(/^The \/services\/\{serviceId\} response should have status (\d+)$/, (status) => {
 console.log(specServiceId)
  specServiceId.response().to.have.status(status)
});

Then(/^The \/services\/\{serviceId\} response should match json schema$/, () =>
  chai
    .expect(specServiceId._response.json)
    .to.be.jsonSchema(servicesResponseSchema)
);


After(endpointTag, () => {
  specServiceId.end();
});
