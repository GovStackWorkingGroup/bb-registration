@method=GET @endpoint=/services/{serviceId}/eForms
Feature: API endpoint that returns a list of all e-service forms with schema related to the given service.

  @smoke @unit @positive
  Scenario: Succesfully retrieves the list of all e-service forms with schema related to the given service smoke type test

    Given User wants to retrieve the list of all e-service forms with schema
    When User sends GET /services/{serviceId}/eForms request with given "P2c9280957e579ad7017e58a3399f0068" as serviceId
    Then The response from the GET /services/{serviceId}/eForms endpoint is received
    And The /services/{serviceId}/eForms response should be returned in a timely manner 15000ms
    And The /services/{serviceId}/eForms response should have status 200
    And The /services/{serviceId}/eForms response should have "content-type": "application/json" header
    And The /services/{serviceId}/eForms response should match json schema
