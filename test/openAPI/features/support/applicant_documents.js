const chai = require('chai');
const { spec } = require('pactum');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const {
  localhost,
  defaultExpectedResponseTime,
  documentsEndpoint,
  documentsResponseSchema,
  documentsErrorResponseSchema,
} = require('./helpers/helpers');

chai.use(require('chai-json-schema'));

const baseUrl = localhost + documentsEndpoint;
const endpointTag = { tags: `@endpoint=/${documentsEndpoint}` };

Before(endpointTag, () => {
  specDocuments = spec();
});

// Scenario: Successfully uploaded a document smoke type test
Given(/^Wants to upload a document$/, () => 'Wants to upload a document');
When(
  /^POST request to upload a document with given "([^"]*)" as an item of the file array is sent$/,
  file => specDocuments.post(baseUrl).withJson({ file: [file] })
);

Then(/^The response from the \/documents endpoint is received$/, () =>
  specDocuments.toss()
);

Then(
  /^The \/documents response should be returned in a timely manner 15000ms$/,
  () =>
    specDocuments
      .response()
      .to.have.responseTimeLessThan(defaultExpectedResponseTime)
);

Then(/^The \/documents response should have status (\d+)$/, status =>
  specDocuments.response().to.have.status(status)
);

// Scenario: Successfully uploaded a document
// Others Given, When, Then are written in the aforementioned example
When(/^The request contains "([^"]*)" as additionalMetadata$/, metadata => {
  specDocuments.withQueryParams('additionalMetadata', metadata);
});

Then(/^The \/documents response should match json schema$/, () =>
  chai
    .expect(specDocuments._response.json)
    .to.be.jsonSchema(documentsResponseSchema)
);

// Scenario Outline: Successfully uploaded documets
// Others Given, When, Then are written in the aforementioned example
When(
  /^POST request to upload a document with given "([^"]*)" and "([^"]*)" as items of the file array is sent$/,
  (file1, file2) =>
    specDocuments.post(baseUrl).withJson({ file: [file1, file2] })
);

// Scenario: Could not upload a document because of missing payload
// Others Given, When, Then are written in the aforementioned example
When(/^POST request to upload a document is sent without payload$/, () =>
  specDocuments.post(baseUrl)
);

Then(/^The \/documents response should match bad request json schema$/, () =>
  chai
    .expect(specDocuments._response.json)
    .to.be.jsonSchema(documentsErrorResponseSchema)
);

After(endpointTag, () => {
  specDocuments.end();
});
