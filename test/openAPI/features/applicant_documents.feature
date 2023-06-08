@method=POST @endpoint=/documents
Feature: API endpoint that allows to upload a required document
  
  Upload a document/attachment to receive a documentId that can be linked to applications when submitting a new registration.

  @smoke
  Scenario: Successfully uploaded a document smoke type test

    Given Wants to upload a document
    When POST request with given document is sent
    Then The response from the /documents endpoint is received
    And The /documents response should be returned in a timely manner 15000ms
    And The /documents response should have status 200

  @unit @positive
  Scenario: Successfully uploaded a document

    Given Wants to upload a document
    When POST request with given document is sent
    And The request contains "additional metadata" as additionalMetadata
    Then The response from the /documents endpoint is received
    And The /documents response should be returned in a timely manner 15000ms
    And The /documents response should have status 200
    And The /documents response should match json schema

  @unit @negative
  Scenario: Could not upload a document because of missing payload

    Given Wants to upload a document
    When POST request to upload a document is sent without payload
    Then The response from the /documents endpoint is received
    And The /documents response should be returned in a timely manner 15000ms
    And The /documents response should have status 400
    And The /documents response should match bad request json schema
