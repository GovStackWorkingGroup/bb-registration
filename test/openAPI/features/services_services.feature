@method=GET @endpoint=/services
Feature: API endpoint that returns a list of services (Services available to use)
  
  Listing of all services with basic information.

  @smoke
  Scenario: Retrieve the list of services smoke type test

    Given User wants to retrieve the list of services
    When User sends GET request with given "Register Mother and Child" as name
    Then The response from the /statistics endpoint is received
    And The /statistics response should be returned in a timely manner 15000ms
    And The /statistics response should have status 200
    And The /statistics response should match json schema

  @unit @positive
  Scenario Outline: Retrieve the list of services

    Given User wants to retrieve the list of services
    When User sends GET request with given "<name>" as name
    Then The response from the /statistics endpoint is received
    And The /statistics response should be returned in a timely manner 15000ms
    And The /statistics response should have status 200
    And The /statistics response should match json schema

    Examples:
    | name                        |
    | Good Health and Well-Being  |
    | Industry and Infrastructure |
    | Zero Hunger                 |
