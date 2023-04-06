---
description: >-
  This section provides a reference for APIs that should be implemented by this
  Building Block.
---

# 8 Service APIs

The APIs defined here establish a blueprint for how the Building Block will interact with other Building Blocks. Additional APIs may be implemented by the Building Block, but the listed APIs define a minimal set of functionality that should be provided by any implementation of this Building Block.&#x20;

The [GovStack non-functional requirements document](https://govstack.gitbook.io/specification/architecture-and-nonfunctional-requirements/6-onboarding) provides additional information on how 'adapters' may be used to translate an existing API to the patterns described here.

```mermaid
sequenceDiagram
    rect rgba(0, 0, 255, .1)

    App->>+Registration BB: GET /services
    Registration BB-->>-App: array of services (serviceKey)
    
    App->>+Registration BB: GET /service/{serviceKey}
    Registration BB-->>-App: Service properties
    
    end
    rect rgba(204, 204, 255, .2)
    App->>+Registration BB: GET /eForms/{serviceKey}
    Registration BB-->>-App: Array of form schemas (eFormId)

    App->>+Registration BB: GET /eFormSchema/{eFormId}
    Registration BB-->>-App: Form schema 

    end

    rect rgba(0, 0, 255, .1)
    App->>+Registration BB: POST /api/service/{fileId}/documentUpload
    Registration BB-->>-App: documentId, url
    
    
    App->>+Registration BB: POST /api/service/{serviceKey}/startWithForm
    Registration BB-->>-App: fileId
    

    end

    rect rgba(204, 204, 255, .2)

    App->>+Registration BB: GET /api/service/applicationFileList
    Registration BB-->>-App: List of applications, fileId

    App->>+Registration BB: GET /api/service/applicationFile/{fileId}
    Registration BB-->>-App: Application file 

    end
    rect rgba(0, 0, 255, .1)
    App->>+Registration BB: GET /task,  assignee ID
    Registration BB-->>-App: Return taskId, status 
    end

    rect rgba(204, 204, 255, .2)
    App->>+Registration BB: GET /data/statistics/1.0
    Registration BB-->>-App: statistics data
    end
```

## 8.1 Accessing Services & Forms

The available services (i.e. registration processes) and form definitions within such a service can be accessed:

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/services" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/services/{serviceKey}" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/eForms/{serviceKey}" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/eFormSchema/{eFormId}" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

## 8.2 Applicant user services

Going through the registration process as an applicant requires multiple steps available via API endpoints:

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/service/documentUpload" method="post" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/service/{serviceKey}/startWithForm" method="post" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

Existing applications can be accessed after submission:

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/service/applicationFileList" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/service/applicationFile/{fileId}" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/task" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/task/{taskId}" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

## 8.3 Operator user services

Operators can access and process existing application files

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/service/operatorFileList" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/service/applicationFile/{fileId}" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/service/{fileId}/updateWithForm" method="put" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/service/documentUpload" method="post" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/task" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/task/{taskId}" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json" path="/task/{taskId}/complete" method="post" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API.json)
{% endswagger %}

## 8.4 Statistics

The statistics API gives Building Block operational statistics, that reference the number of processed applications (per operator, registration, service, date):

{% swagger src="https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API_statistics.json" path="/data/statistics/1.0" method="get" %}
[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API_statistics.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack_Registration_BB_API_statistics.json)
{% endswagger %}
