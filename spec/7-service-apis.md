---
description: >-
  This section provides a reference for APIs that should be implemented by this
  Building Block.
---

# 8 Service APIs

The APIs defined here establish a blueprint for how the Building Block will interact with other Building Blocks. Additional APIs may be implemented by the Building Block, but the listed APIs define a minimal set of functionality that should be provided by any implementation of this Building Block.&#x20;

The [GovStack non-functional requirements document](https://govstack.gitbook.io/specification/architecture-and-nonfunctional-requirements/6-onboarding) provides additional information on how 'adapters' may be used to translate an existing API to the patterns described here.

## 8.x Accessing Services & Forms

The available services (i.e. registration processes) and form definitions within such a service can be accessed:

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/f3ca233de70279c7af0f028664520ead3f9f1c55/api/GovStack_Registration_BB_API_workflow.json" path="/services" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/f3ca233de70279c7af0f028664520ead3f9f1c55/api/GovStack_Registration_BB_API_workflow.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/f3ca233de70279c7af0f028664520ead3f9f1c55/api/GovStack_Registration_BB_API_workflow.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/f3ca233de70279c7af0f028664520ead3f9f1c55/api/GovStack_Registration_BB_API_workflow.json" path="/services/{serviceKey}" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/f3ca233de70279c7af0f028664520ead3f9f1c55/api/GovStack_Registration_BB_API_workflow.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/f3ca233de70279c7af0f028664520ead3f9f1c55/api/GovStack_Registration_BB_API_workflow.json)
{% endswagger %}

## 8.x Submitting application file for a registration service

Description: Create application file in Registration Building Block Request endpoint: &#x20;

/api/process-definition/{key}/start-with-form   Definitions: Process: A service that is created to capture users' information.  Instance: Application file created in the service.&#x20;

submit form data | upload document | submit/sign (?)

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/ingmarvali-API-1/api/GovStack_Registration_BB_API-registration-0.0.1-resolved.json" path="/api/process-definition/{key}/start-with-form" method="post" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/ingmarvali-API-1/api/GovStack_Registration_BB_API-registration-0.0.1-resolved.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/ingmarvali-API-1/api/GovStack_Registration_BB_API-registration-0.0.1-resolved.json)
{% endswagger %}

{% embed url="https://github.com/GovStackWorkingGroup/bb-registration/blob/ingmarvali-API-1/api/GovStack_Registration_BB_API-registration-0.0.1-resolved.json" %}

## 8.x Processing as an operator

Description: Process and complete applicant task by id. Request endpoint:  /api/applicant/task/{id}/sign-form

Description: Lists registered application files as assignments. Request endpoint: GET/api/task&#x20;

get tasks | ...

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/ingmarvali-API-1/api/GovStack_Registration_BB_API_workflow-0.0.1-resolved.json" path="/api/applicant/task/{id}/sign-form" method="post" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/ingmarvali-API-1/api/GovStack_Registration_BB_API_workflow-0.0.1-resolved.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/ingmarvali-API-1/api/GovStack_Registration_BB_API_workflow-0.0.1-resolved.json)
{% endswagger %}

{% embed url="https://github.com/GovStackWorkingGroup/bb-registration/blob/ingmarvali-API-1/api/GovStack_Registration_BB_API_workflow-0.0.1-resolved.json" %}

## 8.x Statistics

The statistics API gives Building Block operational statistics, that reference the number of processed applications (per operator, registration, service, date):

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API_template-1.1.0-resolved.json" path="/data/statistics/1.0" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API_template-1.1.0-resolved.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API_template-1.1.0-resolved.json)
{% endswagger %}
