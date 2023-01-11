const pactum = require('pactum');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { localhost, header } = require('./helpers/helpers');

let specDataStatistics;
let startDate;
let endDate;

const baseUrl = `${localhost}data/statistics/1.0`;

Before(() => {
  specDataStatistics = pactum.spec();
});

// Background:
Given('The user wants to receives the service statistics', () => {
  startDate = '2021-01-30';
  endDate = '2021-01-30';
  return startDate, endDate;
});

// Scenario: The user successfully receives the service statistics
When(
  'The user triggers an action to receive the service statistics with registration name "MTCS"',
  () => {
    specDataStatistics
      .get(baseUrl)
      .withHeaders(`${header.key}`, `${header.value}`)
      .withQueryParams('registrationName', 'MTCS');
  }
);

Then(
  'The user successfully receives the service statistics with registration name "MTCS"',
  async () => {
    await specDataStatistics.toss();
    specDataStatistics.response().should.have.status(200);
    specDataStatistics.response().should.have.jsonLike([
      {
        processed: 100,
        approved: 90,
        sentBack: 3,
        rejected: 7,
        references: {
          startDate: '2021-01-30',
          endDate: '2021-01-30',
          registrationName: 'MTCS',
          operator: 'Henry Snow',
          role: 'Handler',
          timeframeDay: true,
          timeframeWeek: false,
          timeframeMonth: false,
          timeframeYear: false,
        },
      },
    ]);
  }
);

// Scenario: The user is not able to receives the service statistics, because of an invalid request
When(
  'The user triggers an action to receive the service statistics with an invalid request',
  () => {
    specDataStatistics.get(baseUrl).withHeaders(`${header.key}`, '');
  }
);

Then(
  'The result of an operation returns an error, because of an invalid request',
  async () => {
    await specDataStatistics.toss();
    specDataStatistics.response().should.have.status(400);
    specDataStatistics
      .response()
      .should.have.body(
        '{\n  "Invalid format of Information-Mediator-Client, should not be null"\n}'
      );
  }
);

// Scenario: The user is not able to receives the service statistics, because it does not exist in the database
When(
  'The user triggers an action to receive the service statistics with registration name "MMT"',
  () => {
    specDataStatistics
      .get(baseUrl)
      .withHeaders(`${header.key}`, `${header.value}`)
      .withQueryParams('registrationName', 'MMT');
  }
);

Then(
  'The result of an operation returns an error, because "MMT" registration does not exist in the database',
  async () => {
    await specDataStatistics.toss();
    specDataStatistics.response().should.have.status(404);
    specDataStatistics
      .response()
      .should.have.body('{\n  "Requests not found"\n}');
  }
);

After(() => {
  specDataStatistics.end();
});
