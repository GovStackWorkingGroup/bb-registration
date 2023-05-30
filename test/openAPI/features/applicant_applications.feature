@method=GET @endpoint=/applications
Feature: The API endpoint used to retrieve all application files

  @smoke @unit @positive
  Scenario: Successfully retrieves all application files smoke type test

    Given User wants to retrieve all application files
    When GET request to get all application files is sent with given Information-Mediator-Client header
    Then The response from the /applications endpoint is received
    And The /applications response should be returned in a timely manner 15000ms
    And The /applications response should have status 200
    And The /applications response should match json schema

  @positive
  Scenario: Successfully retrieves all application files that match the serviceId provided in optional parameter

    Given User wants to retrieve all application files
    When GET request to get all application files is sent with given Information-Mediator-Client header and a payload with "0b4e529c-fe1a-11ed-be56-0242ac120002" as serviceId parameter
    Then The response from the /applications endpoint is received
    And The /applications response should be returned in a timely manner 15000ms
    And The /applications response should have status 200
    And The /applications response should match json schema

  @positive
  Scenario: Successfully retrieves all application files that match the applicantId provided in optional parameter

    Given User wants to retrieve all application files
    When GET request to get all application files is sent with given Information-Mediator-Client header and a payload with "11962de0-11b2-11cc-9390-0242ac121114" as applicantId parameter
    Then The response from the /applications endpoint is received
    And The /applications response should be returned in a timely manner 15000ms
    And The /applications response should have status 200
    And The /applications response should match json schema

  @positive
  Scenario: Successfully retrieves all application files when provides all optional parameters

    Given User wants to retrieve all application files
    When GET request to get all application files is sent with given Information-Mediator-Client header
    And The request contains a payload with "99be529c-fe1a-11ed-be56-0242ac120555" as serviceId parameter
    And The request contains a payload with "99b62de0-11b2-11cc-9390-0242ac121555" as applicantId parameter
    And The request contains a payload with 2 as firstResult, 20 as maxResult, "created" as sortBy and "asc" as sortOrder
    Then The response from the /applications endpoint is received
    And The /applications response should be returned in a timely manner 15000ms
    And The /applications response should have status 200
    And The /applications response should match json schema

  @negative
  Scenario: Retrieves any application files because provided serviceId was not found

    Given User wants to retrieve all application files
    When GET request to get all application files is sent with given Information-Mediator-Client header and a payload with "n0t-ex1st1ng-serv1ce#-1d" as serviceId parameter
    Then The response from the /applications endpoint is received
    And The /applications response should be returned in a timely manner 15000ms
    And The /applications response should have status 200
    And The /applications response should contains empty array

  @unit @negative
  Scenario: Retrieves any application files because provided applicantId was not found

    Given User wants to retrieve all application files
    When GET request to get all application files is sent with given Information-Mediator-Client header and a payload with "n0t-ex1st1ng-applicant#-1d" as applicantId parameter
    Then The response from the /applications endpoint is received
    And The /applications response should be returned in a timely manner 15000ms
    And The /applications response should have status 200
    And The /applications response should contains empty array
