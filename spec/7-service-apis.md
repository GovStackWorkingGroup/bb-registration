# 7 Service APIs

This section describes external APIs that must be implemented by the building block. Additional APIs may be implemented by the building block (all APIs must adhere to the standards and protocols defined), but the listed APIs define a minimal set that must be provided by any implementation.

Registration BB is expected to host the following API services.

## 7.1 Statistics API

The statistics API gives BB operational statistics- number of processed applications (per: operator, registration, service, date).

**Resource Model:**

![Illustration 5- resource model for Registration BB Statistics APi.](<.gitbook/assets/image4 (1) (1).png>)

**Standards:**

This section defines standards and protocols used by the API. The API is built using representational state transfer (REST) software architectural style ([https://restfulapi.net/](https://restfulapi.net)) and described in Open API 3 standard ([https://swagger.io/specification/](https://swagger.io/specification/)) using YAML (a human-readable data-serialization language - [http://yaml.org/](http://yaml.org)). Request and response body is in JSON (lightweight data-interchange format - [https://www.json.org/json-en.html](https://www.json.org/json-en.html)).
