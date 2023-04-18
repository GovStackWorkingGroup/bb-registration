---
description: >-
  This section provides a reference for APIs that should be implemented by this
  Building Block.
---

# 8 Service APIs

The APIs defined here establish a blueprint for how the Building Block will interact with other Building Blocks. Additional APIs may be implemented by the Building Block, but the listed APIs define a minimal set of functionality that should be provided by any implementation of this Building Block.

The [GovStack non-functional requirements document](https://govstack.gitbook.io/specification/v/1-0/architecture-and-nonfunctional-requirements/6-onboarding) provides additional information on how 'adapters' may be used to translate an existing API to the patterns described here.

## 8.1 Online Registration e-services

The available services (i.e. registration processes) and form definitions within such a service can be accessed:

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/services" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/services/{serviceKey}" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/services/{serviceKey}/eForms" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/eForms/{eFormId}" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

## 8.2 Generic Registration Steps

Going through the registration process as an applicant requires multiple steps available via API endpoints:

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/services/{serviceKey}/applications" method="post" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/documents" method="post" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

Existing applications can be accessed after submission:

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/applications" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/applications/{fileId}" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/tasks" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/tasks/{taskId}" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

## 8.3 Development Platform

Operators can access and process existing application files

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/applications" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/applications/{fileId}" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/applications/{fileId}" method="put" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/documents" method="post" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/tasks" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/tasks/{taskId}" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/tasks/{taskId}/complete" method="post" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

### Statistics

The statistics API gives Building Block operational statistics, that reference the number of processed applications (per operator, registration, service, date):

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API_statistics.json" path="/data/statistics/1.0" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API_statistics.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API_statistics.json)
{% endswagger %}
