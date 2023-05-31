@method=GET @endpoint=/tasks
Feature: The API endpoint used to retrieve all tasks

  @smoke @unit @positive
  Scenario: Successfully retrieves all tasks smoke type test

    Given User wants to retrieve all tasks
    When GET request to get all tasks is sent with given Information-Mediator-Client header
    Then The response from the /tasks endpoint is received
    And The /tasks response should be returned in a timely manner 15000ms
    And The /tasks response should have status 200
    And The /tasks response should match json schema

  @positive
  Scenario: Successfully retrieves all tasks tasks that match the fileId provided in optional parameter

    Given User wants to retrieve all tasks
    When GET request to get all tasks is sent with given Information-Mediator-Client header and a payload with "81c4445c-bff6-11ed-afa1-0242ac120002" as fileId parameter
    Then The response from the /tasks endpoint is received
    And The /tasks response should be returned in a timely manner 15000ms
    And The /tasks response should have status 200
    And The /tasks response should match json schema

  @positive
  Scenario: Successfully retrieves all tasks tasks that match the mainTaskId provided in optional parameter

    Given User wants to retrieve all tasks
    When GET request to get all tasks is sent with given Information-Mediator-Client header and a payload with "42962de0-bdb2-11ed-9397-0242ac120004" as mainTaskId parameter
    Then The response from the /tasks endpoint is received
    And The /tasks response should be returned in a timely manner 15000ms
    And The /tasks response should have status 200
    And The /tasks response should match json schema

  @positive
  Scenario: Successfully retrieves all tasks tasks that match the assigneeId provided in optional parameter

    Given User wants to retrieve all tasks
    When GET request to get all tasks is sent with given Information-Mediator-Client header and a payload with "42962de0-bdb2-11ed-9397-0242ac120022" as assigneeId parameter
    Then The response from the /tasks endpoint is received
    And The /tasks response should be returned in a timely manner 15000ms
    And The /tasks response should have status 200
    And The /tasks response should match json schema

  @positive
  Scenario: Successfully retrieves all tasks tasks when provides all optional parameters

    Given User wants to retrieve all tasks
    When GET request to get all tasks is sent with given Information-Mediator-Client header
    And The request contains a payload with "99be529c-fe1a-11ed-be56-0242ac120555" as fileId parameter
    And The request contains a payload with "42962de0-bdb2-11ed-9397-0242ac120004" as mainTaskId parameter
    And The request contains a payload with "42962de0-bdb2-11ed-9397-0242ac120022" as assigneeId parameter
    And The request contains a payload with 2 as firstResult, 20 as maxResult, "created" as sortBy and "asc" as sortOrder
    Then The response from the /tasks endpoint is received
    And The /tasks response should be returned in a timely manner 15000ms
    And The /tasks response should have status 200
    And The /tasks response should match json schema

  @negative
  Scenario: Retrieves any tasks tasks because provided fileId was not found

    Given User wants to retrieve all tasks
    When GET request to get all tasks is sent with given Information-Mediator-Client header and a payload with "n0t-ex1st1ng-file#-1d" as fileId parameter
    Then The response from the /tasks endpoint is received
    And The /tasks response should be returned in a timely manner 15000ms
    And The /tasks response should have status 200
    And The /tasks response should contains empty array

  @unit @negative
  Scenario: Retrieves any tasks tasks because provided mainTaskId was not found

    Given User wants to retrieve all tasks
    When GET request to get all tasks is sent with given Information-Mediator-Client header and a payload with "n0t-ex1st1ng-main-task#-1d" as mainTaskId parameter
    Then The response from the /tasks endpoint is received
    And The /tasks response should be returned in a timely manner 15000ms
    And The /tasks response should have status 200
    And The /tasks response should contains empty array

@unit @negative
  Scenario: Retrieves any tasks tasks because provided assigneeId was not found

    Given User wants to retrieve all tasks
    When GET request to get all tasks is sent with given Information-Mediator-Client header and a payload with "n0t-ex1st1ng-assignee#-1d" as assigneeId parameter
    Then The response from the /tasks endpoint is received
    And The /tasks response should be returned in a timely manner 15000ms
    And The /tasks response should have status 200
    And The /tasks response should contains empty array
