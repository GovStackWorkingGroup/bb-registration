@method=GET @endpoint=/services/{serviceId}
Feature: API endpoint that returns an information of single service

  @smoke @unit @positive
  Scenario: Retrieve the information of single service smoke type test

    Given User wants to retrieve the service
    When GET request to retrieve the information of single service with given "P2c9280957e579ad7017e58a3399f0068" as serviceId
    Then The response from the /services/{serviceId} endpoint is received
    And The /services/{serviceId} response should be returned in a timely manner 15000ms
    And The /services/{serviceId} response should have status 200
    And The /services/{serviceId} response should match json schema
