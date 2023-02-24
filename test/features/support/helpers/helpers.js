module.exports = {
  localhost: 'http://localhost:3355/',
  header: {
    key: 'Information-Mediator-Client',
    value: 'eGovStack/GOV/90000009/eregistrations-dev',
  },
  defaultExpectedResponseTime: 15000,
  dataStatisticsEndpoint: 'data/statistics/1.0',
  dataStatisticsResponseSchema: {
    type: 'array',
    items: [
      {
        type: 'object',
        properties: {
          processed: {
            type: 'integer',
          },
          approved: {
            type: 'integer',
          },
          sentBack: {
            type: 'integer',
          },
          rejected: {
            type: 'integer',
          },
          references: {
            type: 'object',
            properties: {
              startDate: {
                type: 'string',
              },
              endDate: {
                type: 'string',
              },
              registrationName: {
                type: 'string',
              },
              operator: {
                type: 'string',
              },
              role: {
                type: 'string',
              },
              timeframeDay: {
                type: 'boolean',
              },
              timeframeWeek: {
                type: 'boolean',
              },
              timeframeMonth: {
                type: 'boolean',
              },
              timeframeYear: {
                type: 'boolean',
              },
            },
            additionalProperties: false,
          },
        },
        additionalProperties: false,
      },
    ],
  },
};
