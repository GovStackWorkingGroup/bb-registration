module.exports = {
  localhost: 'http://localhost:3333/',
  header: {
    key: 'Information-Mediator-Client',
    value: 'eGovStack/GOV/90000009/eregistrations-dev',
  },
  defaultExpectedResponseTime: 15000,
  // data_statistics
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
  //applicant_applications_fileId
  applicationFileEndpoint: 'applications/{fileId}',
  applicationFileResponseSchema: {
    type: 'object',
    properties: {
      fileId: { type: 'string' },
      registered: { type: 'string' },
      serviceId: { type: 'string' },
      serviceName: { type: 'string' },
      status: {
        type: 'object',
        properties: {
          code: {
            type: 'string',
            enum: [
              'PENDING',
              'APPROVED',
              'SENDBACK',
              'REJECTED'
            ]
          },
          title: { type: 'string' }
        }
      },
      ended: { type: 'boolean' },
      applicationData: {
        type: 'object',
        properties: {
          applicationName: { type: 'string' },
          applicantId: { type: 'string' },
          created: { type: 'string' },
          formData: {
            type: 'object',
            properties: {
              data: { type: 'object' },
              eFormId: { type: 'string' },
            },
          },
          documentUrls: { type: "array" }
        }
      }
    },
  },
  // applicant_services_serviceid_applications
  submitApplicationEndpoint: 'services/{serviceId}/applications',
  submitApplicationResponseSchema: {
    type: 'object',
    properties: {
      fileId: { type: 'string' },
      registered: { type: 'string' },
      serviceId: { type: 'string' },
      serviceName: { type: 'string' },
      status: {
        type: 'object',
        properties: {
          code: {
            type: 'string',
            enum: ['PENDING', 'APPROVED', 'SENDBACK', 'REJECTED'],
          },
          title: { type: 'string' },
        },
      },
      ended: { type: 'boolean' },
      applicationData: {
        type: 'object',
        properties: {
          applicationName: { type: 'string' },
          applicantId: { type: 'string' },
          created: { type: 'string' },
          formData: {
            type: 'object',
            properties: {
              data: { type: 'object' },
              eFormId: { type: 'string' },
            },
          },
          documentUrls: {
            type: 'array',
          },
        },
        required: ['applicantId'],
      },
    },
    required: ['serviceId', 'applicationData'],
  },
  // services_services
  servicesEndpoint: 'services',
  servicesResponseSchema: {
    type: 'array',
    items: this.serviceSchema,
  },
  // services_serviceKey_eforms
  servicesServicesKeyEFormsEndpoint: 'services/{serviceKey}/eForms',
  servicesServicesKeyEFormsResponseSchema: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        eFormId: { type: 'string' },
        name: { type: 'string' },
        description: { type: 'string' },
        version: { type: 'string' },
        latest: { type: 'boolean' },
      },
      additionalProperties: false,
    },
  },
  // shares
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
  // service_serviceId
  serviceIdEndpoint: 'services/{serviceId}',
  // applicant_documents
  documentToUpload:
    'ewogIGZpZWxkbmFtZTogJ2ltYWdlJywKICBvcmlnaW5hbG5hbWU6ICdTY3JlZW5zaG90IDIwMjEtMTEtMDIgYXQgMDAuMTIuMjgucG5nJywKICBlbmNvZGluZzogJzdiaXQnLAogIG1pbWV0eXBlOiAnaW1hZ2UvcG5nJywKICBkZXN0aW5hdGlvbjogJ3VwbG9hZHMvJywKICBmaWxlbmFtZTogJ2ExNWFmNzdhMzFlYjQ0YjRhNmIwNDNkYjkwZjE1MjE0JywKICBwYXRoOiAndXBsb2Fkcy9hMTVhZjc3YTMxZWI0NGI0YTZiMDQzZGI5MGYxNTIxNCcsCiAgc2l6ZTogNTM4NTI0Cn0=',
  documentsEndpoint: 'documents',
  documentsResponseSchema: {
    type: 'object',
    properties: {
      code: { type: 'integer' },
      type: { type: 'string' },
      message: { type: 'string' },
      url: { type: 'string' },
    },
  },
  documentsErrorResponseSchema: {
    type: 'object',
    properties: {
      traceId: { type: 'string' },
      code: { type: 'string' },
      message: { type: 'string' },
      localizedMessage: { type: 'string' },
    },
  },
  // shares
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
