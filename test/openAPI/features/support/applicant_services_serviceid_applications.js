const chai = require('chai');
const { spec } = require('pactum');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const {
  header,
  localhost,
  defaultExpectedResponseTime,
  submitApplicationEndpoint,
  submitApplicationResponseSchema,
} = require('./helpers/helpers');

chai.use(require('chai-json-schema'));

const baseUrl = localhost + submitApplicationEndpoint;
const endpointTag = { tags: `@endpoint=/${submitApplicationEndpoint}` };

Before(endpointTag, () => {
  specSubmitApplication = spec();
});

// Scenario: Successfully created a new application file in the system smoke type test
Given(
  /^An applicant wants to submit an application$/,
  () => 'An applicant wants to submit an application'
);

When(
  /^POST request to submit an application is sent with given Information-Mediator-Client header and "([^"]*)" as serviceId parameter$/,
  serviceID =>
    specSubmitApplication
      .post(baseUrl)
      .withHeaders(header.key, header.value)
      .withPathParams('serviceId', serviceID)
);

When(
  /^The request contains a payload with "([^"]*)" as applicantId$/,
  applicantID => specSubmitApplication.withJson({ applicantId: applicantID })
);

Then(
  /^The response from the \/services\/{serviceId}\/applications endpoint is received$/,
  () => specSubmitApplication.toss()
);

Then(
  /^The \/services\/{serviceId}\/applications response should be returned in a timely manner 15000ms$/,
  () =>
    specSubmitApplication
      .response()
      .to.have.responseTimeLessThan(defaultExpectedResponseTime)
);

Then(
  /^The \/services\/{serviceId}\/applications response should have status (\d+)$/,
  status => specSubmitApplication.response().to.have.status(status)
);

// Scenario Outline: Successfully created a new application file in the system
// Others Given, When, Then are written in the aforementioned example
When(
  /^The request contains a payload with "([^"]*)" as applicationName, "([^"]*)" as applicantId and "([^"]*)" as created$/,
  (applicationName, applicantID, created) =>
    specSubmitApplication.withJson({
      applicationName: applicationName,
      applicantId: applicantID,
      created: created,
    })
);

Then(
  /^The \/services\/{serviceId}\/applications response should match json schema$/,
  () =>
    chai
      .expect(specSubmitApplication._response.json)
      .to.be.jsonSchema(submitApplicationResponseSchema)
);

Then(
  /^The \/services\/{serviceId}\/applications response's serviceId should be equal to the serviceId from the request "([^"]*)"$/,
  serviceId =>
    chai
      .expect(specSubmitApplication._response.json.serviceId)
      .to.be.equal(serviceId)
);

Then(
  /^The \/services\/{serviceId}\/applications response's applicantId should be equal to the applicantId from the request "([^"]*)"$/,
  applicantId =>
    chai
      .expect(specSubmitApplication._response.json.applicationData.applicantId)
      .to.be.equal(applicantId)
);

// Scenario: Could not create a new application because service with provided serviceId was not found
// Others Given, When, Then are written in the aforementioned example

After(endpointTag, () => {
  specSubmitApplication.end();
});
