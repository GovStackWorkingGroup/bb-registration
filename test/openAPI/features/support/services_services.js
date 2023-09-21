const chai = require('chai');
const { spec } = require('pactum');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const {
  servicesEndpoint,
  defaultExpectedResponseTime,
  servicesResponseSchema,
  localhost,
} = require('./helpers/helpers');

chai.use(require('chai-json-schema'));

const baseUrl = localhost + servicesEndpoint;
const endpointTag = { tags: `@endpoint=/${servicesEndpoint}` };

Before(endpointTag, () => {
  specServices = spec();
});

// Scenario: Retrieve the list of services smoke type test
Given(
  'User wants to retrieve the list of services',
  () => 'User wants to retrieve the list of services'
);

When('GET request to retrieve a list of services is sent', () =>
  specServices.get(baseUrl)
);

Then(
  'The response from the \\/services endpoint is received',
  async () => await specServices.toss()
);

Then(
  'The \\/services response should be returned in a timely manner 15000ms',
  () =>
    specServices
      .response()
      .to.have.responseTimeLessThan(defaultExpectedResponseTime)
);

Then('The \\/services response should have status 200', () =>
  specServices.response().to.have.status(200)
);

Then('The \\/services response should have {string}: {string} header',
  (key, value) => {
    specServices
      .response()
      .should.have.headerContains(key, value)
  });

Then('The \\/services response should match json schema', () =>
  chai
    .expect(specServices._response.json)
    .to.be.jsonSchema(servicesResponseSchema)
);

// Scenario Outline: Retrieve the list of services that match the name provided in optional parameter
// Given and others Then for this scenario are written in the aforementioned example
When('User sends GET \\/services request with given {string} as name', name => {
  specServices.get(baseUrl).withQueryParams('name', name);
});

Then(
  'The name field in the response matches with {string} provided as name in the query parameter',
  name => {
    const nameFieldsArray = specServices._response.json.map(
      object => object.name
    );
    nameFieldsArray.map(nameField => chai.expect(nameField).equal(name));
  }
);

After(endpointTag, () => {
  specServices.end();
});
