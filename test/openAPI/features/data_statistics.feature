@method=GET @endpoint=/data/statistics/1.0
Feature: API endpoint that allows anyone to see service statistics
  
  API endpoint that allows anyone to see service statistics

  @smoke @unit @positive
  Scenario: Retrieve the service statistics

    Given User wants to retrieve the service statistics
    When User sends GET request with given "eGovStack/GOV/90000009/eregistrations-dev" as Information-Mediator-Client header
    Then User receives a response
    And The response should be returned in a timely manner
    And The response should have status 200
    And The response should match json schema


  @unit @positive
  Scenario: Retrieve the service statistics using optional parameters

    Given User wants to retrieve the service statistics
    When User sends GET request with given "eGovStack/GOV/90000009/eregistrations-dev" as Information-Mediator-Client header
    And User provides optional query parameters "<startDate>" as startDate "<endDate>" as endDate "<registrationName>" as registrationName "<operator>" as operator "<role>" as role "<timeframe>" as timeframe
    Then User receives a response
    And The response should be returned in a timely manner
    And The response should have status 200
    And The response header content-type should be "application/json; charset=utf-8"
    And The response should match json schema
  
    Examples: Valid data
    | startDate  | endDate    | registrationName | operator    | role    | timeframe |
    | 2021-01-30 | 2021-01-30 | MCTS             | Ingmar Vali | Handler | day       |
    | 2021-01-30 | 2021-02-06 | MCTS             | Ingmar Vali | Handler | week      |
    | 2020-12-30 | 2021-01-30 | MCTS             | Ingmar Vali | Handler | month     |
    | 2021-01-30 | 2022-01-30 | MCTS             | Ingmar Vali | Handler | year      |


  @unit @negative
  Scenario: Unable to retrieve the service statistics because of an invalid header

    Given User wants to retrieve the service statistics
    When User sends GET request with given "<Information-Mediator-Client>" as Information-Mediator-Client header
    Then User receives a response
    And The response should be returned in a timely manner
    And The response should have status 400

  Examples: Invalid data
    | Information-Mediator-Client  |
    |                              |
    | ''                           |
    | invalid_header               |
    | eGovStack/GOV/90000009/      |


  @unit @negative
  Scenario: Unable to retrieve the service statistics because of a missing header

    Given User wants to retrieve the service statistics
    When User sends GET request without Information-Mediator-Client header
    Then User receives a response
    And The response should be returned in a timely manner
    And The response should have status 400


  @unit @negative
  Scenario: Unable to retrieve the service statistics because they do not exist

    Given User wants to retrieve the service statistics
    When User sends GET request with given "eGovStack/GOV/90000009/eregistrations-dev" as Information-Mediator-Client header
    And User provides query parameter "n0tex1st" as registrationName
    Then User receives a response
    And The response should be returned in a timely manner
    And The response should have status 404
