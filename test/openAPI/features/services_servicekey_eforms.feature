@method=GET @endpoint=/services/{serviceKey}/eForms
Feature: API endpoint that returns a list of all e-service forms with schema related to the given service.

  @smoke
  Scenario: Succesfully retrieves the list of all e-service forms with schema related to the given service smoke type test

    Given User wants to retrieve the list of all e-service forms with schema
    When User sends GET /services/{serviceKey}/eForms request with given "P2c9280957e579ad7017e58a3399f0068" as serviceKey
    Then The response from the GET /services/{serviceKey}/eForms endpoint is received
    And The /services/{serviceKey}/eForms response should be returned in a timely manner 15000ms
    And The /services/{serviceKey}/eForms response should have status 200
    And The /services/{serviceKey}/eForms response should match json schema

  @unit @positive
  Scenario Outline: Succesfully retrieves the list of all e-service forms with schema related to the given service

   Given User wants to retrieve the list of all e-service forms with schema
    When User sends GET /services/{serviceKey}/eForms request with given "<serviceKey>" as serviceKey
    Then The response from the GET /services/{serviceKey}/eForms endpoint is received
    And The /services/{serviceKey}/eForms response should be returned in a timely manner 15000ms
    And The /services/{serviceKey}/eForms response should have status 200
    And The /services/{serviceKey}/eForms response should match json schema

    Examples:
    | serviceKey                        |
    | P2c1111957e579ad7017e58a3399f2222 |
    | P3c3333957e579ad7017e58a3399f1111 |
    | P0c2222957e579ad7017e58a3399f3333 |
