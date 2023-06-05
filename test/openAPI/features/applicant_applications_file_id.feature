@method=GET @endpoint=/applications/{fileId}
Feature: The API endpoint used to get application file by ID

  @smoke @unit @positive
  Scenario: Successfully get an application file smoke type test

    Given User wants to get an application file
    When GET request to get an application file is sent with given Information-Mediator-Client header and "81c4445c-bff6-11ed-afa1-0242ac120002" as fileId parameter
    Then The response from the /applications/{fileId} endpoint is received
    And The /applications/{fileId} response should be returned in a timely manner 15000ms
    And The /applications/{fileId} response should have status 200
    And The /applications/{fileId} response should match json schema
    And The /applications/{fileId} response's fileId should be equal to the fileId from the request "81c4445c-bff6-11ed-afa1-0242ac120002"

  @unit @negative
  Scenario: Could not get an application file because provided fileId was not found

    Given User wants to get an application file
    When GET request to get an application file is sent with given Information-Mediator-Client header and "n0t-ex1st1ng-serv1ce#-1d" as fileId parameter
    Then The response from the /applications/{fileId} endpoint is received
    And The /applications/{fileId} response should be returned in a timely manner 15000ms
    And The /applications/{fileId} response should have status 404
