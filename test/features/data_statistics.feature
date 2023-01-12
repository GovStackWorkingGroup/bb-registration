Feature: API endpoint that allows anyone to see service statistics.
  
  Request endpoint: GET /data/statistics/1.0

  Background:
    Given The user wants to receives the service statistics

  Scenario: The user successfully receives the service statistics
    When The user triggers an action to receive the service statistics with registration name "MTCS"
    Then The user successfully receives the service statistics with registration name "MTCS"

  Scenario: The user is not able to receives the service statistics, because of an invalid request
    When The user triggers an action to receive the service statistics with an invalid request
    Then The result of an operation returns an error, because of an invalid request

  Scenario: The user is not able to receives the service statistics, because it does not exist in the database
    When The user triggers an action to receive the service statistics with registration name "MMT"
    Then The result of an operation returns an error, because "MMT" registration does not exist in the database
