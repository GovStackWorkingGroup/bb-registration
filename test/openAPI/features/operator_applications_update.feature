@method=PUT @endpoint=/applications/{fileId}
Feature: The API endpoint used to update service application file

  @smoke @unit @positive
  Scenario: Successfully update service application file smoke type test

    Given User wants to update service application file
    When PUT request to update service application file is sent with given Information-Mediator-Client header, "b8508d35-c2f3-442b-88a1-267ca25e85c0" as a fileId parameter and body
    Then The response from the PUT /applications/{fileId} endpoint is received
    And The PUT /applications/{fileId} response should be returned in a timely manner 15000ms
    And The PUT /applications/{fileId} response should have status 200
    And The PUT /applications/{fileId} response should match json schema
    And The PUT /applications/{fileId} response's fileId should be equal to the taskId from the request "b8508d35-c2f3-442b-88a1-267ca25e85c0"

  @unit @negative
  Scenario: Could not update service application file because provided fileId was not found

    Given User wants to update service application file
    When PUT request to update service application file is sent with given Information-Mediator-Client header, "n0t-ex1st1ng-file#-1d" as a fileId parameter and body
    Then The response from the PUT /applications/{fileId} endpoint is received
    And The PUT /applications/{fileId} response should be returned in a timely manner 15000ms
    And The PUT /applications/{fileId} response should have status 404
