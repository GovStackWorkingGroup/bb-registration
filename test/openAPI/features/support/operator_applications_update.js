const chai = require('chai');
const { spec } = require('pactum');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const {
  localhost,
  defaultExpectedResponseTime,
  updateApplicationFileEndpoint,
  header,
  updateApplicationFileResponseSchema,
} = require('./helpers/helpers');

chai.use(require('chai-json-schema'));

let specUpdateApplicationFile;

const baseUrl = localhost + updateApplicationFileEndpoint;
const endpointTag = { tags: `@endpoint=/${updateApplicationFileEndpoint}` };

Before(endpointTag, () => {
  specUpdateApplicationFile = spec();
});

// Scenario: Successfully update service application file smoke type test
Given(
  'User wants to update service application file',
  () => 'User wants to update service application file'
);

When(
  'PUT request to update service application file is sent with given Information-Mediator-Client header, {string} as a fileId parameter and body',
  fileId =>
    specUpdateApplicationFile
      .put(baseUrl)
      .withHeaders(header.key, header.value)
      .withPathParams('fileId', fileId)
      .withJson({
        applicationName: 'Amya Yuko',
        applicantId: '42962de0-bdb2-11ed-9397-0242ac120004',
        created: '2000-10-23T00:00:00.000Z',
        formData: {
          data: {
            additionalProp1: {},
            additionalProp2: {},
            additionalProp3: {},
          },
          eFormId: '42962de0-bdb2-11ed-9397-0242ac120004',
        },
        documentUrls: ['string'],
      })
);

Then(
  'The response from the PUT \\/applications\\/\\{fileId} endpoint is received',
  async () => await specUpdateApplicationFile.toss()
);

Then(
  'The PUT \\/applications\\/\\{fileId} response should be returned in a timely manner 15000ms',
  () =>
    specUpdateApplicationFile
      .response()
      .to.have.responseTimeLessThan(defaultExpectedResponseTime)
);

Then(
  'The PUT \\/applications\\/\\{fileId} response should have status {int}',
  status => specUpdateApplicationFile.response().to.have.status(status)
);

Then(
  'The PUT \\/applications\\/\\{fileId} response should match json schema',
  () =>
    chai
      .expect(specUpdateApplicationFile._response.json)
      .to.be.jsonSchema(updateApplicationFileResponseSchema)
);

Then(
  `The PUT \\/applications\\/\\{fileId} response's fileId should be equal to the fileId from the request {string}`,
  fieldId =>
    chai
      .expect(specUpdateApplicationFile._response.json.fileId)
      .to.be.equal(fieldId)
);

// Scenario: Could not update service application file because provided fileId was not found
// Others Given, When, Then are written in the aforementioned example

After(endpointTag, () => {
  specUpdateApplicationFile.end();
});
