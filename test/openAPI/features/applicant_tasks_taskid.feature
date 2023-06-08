@method=GET @endpoint=/tasks/{taskId}
Feature: The API endpoint used to get task information by task id

  @smoke @unit @positive
  Scenario: Successfully get task information smoke type test

    Given User wants to get task information
    When GET request to get task is sent with given "81c4445c-bff6-11ed-afa1-0242ac120002" as taskId parameter
    Then The response from the /tasks/{taskId} endpoint is received
    And The /tasks/{taskId} response should be returned in a timely manner 15000ms
    And The /tasks/{taskId} response should have status 200
    And The /tasks/{taskId} response should match json schema
    And The /tasks/{taskId} response's taskId should be equal to the taskId from the request "81c4445c-bff6-11ed-afa1-0242ac120002"

  @unit @negative
  Scenario: Could not get task information because provided taskId was not found

    Given User wants to get task information
    When GET request to get task is sent with given "n0t-ex1st1ng-task#-1d" as taskId parameter
    Then The response from the /tasks/{taskId} endpoint is received
    And The /tasks/{taskId} response should be returned in a timely manner 15000ms
    And The /tasks/{taskId} response should have status 404
