@method=GET @endpoint=/eForms/{eFormId}
Feature: The API endpoint used to get eForm information by eForm id

  @smoke @unit @positive
  Scenario: Successfully get eForm information smoke type test

    Given User wants to get eForm information
    When GET request to get eForm is sent with given "d98a205a-679b-485b-823d-7a32a391e744" as eFormId parameter
    Then The response from the /eForms/{eFormId} endpoint is received
    And The /eForms/{eFormId} response should be returned in a timely manner 15000ms
    And The /eForms/{eFormId} response should have status 200
    And The /eForms/{eFormId} response should match json schema
    And The /eForms/{eFormId} response's eFormId should be equal to the eFormId from the request "d98a205a-679b-485b-823d-7a32a391e744"

  @unit @negative
  Scenario: Could not get eForm information because provided eFormId was not found

    Given User wants to get eForm information
    When GET request to get eForm is sent with given "n0t-ex1st1ng-eForm#-1d" as eFormId parameter
    Then The response from the /eForms/{eFormId} endpoint is received
    And The /eForms/{eFormId} response should be returned in a timely manner 15000ms
    And The /eForms/{eFormId} response should have status 404
