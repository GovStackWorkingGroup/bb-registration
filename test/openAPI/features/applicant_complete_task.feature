@method=POST @endpoint=/tasks/{taskId}/complete
Feature: The API endpoint used to complete the task

  @smoke @unit @positive
  Scenario: Successfully completes the task smoke type test

    Given User wants to complete the task
    When POST request to completes the task is sent with given "d1e33d56-c5c7-4272-aeb6-bc2732cce1f2" as a taskId parameter and body
    Then The response from the /tasks/{taskId}/complete endpoint is received
    And The /tasks/{taskId}/complete response should be returned in a timely manner 15000ms
    And The /tasks/{taskId}/complete response should have status 200
    And The /tasks/{taskId}/complete response should match json schema

  @unit @negative
  Scenario: Could not complete the task because provided taskId was not found

    Given User wants to complete the task
    When POST request to completes the task is sent with given "n0t-ex1st1ng-task#-1d" as a taskId parameter and body
    Then The response from the /tasks/{taskId}/complete endpoint is received
    And The /tasks/{taskId}/complete response should be returned in a timely manner 15000ms
    And The /tasks/{taskId}/complete response should have status 404
