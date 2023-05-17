@method=POST @endpoint=/services/{serviceId}/applications
Feature: API endpoint that allows to submit an application file as an applicant
  
  Send an application file including all documents and form data to submit a registration request to be processed by operators.

  @smoke
  Scenario: Successfully created a new application file in the system smoke type test

    Given An applicant wants to submit an application
    When POST request to submit an application is sent with given I-M-C header and "f7d33db0-2809-484e-a780-76b7ccd4ecbf" as serviceId parameter
    And The request contains a payload with "42962de0-bdb2-11ed-9397-0242ac120004" as applicantId
    Then The response from the /services/{serviceId}/applications endpoint is received
    And The /services/{serviceId}/applications response should be returned in a timely manner 15000ms
    And The /services/{serviceId}/applications response should have status 200

  @unit @positive
  Scenario Outline: Successfully created a new application file in the system

    Given An applicant wants to submit an application
    When POST request to submit an application is sent with given I-M-C header and "<serviceId>" as serviceId parameter
    And The request contains a payload with "<applicationName>" as applicationName, "<applicantId>" as applicantId and "<created>" as created 
    Then The response from the /services/{serviceId}/applications endpoint is received
    And The /services/{serviceId}/applications response should be returned in a timely manner 15000ms
    And The /services/{serviceId}/applications response should have status 200
    And The /services/{serviceId}/applications response should match json schema
    And The /services/{serviceId}/applications response's serviceId should be equal to the serviceId from the request "<serviceId>"
    And The /services/{serviceId}/applications response's applicantId should be equal to the applicantId from the request "<applicantId>"

    Examples: 
    | serviceId                            | applicationName  | applicantId                          | created                  |
    | f7d33db0-2809-484e-a780-76b7ccd4ecbf | Amya Yuko        | sgh123h5-bdb2-11ed-9397-fdae352dfa10 | 2022-10-21T00:00:00.000Z |
    | f7d33db0-2809-484e-a780-76b7ccd4ecbf | Application name | fdae352d-9397-bdb2-11ed-11ed9397bdb2 | 2022-11-22T00:00:00.000Z |
    | f7d33db0-2809-484e-a780-76b7ccd4ecbf | Application      | 11ed9397-11ed-9397-bdb2-sgh123h511ed | 2022-12-23T00:00:00.000Z |

  @unit @negative
  Scenario: Could not create a new application because service with provided serviceId was not found

    Given An applicant wants to submit an application
    When POST request to submit an application is sent with given I-M-C header and "n0t-ex1st1ng-serv1ce-1d" as serviceId parameter
    And The request contains a payload with "23qwef41-bdb2-11ed-qwef-efg4345aqwef" as applicantId
    Then The response from the /services/{serviceId}/applications endpoint is received
    And The /services/{serviceId}/applications response should be returned in a timely manner 15000ms
    And The /services/{serviceId}/applications response should have status 404
