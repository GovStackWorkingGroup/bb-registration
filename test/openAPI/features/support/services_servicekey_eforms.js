const chai = require('chai');
const { spec } = require('pactum');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const {
  defaultExpectedResponseTime,
  localhost,
  servicesServicesKeyEFormsEndpoint,
  servicesServicesKeyEFormsResponseSchema,
} = require('./helpers/helpers');

chai.use(require('chai-json-schema'));

const baseUrl = localhost + servicesServicesKeyEFormsEndpoint;
const endpointTag = { tags: `@endpoint=/${servicesServicesKeyEFormsEndpoint}` };

let specServicesServiceKeyEForms;

Before(endpointTag, () => {
  specServicesServiceKeyEForms = spec();
});

// Scenario: Succesfully retrieves the list of all e-service forms with schema related to the given service smoke type test
Given(
  'User wants to retrieve the list of all e-service forms with schema',
  () => 'User wants to retrieve the list of all e-service forms with schema'
);

When(
  'User sends GET \\/services\\/\\{serviceKey}\\/eForms request with given {string} as serviceKey',
  serviceKey =>
    specServicesServiceKeyEForms
      .get(baseUrl)
      .withPathParams('serviceKey', serviceKey)
);

Then(
  'The response from the GET \\/services\\/\\{serviceKey}\\/eForms endpoint is received',
  async () => await specServicesServiceKeyEForms.toss()
);

Then(
  'The \\/services\\/\\{serviceKey}\\/eForms response should be returned in a timely manner 15000ms',
  () =>
    specServicesServiceKeyEForms
      .response()
      .to.have.responseTimeLessThan(defaultExpectedResponseTime)
);

Then(
  'The \\/services\\/\\{serviceKey}\\/eForms response should have status 200',
  () => specServicesServiceKeyEForms.response().to.have.status(200)
);

Then(
  'The \\/services\\/\\{serviceKey}\\/eForms response should match json schema',
  () =>
    chai
      .expect(specServicesServiceKeyEForms._response.json)
      .to.be.jsonSchema(servicesServicesKeyEFormsResponseSchema)
);

After(endpointTag, () => {
  specServicesServiceKeyEForms.end();
});
