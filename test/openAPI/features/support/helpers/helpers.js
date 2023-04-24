module.exports = {
  localhost: 'http://localhost:3333/',
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
              startDate: { type: 'string' },
              endDate: { type: 'string' },
              registrationName: { type: 'string' },
              operator: { type: 'string' },
              role: { type: 'string' },
              timeframeDay: { type: 'boolean' },
              timeframeWeek: { type: 'boolean' },
              timeframeMonth: { type: 'boolean' },
              timeframeYear: { type: 'boolean' },
            },
            additionalProperties: false,
          },
        },
        additionalProperties: false,
      },
    ],
  },
  servicesEndpoint: 'services',
  servicesResponseSchema: {
    type: 'array',
    items: this.serviceSchema,
  },
  listOfPropertiesSchema: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        code: { type: 'string' },
        value: { type: 'string' },
      },
      additionalProperties: false,
    },
  },
  serviceSchema: {
    type: 'object',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      version: { type: 'string' },
      type: {
        type: 'string',
        enum: ['None', 'Private', 'Public'],
      },
      isExecutable: { type: 'boolean' },
      isClosed: { type: 'boolean' },
      description: { type: 'string' },
    },
    serviceBody: this.listOfPropertiesSchema,
    required: ['id', 'name', 'type', 'version'],
    additionalProperties: false,
  },
};
