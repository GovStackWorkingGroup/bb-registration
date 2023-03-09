---
description: >-
  Key Digital Functionalities describe the core (required) functions that this
  building block must be able to perform.
---

# 4 Key Digital Functionalities

These functionalities are described as business processes as opposed to technical specifications or API definitions.

The Registration Building Block is a software that allows the development of online registration services, without coding (= no-code development platform). It is composed of two main elements:

* A no-code development platform
* The online registration services developed with the platform (there is no limit to the number of services that can be developed)

The no-code development platform is used by authorized personnel, called “analysts”, entrusted by the entities in charge of the registrations to develop the corresponding online services.

The online registration services developed with the no-code platform are used by the applicants who want to be registered and by the operators in charge of processing the requests.

## 4.1 No-Code Development Platform <a href="#docs-internal-guid-f7c824af-7fff-a3d3-5a87-3efe0d1dcff9" id="docs-internal-guid-f7c824af-7fff-a3d3-5a87-3efe0d1dcff9"></a>

The no-code development platform acts as a rules engine, a screens (user interface), a flow builder, and a control configurator.

* **Rules engine**: a tool transforming legal rules relating to a registration (i.e subjects, results, requirements, and determinants), defined by a human analyst, into machine-readable statements. See [definition](https://en.wikipedia.org/wiki/Business\_rules\_engine) and [illustration](https://www.digital.nsw.gov.au/digital-transformation/policy-lab/rules-code) of “rules engine”.
* **Screens** (user interface) and flow builder: a tool for a human analyst to create and organize the screens and fields that are necessary for the registration (application file) and processing.
* **Controls configurator**: a tool for a human analyst to define, for each field in the application file and processing screens, what controls will be applied (input format, formulas, actions/checks between fields and with external databases).

![Illustration 1- Example of configuration of the rules engine (UNCTAD’s eRegistrations).](.gitbook/assets/image6.jpg)

![Illustration 2 - Example of the user interface builder (UNCTAD’s eRegistrations).](<.gitbook/assets/image3 (2).png>)

![Illustration 3 - Example of flow builder (UNCTAD’s eRegistrations).](<.gitbook/assets/image7 (1) (1).png>)

## 4.2 The Online Registration Services <a href="#docs-internal-guid-d85f59a4-7fff-1564-6ae2-86d67f36a258" id="docs-internal-guid-d85f59a4-7fff-1564-6ae2-86d67f36a258"></a>

The online registration services (e-services) created through the no-code development platform are adapted to any type of registration. They consist of a succession of online screens and actions through which:

* an applicant can provide claims (= fill out a form), credentials (=upload documents), and fees (= pay online or upload a payment receipt) and send his/her request to one or more entities in charge of the registration (we call this part “application file”).
* an applicant can see/monitor the status of the submitted application file and receive results from the entities in charge of the registration.
* Validation: one or more human or automated (“robot” or “BOT role”) operators can review the elements provided, approve or reject an application, send claims to a registry, and issue a credential (we call this part: “processing”).
* For each service, user rights can be defined and statistical reports can be configured (“administration” part).

## 4.3 Out of Scope Assumptions

* Registration Building Block does not define which registrant/object should be registered. But allowing applicants to determine if they are or are not subject to a registration is part of the Registration Building Block.
* Long-term storing of registration data/claims and results is not covered in this Building Block. See Digital Registries Building Block for data storage functionalities. However, the integration capability to the Digital Registries Building Block is part of the scope.
* Event notification from external endpoints is not covered in this Building Block. See more in Messaging Building Block. However, the connection to the Messaging Building Block is part of the scope.
* Payment solutions are not covered in this Building Block. See more in Payment Building Block. However, the connection to the Payment Building Block is part of the scope.
* Data transfer security solutions are not covered in this Building Block. See more Information Mediator Building Block. However, the connection to the Information Mediator must exist as it is the base for the connectivity with other Building Blocks.
* Consent management is not covered in this Building Block. See more in the Consent Building Block. However, the connection to the Consent Building Block is part of the scope.
* Authentication/login is not managed in this Building Block. See more Security Building Block. However, the connection to the Authentication solution must be done in each Building Block.
* Integration with special hardware (scanners, fingerprint readers, digital signature solutions, etc.) is not covered in this Building Block.
* SMS and/or Voice services are not covered during the first iteration.
