---
description: >-
  This section provides a reference for APIs that should be implemented by this
  Building Block.
---

# 8 Service APIs

This section provides a reference for APIs that should be implemented by this Building Block. The APIs defined here establish a blueprint for how the Building Block will interact with other Building Blocks. Additional APIs may be implemented by the Building Block, but the listed APIs define a minimal set of functionality that should be provided by any implementation of this Building Block.&#x20;

The [GovStack non-functional requirements document](https://govstack.gitbook.io/specification/architecture-and-nonfunctional-requirements/6-onboarding) provides additional information on how 'adaptors' may be used to translate an existing API to the patterns described here.

Registration Building Block is expected to host the following API services.

****

## 8.1 Statistics API

The statistics API gives Building Block operational statistics- number of processed applications (per: operator, registration, service, date).

API specifications are described in the Github [file](../api/GovStack\_Registration\_BB\_API\_template-1.1.0-resolved.json) and displayed here:

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API_template-1.1.0-resolved.json" path="/data/statistics/1.0" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API_template-1.1.0-resolved.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API_template-1.1.0-resolved.json)
{% endswagger %}



### 8.2 List all assignments API

Description: Lists registered application files as assignments.&#x20;

Request endpoint: GET /api/task&#x20;

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/ingmarvali-API-1/api/GovStack_Registration_BB_API_workflow-0.0.1-resolved.json" path="/api/task" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/ingmarvali-API-1/api/GovStack_Registration_BB_API_workflow-0.0.1-resolved.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/ingmarvali-API-1/api/GovStack_Registration_BB_API_workflow-0.0.1-resolved.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/ingmarvali-API-1/api/GovStack_Registration_BB_API_workflow-0.0.1-resolved.json" path="/api/task/{id}" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/ingmarvali-API-1/api/GovStack_Registration_BB_API_workflow-0.0.1-resolved.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/ingmarvali-API-1/api/GovStack_Registration_BB_API_workflow-0.0.1-resolved.json)
{% endswagger %}

{% embed url="https://github.com/GovStackWorkingGroup/bb-registration/blob/ingmarvali-API-1/api/GovStack_Registration_BB_API_workflow-0.0.1-resolved.json" %}

### 8.3 New application file registration API

Description: Create application file in Registration Building Block

Request endpoint:  /api/process-definition/{key}/start-with-form&#x20;



Definitions:&#x20;

Process- Service that is created to capture users information.&#x20;

Instance- Application file created in the service.&#x20;



{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/ingmarvali-API-1/api/GovStack_Registration_BB_API-registration-0.0.1-resolved.json" path="/api/process-definition/{key}/start-with-form" method="post" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/ingmarvali-API-1/api/GovStack_Registration_BB_API-registration-0.0.1-resolved.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/ingmarvali-API-1/api/GovStack_Registration_BB_API-registration-0.0.1-resolved.json)
{% endswagger %}

{% embed url="https://github.com/GovStackWorkingGroup/bb-registration/blob/ingmarvali-API-1/api/GovStack_Registration_BB_API-registration-0.0.1-resolved.json" %}

### 8.4 Workflow processing task API

Description: Process and complete applicant task by id

Request endpoint:  /api/applicant/task/{id}/sign-form

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/ingmarvali-API-1/api/GovStack_Registration_BB_API_workflow-0.0.1-resolved.json" path="/api/applicant/task/{id}/sign-form" method="post" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/ingmarvali-API-1/api/GovStack_Registration_BB_API_workflow-0.0.1-resolved.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/ingmarvali-API-1/api/GovStack_Registration_BB_API_workflow-0.0.1-resolved.json)
{% endswagger %}
