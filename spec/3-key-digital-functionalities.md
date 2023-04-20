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

## 4.1 Online Registration e-services <a href="#docs-internal-guid-d85f59a4-7fff-1564-6ae2-86d67f36a258" id="docs-internal-guid-d85f59a4-7fff-1564-6ae2-86d67f36a258"></a>

The online registration services (e-services) created through the development platform are adapted to any type of registration. They consist of a succession of online screens and actions through which:

* An applicant can provide claims (= fill out a form), credentials (=upload documents), and fees (= pay online or upload a payment receipt) and send his/her request to one or more entities in charge of the registration (we call this part “application file”).
* An applicant can see/monitor the status of the submitted application file and receive results from the entities in charge of the registration.
* Validation and processing: one or more human or automated (“robot” or “BOT role”) operators can review the claims provided, approve or reject an application, send claims to a registry, and issue a credential (we call this part: “processing”).
* Interact via API interface with other building blocks and external services to exchange and validate the information.
* For each service, user rights can be defined and statistical reports can be configured (“administration” part).

## 4.2 Generic Registration Steps <a href="#docs-internal-guid-f7c824af-7fff-a3d3-5a87-3efe0d1dcff9" id="docs-internal-guid-f7c824af-7fff-a3d3-5a87-3efe0d1dcff9"></a>

In general, a registration process always consists of the following steps although steps may be skipped if they are not applicable to the specific registration's context:

1. Applicant accesses the platform to initiate the registration process.
2. The system may smartly evaluate the user data and guide the user toward the relevant eligible registration(s).
3. Applicant applies for the registration:
   * Applicant fills out the registration form providing all required data;
   * Applicant uploads required documents/credentials;
   * Applicant is guided to pay the calculated fees;
   * Applicant reviews information, can be reminded of any information missing through automatic validation, and confirms his/her will to apply for registration;
   * If designed so, the Control functionality will validate captured data against external API data and in case validation fails issue warnings to the applicant.
4. Operator/bot processes the registration application, validating the request:
   * Application file is registered and workflow is created;
   * Operator will then open the application and verify the application content and make a decision (approve, reject, or send it back for correction);
   * If the back office processing flow has multiple roles then the approval by the first processing role operator will take the application processing task to the next role in the workflow.
5. Registration
   * System makes a registration of relevant information in the registry (Digital Registries Building Block)

N.B. For further details refer to the Functional Requirements section, especially "6.1.2" and "6.2".

## 4.3 Development Platform <a href="#docs-internal-guid-f7c824af-7fff-a3d3-5a87-3efe0d1dcff9" id="docs-internal-guid-f7c824af-7fff-a3d3-5a87-3efe0d1dcff9"></a>

The development platform acts as a rules engine, a screens (user interface) and flow builder, and a control configurator. The development of a new online registration service should be possible through a no-code approach.

* **Rules engine**: a tool transforming legal rules relating to a registration (i.e. subjects, results, requirements, and determinants), defined by a human analyst, into machine-readable statements.
* **Screens** **(user interface) and flow builder**: a tool for a human analyst to create and organize the screens and fields that are necessary for the registration (application file) and processing.
* **Controls configurator**: a tool for a human analyst to define, for each field in the application file and processing screens, what controls will be applied (input format, formulas, actions/checks between fields and with external databases).

![Illustration 1- Example of configuration of the rules engine (UNCTAD’s eRegistrations).](.gitbook/assets/image6.jpg)

![Illustration 2 - Example of the user interface builder (UNCTAD’s eRegistrations).](<.gitbook/assets/image3 (2).png>)

![Illustration 3 - Example of workflow builder (UNCTAD’s eRegistrations).](<.gitbook/assets/image7 (1) (1).png>)
