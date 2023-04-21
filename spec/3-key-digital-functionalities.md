---
description: >-
  Key Digital Functionalities describe the core (required) functions that this
  building block must be able to perform.
---

# 4 Key Digital Functionalities

The Registration Building Block is a software platform that enables online registration services, their creation, and administration. It is composed of the following capabilities:

* **Online registration:** e-services for a citizen/operator to register with an entity for any number of services.
* **Processing of registrations:** a back office system to validate registration requests through human or automated operators.
* **Development platform for online registration and processing:** to set up the interfaces, rules, and workflows for the above-mentioned capabilities.

To enable flexible and affordable creation and adjustment of the e-services, a no-code approach for the development platform is strongly recommended. The development platform is used by authorized personnel, called “analysts”, entrusted by the entities in charge of the registrations to develop the corresponding online registration services.

The online registration services developed with the no-code platform are used by the applicants who want to be registered and by the operators in charge of processing the requests.

## 4.1 Online Registration e-services & processing <a href="#docs-internal-guid-d85f59a4-7fff-1564-6ae2-86d67f36a258" id="docs-internal-guid-d85f59a4-7fff-1564-6ae2-86d67f36a258"></a>

The online registration services (e-services) created through the development platform are adapted to any type of registration. They consist of a succession of online screens and actions through which the following generic process can be completed:

1. An applicant initiates a registration application. The system may smartly evaluate the applicant's data and guide the applicant toward the relevant eligible registration(s) during this initial step.
2. The applicant can provide claims (= fill out a form), credentials (=upload documents), and fees (= pay online or upload a payment receipt) (we call this part “application file”).
   * The applicant reviews & submits the application file. The system can warn of invalid or missing information through automatic validation, which can include use of external APIs. The applicant confirms and submits the application file to be processed by one or more entities in charge of the registration.
3. An operator (one or more human or automated “robot” roles) reviews the claims provided and makes a decision (approve, reject, or send it back for correction) about the application file (we call this part “processing”).
   * If the back office processing flow has multiple roles then the approval by the first processing role operator will take the application processing task to the next role in the workflow.
   * An applicant can see/monitor the status of the submitted application file and receive results from the entities in charge of the registration.
4. The system, on approval, sends claims to a registry (i.e. registration of relevant information in the registry. See Digital Registries Building Block) and issues a credential.&#x20;

The system at all stages can interact via API interface with other building blocks and external services to exchange and validate the information.

For each service, user rights can be defined and statistical reports can be configured (a part of the “development platform”).

## 4.2 Development Platform <a href="#docs-internal-guid-f7c824af-7fff-a3d3-5a87-3efe0d1dcff9" id="docs-internal-guid-f7c824af-7fff-a3d3-5a87-3efe0d1dcff9"></a>

The development platform allows to design online registration services quickly by configuring necessary rules and screens. The development of a new e-service should be possible through a no-code approach. An analyst user should be able to set up the following aspects:

* **Rules engine**: a tool transforming legal rules relating to a registration (i.e. subjects, results, requirements, and determinants), defined by a human analyst, into machine-readable statements. This configures the high-level requirements and outcomes of the registration service overall.
* **Screens** **(user interface) and flow builder**: a tool for a human analyst to create and organize the screens and fields that are necessary for the application (by an applicant) and processing (by an operator).
* **Controls configurator**: a tool for a human analyst to define, for each field in the application file and processing screens, what controls will be applied (input format, formulas, actions/checks between fields and with external databases).

## 4.3 Out-of-Scope Assumptions



* Registration Building Block does not define which registrant/object should be registered. But allowing applicants to determine if they are or are not subject to a registration is part of the Registration Building Block.
* Long-term storing of registration data/claims and results is not covered in this Building Block. See Digital Registries Building Block for registry and data storage functionalities. However, the integration capability to the Digital Registries Building Block is part of the scope.
* Event notification from external endpoints is not covered in this Building Block. See more in Messaging Building Block. However, the connection to the Messaging Building Block is part of the scope.
* Payment solutions are not covered in this Building Block. See more in Payment Building Block. However, the connection to the Payment Building Block is part of the scope.
* Data transfer security solutions are not covered in this Building Block. See more Information Mediator Building Block. However, the connection to the Information Mediator must exist as it is the base for the connectivity with other Building Blocks.
* Consent management is not covered in this Building Block. See more in the Consent Building Block. However, the connection to the Consent Building Block is part of the scope.
* Authentication/login is not managed in this Building Block. See more Security Building Block. However, the connection to the Authentication solution must be done in each Building Block.
* Integration with special hardware (scanners, fingerprint readers, digital signature solutions, etc.) is not covered in this Building Block.
* SMS and/or Voice services are not covered during the first iteration.
