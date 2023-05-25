const chai = require('chai');
const { spec } = require('pactum');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const {
  header,
  localhost,
  defaultExpectedResponseTime,
  applicationFileEndpoint,
  applicationFileResponseSchema,
} = require('./helpers/helpers');

chai.use(require('chai-json-schema'));

let specApplicantApplicationsFileId;

const baseUrl = localhost + applicationFileEndpoint;
const endpointTag = { tags: `@endpoint=/${applicationFileEndpoint}` };

Before(endpointTag, () => {
  specApplicantApplicationsFileId = spec();
});

// Scenario: Successfully get an application file smoke type test
Given(
  /^User wants to get an application file$/,
  () => 'User wants to get an application file'
);

When(
  /^GET request to get an application file is sent with given Information-Mediator-Client header and "([^"]*)" as fileId parameter$/,
  fileId =>
    specApplicantApplicationsFileId
      .get(baseUrl)
      .withHeaders(header.key, header.value)
      .withPathParams('fileId', fileId)
);

Then(
  /^The response from the \/applications\/\{fileId\} endpoint is received$/,
  async () => specApplicantApplicationsFileId.toss()
);

Then(
  /^The \/applications\/\{fileId\} response should be returned in a timely manner 15000ms$/,
  () =>
    specApplicantApplicationsFileId
      .response()
      .to.have.responseTimeLessThan(defaultExpectedResponseTime)
);

Then(
  /^The \/applications\/\{fileId\} response should have status (\d+)$/,
  status => specApplicantApplicationsFileId.response().to.have.status(status)
);

Then(
  /^The \/applications\/\{fileId\} response should match json schema$/,
  () =>
    chai
      .expect(specApplicantApplicationsFileId._response.json)
      .to.be.jsonSchema(applicationFileResponseSchema)
);


Then(
  /^The \/applications\/\{fileId\} response's fileId should be equal to the fileId from the request "([^"]*)"$/,
  fileId =>
    chai
      .expect(specApplicantApplicationsFileId._response.json.fileId)
      .to.be.equal(fileId)
  );

// Scenario: Could not get an application file because provided fileId was not found
// Others Given, When, Then are written in the aforementioned example

After(endpointTag, () => {
  specApplicantApplicationsFileId.end();
});
