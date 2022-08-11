# 3 Key Digital Functionalities

Key Digital Functionalities describe the core (required) functions that this building block must be able to perform. These functionalities are described as business processes as opposed to technical specifications or API definitions.

The Registration BB is a software allowing to develop online registration services, without coding (= no-code development platform). It is composed of two main elements:

* A no-code development platform
* The online registration services developed with the platform (there is no limit to the number of services that can be developed)

The no-code development platform is used by authorized personnel, called “analysts”, entrusted by the entities in charge of the registrations to develop the corresponding online services. &#x20;

The online registration services developed with the no code platform are used by the applicants who want to be registered and by the operators in charge of processing the requests.

## 3.1  No-Code Development Platform  <a href="#docs-internal-guid-f7c824af-7fff-a3d3-5a87-3efe0d1dcff9" id="docs-internal-guid-f7c824af-7fff-a3d3-5a87-3efe0d1dcff9"></a>

The no-code development platform acts as a rules engine, a screens (user interface) and flow builder and a control configurator:

* **Rules engine**: a tool transforming legal rules relating to a registration (i.e subjects, results, requirements and determinants), defined by a human analyst, into machine-readable statements.  See [definition](https://en.wikipedia.org/wiki/Business\_rules\_engine) and [illustration](https://www.digital.nsw.gov.au/digital-transformation/policy-lab/rules-code) of “rules engine”.
* **Screens** (user interface) and flow builder: a tool for a human analyst to create and organize the screens and fields that are necessary for the registration (application file) and processing.&#x20;
* **Controls configurator**: a tool for a human analyst to define, for each field in the application file and processing screens, what controls will be applied (input format, formulas, actions/checks between fields and with external databases).

![Illustration 1- Example of configuration of the rules engine (UNCTAD’s eRegistrations).](.gitbook/assets/image6.jpg)

![Illustration 2 - Example of the user interface builder (UNCTAD’s eRegistrations).](<.gitbook/assets/image3 (2).png>)

![Illustration 3 - Example of flow builder (UNCTAD’s eRegistrations).](<.gitbook/assets/image7 (1) (1).png>)

## 3.2 The Online Registration Services <a href="#docs-internal-guid-d85f59a4-7fff-1564-6ae2-86d67f36a258" id="docs-internal-guid-d85f59a4-7fff-1564-6ae2-86d67f36a258"></a>

The online registration services (e-services) created through the no-code development platform are adapted to any type of registration. They consist in a succession of online screens and actions through which:

* an applicant can provide claims (= fill a form), credentials (=upload documents) and fees (= pay online or upload a payment receipt) and send his/her request to one or more entities in charge of the registration (we call this part “application file”)
* an applicant can see/monitor the status of the submitted application file and receive results from the  entities in charge of the registration &#x20;
* Validation: one or more human or automated (“robot” or “BOT role”) operators can review the elements provided, approve or reject an application, send claims to a registry and issue a credential (we call this part: “processing”)
* For each service, user rights can be defined and statistical reports can be configured (“administration” part)

## 3.3 Out of Scope Assumptions

* Registration BB does not define which registrant/object should be registered. But allowing applicants to determine if they are or not subject to a registration is part of the registration BB.
* Long term storing of registration data/claims and results is not covered in this BB. See Digital Registries BB for data storage functionalities. However, the connection to the Digital Registries BB is part of the scope.  &#x20;
* Event notification from external endpoints is not covered in this BB. See more in Messaging BB. However, the connection to the Messaging BB is part of the scope.&#x20;
* Payment solutions are not covered in this BB. See more in Payment BB.  However, the connection to the Payment BB is part of the scope.&#x20;
* Data transfer security solutions are not covered in this BB. See more Information Mediator BB. However, the connection to the Information Mediator must exist as it is the base for the connectivity with other BB-s.&#x20;
* Consent management is not covered in this BB. See more in the Consent BB. However, the connection to the Consent BB is part of the scope. &#x20;
* Authentication/login is not managed in this BB. See more Security BB. However, the connection to the Authentication solution must be done in each BB.&#x20;
* Integration with special hardware (scanners, fingerprint readers, digital signature solutions etc) is not covered in this BB.
* SMS and/or Voice services are not covered during the first iteration.
