# 8 Service APIs

This section describes external APIs that must be implemented by the Building Block. Additional APIs may be implemented by the Building Block (all APIs must adhere to the standards and protocols defined), but the listed APIs define a minimal set that must be provided by any implementation.

Registration Building Block is expected to host the following API services.

## 8.1 Statistics API

The statistics API gives Building Block operational statistics- number of processed applications (per: operator, registration, service, date).

**Resource Model:**

![Illustration 5- resource model for Registration Building Block Statistics API.](<.gitbook/assets/image4 (1) (1).png>)

API specifications are described in the GitHub [file](../api/GovStack\_Registration\_BB\_API\_template-1.1.0-resolved.json).

[https://github.com/GovStackWorkingGroup/bb-registration/blob/main/api/GovStack\_Registration\_BB\_API\_template-1.1.0-resolved.json](../api/GovStack\_Registration\_BB\_API\_template-1.1.0-resolved.json)&#x20;

[https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack\_Registration\_BB\_API\_template-1.1.0-resolved.json](https://raw.githubusercontent.com/GovStackWorkingGroup/bb-registration/main/api/GovStack\_Registration\_BB\_API\_template-1.1.0-resolved.json)&#x20;

**Standards:**

This section defines the standards and protocols used by the API. The API is built using a representational state transfer ([REST](https://restfulapi.net/)) software architectural style and described in [Open API 3 standard](https://swagger.io/specification/) using [YAML ](http://yaml.org/)(a human-readable data-serialization language). The request and response body is in [JSON ](https://www.json.org/json-en.html)(lightweight data-interchange format).



### 7.2 List all assignments API

/api/task&#x20;

An applicant can see/monitor the status of the submitted application file

{% embed url="https://github.com/GovStackWorkingGroup/bb-registration/blob/ingmarvali-API-1/api/GovStack_Registration_BB_API_workflow-0.0.1-resolved.json" %}

### 7.3 Create new application API

Definitions:&#x20;

Process- Service that is created to capture user information.&#x20;

Instance- Application file created in the service.&#x20;

/api/process-definition/{key}/start-with-form&#x20;



{% embed url="https://github.com/GovStackWorkingGroup/bb-registration/blob/ingmarvali-API-1/api/GovStack_Registration_BB_API-registration-0.0.1-resolved.json" %}
