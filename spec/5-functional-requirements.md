---
description: >-
  This section lists the technical capabilities that this Building Block
  must/could have.
---

# 6 Functional Requirements

These requirements should be sufficient to deliver all functionalities that are listed in the Key Digital Functionalities section. These Functional Requirements do not define specific APIs, they provide specifications and information about any functionalities that must be implemented within the Building Block.

The functionalities described in this chapter apply to any government registration use case. For specific examples, please review example implementations that have been outlined:

[Post-Partum and Infant Care Registration Example](https://govstack.gitbook.io/example-implementations/postpartum/pp-01-registration-example1)

[Unconditional Social Cash Transfer](https://govstack.gitbook.io/example-implementations/unconditional-social-cash-transfer/usct-02-registration-example1)

## 6.1 Online Registration e-services

The purpose of the online registration services (from here on e-services) module of Registration Building Block is:

* to enable Applicants to apply for and receive registration claims (certificated documents);
* to enable the Back Office staff, i.e. Operators to process applications, register information, and issue registration certificates.

### 6.1.1 Applicant Functional Requirements

As an Applicant, I want to use an e-service, so that I can apply for multiple logically grouped registrations with one integrated service and receive all needed claims/certificates simultaneously.

The functional requirements for an Applicant are as follows:

* Applicants can log in to the system and see available e-services;
* Applicants can select relevant services and apply for registration(s);
* Applicants can submit applications to relevant entities;
* Applicants can see applications in the draft, rejected, validated, and sent back for corrections status;
* Entity operators can see a list of received applications and process the applications;
* Operators can make decisions (three types) and upload the decisions to the system as result;
* Operators can see statistics of the processing;
* Each back office operator can only see relevant data of the application. Operators are authorized to see and process their role-related applications.

### 6.1.1.1 User Account (A0), (REQUIRED)

The User Account page, A0, is the first page that all users see when they authenticate (log in) to the system.

A0 must contain the following sections:

* "My applications" part with various tabs,
  * list of applications (can be filtered and queried by status);
  * list of documents in the account and access to each of them;
  * application file content - the data sent with the applications;
  * messages received.
* "Services available" part listing the services available for applicant to use. For each service there is a button, an icon, a title, an explanation text.

In order to make the service usable and personalized, Applicants must authenticate to the system - then the Applicant’s information is automatically attached to the application file when sending the application for processing.

The system must enable to:

1. see the User Account screen(Dashboard);
2. select an e-service from the list of e-services and fill a new application;
3. open the Applicant’s own applications to see the content;
4. save and continue filling the Applicant’s draft applications;
5. filter applications (search free text from the application name, submission date, deadline date, and status);
6. delete draft applications;
7. see the content (Data, documents) of the submitted applications and the status of the application;
8. see “My documents” - certificates and/or approvals issued for the Applicant;
9. see and give approval for applications waiting for the Applicant's approval;
10. see, correct, and resubmit applications sent back for correction;
11. see applications rejected by the Back Office;
12. see messages sent for the Applicant;
13. see and CRUD (Create, Read, Update, Delete) all documents uploaded by the Applicant;
14. see a list of registration application files, filtered by status (pending, validated, rejected, sent back for correction);
15. send on-screen messages and e-mail, sms, etc. messages to the applicant(s) and users based on application statuses;
16. see the status of the application file of the registration(s) process.

### 6.1.1.2 e-Service screens (REQUIRED)

An applicant has the option to see all screens of the e-service. The e-service may have one or more screens. Service screens are preconfigured in Screen and flow builder as service schema. Example screens:

* **Guide** screen: this is a screen where the analyst can create text for the information of the applicants (guidelines) or ask questions (through fields) to determine what category of subjects the applicant belongs to (i.e. if the applicant is subject to the registration and what data, documents and fees are required).
* **Applicant** form screen: this is where the applicant will provide the required data.
* **Documents** upload screen: where the applicant will upload scanned copies of the required documents/credentials.
* **Payment** screen: where the applicant will see a list of fees that must be paid and can be redirected to an external online payment service.
* **Send** screen: where the applicant can be reminded of any information missing in his/her application (if some fields have not been filled or documents have not been uploaded) and will be requested to confirm his/her will to apply for registration.

The above screens, when activated, will be displayed, in the predefined order (guide, applicant form, document upload, payment, send) as a wizard. If not activated, then the applicant will not see the pages.

### 6.1.1.3 e-Service data capturing (REQUIRED)

When an applicant is entering data the system must capture the data entered. Applicant can save their applicant file as a draft and continue data entering later.

### 6.1.1.4 e-Service data validation (REQUIRED)

When an applicant is entering data the system must validate the data based on the configuration made by the Analyst in the Control Configurator.

### 6.1.1.5 e-Service registrations (REQUIRED)

The system must tell applicants which services are applicable.

* The system has a list of applicable registrations where the Applicant can make a selection before continuing to the next form page. Registration may be optional or mandatory.
* The system will not allow the Applicant to continue or submit the file if mandatory registrations are not selected.
* Applicants can select multiple registrations in the same application.

Example: the UC-Postpartum infant care- Registrations in Civil registry, mother and child tracking program (MCTS), and optionally to pediatrician first meeting registration (three simultaneous registrations within one service).

### 6.1.1.6 e-Service required documents, requirements (REQUIRED)

When an applicant has filled in data on a selected registration to apply for, the system must show which additional information/documents must be uploaded with the application. Duplicate requirements are merged. If a requirement is an output of one registration and at the same time the input to the next registration, then this document must not be asked/visible in the requirements list as it will be acquired during the process.

An Applicant must be able to upload documents or take the documents to the counter service as originals.

### 6.1.1.7 e-Service required fees/payments (REQUIRED)

When an applicant has filled in data on a selected registration to apply for, the system must show which fees are relevant.

* Applicants must see the list of all fees to be paid, displayed both as a sum and separately;
* Fees can be paid in bulk;
* Fees can be paid at the beginning of the process (pre-payment); in the middle of the process after a decision or after the process is finished upon receiving the result/output (cash payment);
* Payment options may include: online payment; cash payment; mobile payment, etc.;
* All payment-related transactions must be logged;
* All payments received must be available in the payment registry (or equivalent registry) as successful transactions.

### 6.1.1.8 e-Service movement on screens, roles and submission (REQUIRED)

Applicants can move between the screens and change the data up to the point of submission. Applicants can submit an application for processing (flow). All submitted applications are recorded in the processing flow engine and the first role defined in the flow builder will receive the registered application file as a task for processing. Movement on the screens can be done by clicking a button (Next) or by clicking on a tab/page name. Movement between the processing roles is done via decisions (approve, reject, send back)\
The system must validate inconsistencies in the application upon submission.

### 6.1.1.9 e-Service application history (REQUIRED)

An applicant must see the application and flow history, process registration time, and processing status in a flow. It should be possible to see which Institution is currently processing the application.

Applicants must see the expected processing end time for each application.

### 6.1.1.10 Read information from QR-code/barcode and insert to the form (REQUIRED)

An applicant can use a function (e.g. button) and the action to capture data from the QR code.\
Expected result- the applicant can activate (a mobile phone) camera, read the QR code and capture the data from the QR code to a field. Example data to be captured: “MCTS31”; “www.registrations.org”

[\<Example UI>](.gitbook/assets/QR%20code%20reader.PNG)

### 6.1.1.11 System audit log functionality (REQUIRED)

* The system logs all user action in the system.
* The user action log is visible for admin users.
* By default user action log is stored for 1 year after which the system will delete the log. The storage length is configurable in the Rules Engine.
* Statistics are entered into the statistics log table.

### 6.1.1.12 Back office Operators have a view to see the list of applications to be processed, task list dashboard (REQUIRED)

* The system has the function for an Operator to pick assignments from the common task dashboard.
* The system has the view for an Operator to see assigned roles and assigned tasks for this role.
* Operators are linked to Institutions (or sub-units) and roles, thus can only see the tasks relevant to their role and Institution.
* Optionally (configurable) - an operator could be able to claim a task from the application task dashboard. When the task has been claimed, then the application file will be taken off the common pool.

[\<Example UI>](https://drive.google.com/file/d/1UNRuGBpcJH-r02\_yuI7wpOS34nVOX9tX/view?usp=sharing)

### 6.1.1.13 An Operator of a role must see the received application file screen containing all information submitted by an Applicant and information complemented by other Operators while processing the same file (REQUIRED)

* Required documents relevant to this role and registration linked to the role;
* Required data relevant to this role and registration(s) linked to this role.
* An Operator must not see any information that is not relevant/required for the registration that this role is serving.
* Must be able to see the history of the application file processing.
* Must be able to see the status of the application file.

[\<Example UI>](https://drive.google.com/file/d/11hGK20tP6Kt0nn-A0vnCMCKl3DdfXFXM/view?usp=sharing)

### 6.1.1.14 An Operator must be able to make a decision in the system by selecting the right decision type - approve, reject, send back for correction (REQUIRED)

* At least one decision option must be available in order to process the application file.
* The system must enable a form for an Operator to draft a decision text and select/fill in additional information on the form.
* In case of errors in the application, operators must be able to mark which document and/or data field is incorrect. Applicants must see the highlighted information.

[\<Example UI>](https://drive.google.com/file/d/19WnGiBD7F2C9CCvST\_s4V6SulblOJbS5/view?usp=sharing)

### 6.1.1.15 Operators have the option to print, sign and upload a certificate (REQUIRED)

* The system must not let an Operator make a decision in case a required document/result certificate is missing.
* The system can display, print and upload a filled certificate from a template.

### 6.1.1.16 Operators have the option to edit application information if corrections are needed (REQUIRED)

* The system must highlight if an Operator has made any changes to the information submitted by the Applicant.
* The system should enable the Operator to remove and/or upload required documents.

### 6.1.1.17 Operators have the option to communicate with applicant users (REQUIRED)

* Communication is application related and stored with application data.
* Communication can be initiated by an operator or by an applicant. Communication initiation options must be configurable.
* The communication system must be integrated with other systems via API (Information Mediator) and configurable for multiple channels.
* Communication options are asynchronous and/or in real-time.

### 6.1.2 External API functional requirements

An external Application may access the Registration Building Block and provide registration data via API for the following functions:&#x20;

* to enable an external APP (Building Blocks) to send application files to e-service without using the default user interface enabled by Registration Building Block and receive confirmation of the registration.
* to enable an external APP to see the list of e-services and service schema via API.
* to enable an external APP to see the list of registered application files in an e-service.
* to enable an external APP to update existing application files by using the API.
* go through the data capturing process and submit an application to receive a registration (certificate);
* receive confirmation that the e-service received my application file;
* monitor the processing status of my application, receive update messages;
* see the history of all applications submitted by the user.
* Operators can see a list of received applications and process the applications;
* Operators can make decisions (three types) and upload the decisions to the system as result;
* Operators can see statistics of the processing;
* Each back office operator can only see relevant data of the application. Operators are authorized to see and process their role-related applications.

### 6.1.2.1 Register Application Files API (REQUIRED)

System has an API service that enables to register new application files in the Registration Building Block (See chapter 8.3).

### 6.1.2.2 View Schema API (RECOMMENDED)

System has an API that enables to view a schema of an e-service application file with all data fields. Schema can be used by other Building Blocks and components to create alternative e-service channels (e.g. mobile apps).

### 6.1.2.3 View File Processing Tasks API (REQUIRED)

System has an API that enables to view a list of registered application file processing tasks (See chapter 8.2).

### 6.1.2.4 Change File Process Status API (REQUIRED)

System has an API that enables to change the status of registered application file process flow- complete application processing task (See chapter 8.4).

### 6.1.2.5 View Statistics API (REQUIRED)

System has an API that enables to view statistics of processing (See chapter 8.1).

### 6.1.3 Generic Registration Functionalities

The following table provides information on how the Functional Capabilities (by an applicant and a registrar) in specific use cases match the functional requirements as described&#x20;

User Interface- Provide data in an online form, and upload copies of credentials/claims/ documents.

| **Use Case**                               | **User Journey**                                                                                            | **Functional Capabilities**                                                                                                                                                                                            | **Technical requirements**                                                                                                    | **Technical requirements of Online registration services (5.2)**                                                              |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| <p>Registration</p><p><br></p>             | Postpartum and Infant Care                                                                                  | 1. Capture Basic Details                                                                                                                                                                                               | <p>Rules engine (5.1.1);</p><p>User interface and flow builder (5.1.2);</p><p>Control configurator (5.1.3)</p><p><br><br></p> | <p>5.2 Online registration services functional requirements:</p><p>DS-1; DS-2; DS-3; DS-4; DS-5; DS-6; DS-8</p><p><br></p>    |
| <p>Registration</p><p><br></p>             | Postpartum and Infant Care                                                                                  | 2. Optional- registration payment                                                                                                                                                                                      | <p>Rules engine (5.1.1);</p><p>User interface and flow builder (5.1.2)</p><p><br></p>                                         | DS-7                                                                                                                          |
| Registration                               | Postpartum and Infant Care                                                                                  | 3. Optional: Validate with foundational ID system                                                                                                                                                                      | <p>User interface and flow builder (5.1.2)</p><p><br></p>                                                                     | DS-2; DS-3; DS-4                                                                                                              |
| <p>Registration</p><p><br><br></p>         | Postpartum and Infant Care                                                                                  | 4. Capture Registration Details                                                                                                                                                                                        | <p>Rules engine (5.1.1);</p><p>User interface and flow builder (5.1.2);</p><p>Control configurator (5.1.3)</p>                | DS-3; DS-6; DS-5                                                                                                              |
| <p>Registration</p><p><br><br></p>         | Postpartum and Infant Care                                                                                  | 5. Optional where legally required: Get Citizen Confirmation                                                                                                                                                           | User interface and flow builder (5.1.2)                                                                                       | DS-3; DS-6                                                                                                                    |
| <p>Registration</p><p><br><br><br></p>     | Postpartum and Infant Care                                                                                  | <p>6. Update Register.</p><p>The local register is updated for later use</p>                                                                                                                                           | <p>Rules engine (5.1.1);</p><p>User interface and flow builder (5.1.2);</p><p>Control configurator (5.1.3)</p>                | DS-3; DS-5                                                                                                                    |
| <p>Registration</p><p><br><br></p>         | Postpartum and Infant Care                                                                                  | 7. Capture Card Details                                                                                                                                                                                                | <p>User interface and flow builder (5.1.2);</p><p>Control configurator (5.1.3)</p>                                            | DS-10                                                                                                                         |
| <p>Registration</p><p><br><br></p>         | Postpartum and Infant Care                                                                                  | 8. Assign Card to Parent                                                                                                                                                                                               | User interface and flow builder (5.1.2)                                                                                       | DS-3; DS-8; DS-5                                                                                                              |
| <p>Registration</p><p><br><br><br></p>     | Postpartum and Infant Care                                                                                  | <p>9. Update Registry</p><p>The card number and mothers details are sent to the Government Registry for update, e.g. Department of Health or Home Affairs</p>                                                          | User interface and flow builder (5.1.2)                                                                                       | DS-3; DS-5; DS-8                                                                                                              |
| <p>Registration</p><p><br><br></p>         | Postpartum and Infant Care                                                                                  | 10. Capture Basic Details                                                                                                                                                                                              | <p>Rules engine (5.1.1);</p><p>User interface and flow builder (5.1.2);</p><p>Control configurator (5.1.3)</p>                | DS-3; DS-5                                                                                                                    |
| <p>Registration</p><p><br><br><br></p>     | Postpartum and Infant Care                                                                                  | <p>11. Update Register</p><p>The local register is updated for later use and submit the information for the remote Government Department Registry</p>                                                                  | User interface and flow builder (5.1.2)                                                                                       | DS-3; DS-5; DS-8                                                                                                              |
| <p>Registration</p><p><br><br><br></p>     | Postpartum and Infant Care                                                                                  | 12. Request Birth Certificate                                                                                                                                                                                          | <p>Rules engine (5.1.1);</p><p>User interface and flow builder (5.1.2)</p>                                                    | DS-3; DS-5; DS-8; DS-12; DS-13; DS-14; DS-15                                                                                  |
| <p>Registration</p><p><br><br><br><br></p> | Postpartum and Infant Care                                                                                  | <p>13. Give Reference Number.</p><p>Once the request is successfully committed the mother is given a reference number</p>                                                                                              | User interface and flow builder (5.1.2); SF-7                                                                                 | DS-1; DS-14; DS-15                                                                                                            |
| <p>Registration</p><p><br><br><br><br></p> | Postpartum and Infant Care                                                                                  | <p>14. Search Patient Case</p><p>Generate a new folder for case records and link it to the child ID. If no case exists, create one and link the Card, otherwise identify the correct record and store the case UID</p> | <p>User interface and flow builder (5.1.2);</p><p>Control configurator (5.1.3);</p><p>SF-7</p>                                | DS-14; DS-15                                                                                                                  |
| <p>Registration</p><p><br><br><br></p>     | Postpartum and Infant Care                                                                                  | <p>15. Update Registry</p><p>The card number, mothers details, childs details and birth details, are sent to the Govt, e.g. the Department of Home Affairs</p>                                                         | <p>Rules engine (5.1.1);</p><p>User interface and flow builder (5.1.2);</p><p>SF-7</p>                                        | <p>5.2 The online registration services functional requirements;</p><p>DS-3; DS-5; DS-8; DS-9; DS-12; DS-13; DS-14; DS-15</p> |
| <p>Payments</p><p><br><br><br></p>         | Postpartum and Infant Care                                                                                  | 1.Healthcare (HC) worker logs into the postpartum payment registry system                                                                                                                                              | User interface and flow builder (5.1.2)                                                                                       | DS-1                                                                                                                          |
| <p>Payments</p><p><br><br></p>             | Postpartum and Infant Care                                                                                  | 2.Mother presents program membership ID card to the HC worker, e.g. barcode                                                                                                                                            | User interface and flow builder (6.1.2)                                                                                       | <p>DS-10</p><p><br></p>                                                                                                       |
| <p>Payments</p><p><br></p>                 | Postpartum and Infant Care                                                                                  | <p>3. Capture details for the Mother</p><p>Capture data to verify the mother and prevent fraud per legal requirements, for processing later.</p><p>API spec</p><p><br><br><br></p>                                     | User interface and flow builder (5.1.2)                                                                                       | DS-3; DS-4                                                                                                                    |
| <p>Payments</p><p><br><br><br></p>         | Postpartum and Infant Care                                                                                  | 4.1 Validate the mother has completed all steps                                                                                                                                                                        | <p>User interface and flow builder (5.1.2);</p><p>Control configurator (5.1.3)</p>                                            | DS-3; DS-4                                                                                                                    |
| <p>Payments</p><p><br><br><br></p>         | Postpartum and Infant Care                                                                                  | 4.2 Verify mother has no pending incentive voucher for this milestone                                                                                                                                                  | <p>User interface and flow builder (5.1.2);</p><p>Control configurator (5.1.3)</p>                                            | DS-3; DS-4                                                                                                                    |
| <p>Payments</p><p><br><br></p>             | Postpartum and Infant Care                                                                                  | <p>4.3 Ask HC worker to certify that all steps have been completed</p><p><br></p>                                                                                                                                      | <p><br></p><p>User interface and flow builder (5.1.2);</p><p>Control configurator (5.1.3)</p>                                 | DS-3; DS-4                                                                                                                    |
| <p>Payments</p><p><br></p>                 | Postpartum and Infant Care                                                                                  | 5. Determine payment amounts for HC worker and mother                                                                                                                                                                  | <p>Rules engine (5.1.1)</p><p><br></p>                                                                                        | DS-3; DS-4                                                                                                                    |
| <p>Payments</p><p><br><br></p>             | Postpartum and Infant Care                                                                                  | 6. For the mother, a cash payment is given via a paper payment voucher                                                                                                                                                 | <p>User interface and flow builder (5.1.2);</p><p>Control configurator (5.1.3)</p>                                            | DS-3; DS-4                                                                                                                    |
| <p>Payments</p><p><br><br></p>             | Postpartum and Infant Care                                                                                  | 9. Record payment status and amounts in registry                                                                                                                                                                       | <p>User interface and flow builder (5.1.2);</p><p>Control configurator (5.1.3)</p>                                            | DS-3; DS-5; DS-8; DS-9; DS-12; DS-13; DS-14; DS-15                                                                            |
| <p>Case Management</p><p><br><br></p>      | Postpartum and Infant Care                                                                                  | 1. HC worker logs into the MCTS registration system                                                                                                                                                                    | User interface and flow builder (5.1.2)                                                                                       | DS-1;                                                                                                                         |
| <p>Case Management</p><p><br><br></p>      | Postpartum and Infant Care                                                                                  | 2. Caretaker presents program membership ID card to the HC worker                                                                                                                                                      | <p>Rules engine (5.1.1);</p><p>User interface and flow builder (5.1.2)</p>                                                    | DS-10                                                                                                                         |
| <p>Case Management</p><p><br><br><br></p>  | <p>Postpartum and Infant Care</p><p><br></p>                                                                | <p>3. HC workers have access to minimal required data for the purposes of completing this process</p><p><br></p>                                                                                                       | User interface and flow builder (5.1.2)                                                                                       | DS-5; DS-3; DS-4                                                                                                              |
| <p>Case Management</p><p><br><br></p>      | Postpartum and Infant Care                                                                                  | 4. The HC worker may read information from the child’s health records registry                                                                                                                                         | User interface and flow builder (5.1.2)                                                                                       | DS-3; DS-4                                                                                                                    |
| <p>Case Management</p><p><br><br></p>      | <p>Postpartum and Infant Care</p><p><br></p>                                                                | <p>5. The HC worker updates prescriptions for medication</p><p>API specification</p>                                                                                                                                   | <p>Rules engine (5.1.1);</p><p>User interface and flow builder (5.1.2)</p>                                                    | DS-2; DS-3; DS-4; DS-5                                                                                                        |
| <p>Case Management</p><p><br></p>          | Postpartum and Infant Care                                                                                  | 6. The HC worker updates prescriptions for tests                                                                                                                                                                       | <p>User interface and flow builder (5.1.2)</p><p><br></p>                                                                     | DS-2; DS-3; DS-4; DS-5, DS-8                                                                                                  |
| <p>Case Management</p><p><br><br></p>      | Postpartum and Infant Care                                                                                  | 7. The HC worker updates prescriptions for nutrition                                                                                                                                                                   | User interface and flow builder (5.1.2)                                                                                       | DS-2; DS-3; DS-4; DS-5, DS-8                                                                                                  |
| <p>Case Management</p><p><br><br></p>      | <p>Postpartum and Infant Care</p><p><br></p>                                                                | 8. The HC worker updates prescriptions for immunization                                                                                                                                                                | <p>User interface and flow builder (5.1.2)</p><p><br></p>                                                                     | DS-2; DS-3; DS-4; DS-5, DS-8                                                                                                  |
| <p>Case Management</p><p><br><br></p>      | Postpartum and Infant Care                                                                                  | 9. The HC worker updates prescriptions for therapy                                                                                                                                                                     | User interface and flow builder (5.1.2)                                                                                       | DS-2; DS-3; DS-4; DS-5, DS-8                                                                                                  |
| <p>Registration</p><p><br><br></p>         | Unconditional Social Cash Transfer                                                                          | 1. The admin logs in                                                                                                                                                                                                   | User interface and flow builder (5.1.2)                                                                                       | DS-1                                                                                                                          |
| <p>Registration</p><p><br><br></p>         | Unconditional Social Cash Transfer                                                                          | 2. The admin searches the Registration                                                                                                                                                                                 | User interface and flow builder (5.1.2)                                                                                       | DS-2; DS-3; DS-5                                                                                                              |
| <p>Registration</p><p><br><br></p>         | Unconditional Social Cash Transfer                                                                          | 3. The admin may create a new registration record if none exists for for the potential beneficiary                                                                                                                     | <p>Rules engine (5.1.1);</p><p>User interface and flow builder (5.1.2)</p><p>Control configurator (5.1.3);</p>                | DS-2; DS-3; DS-4; DS-5, DS-8                                                                                                  |
| <p>Registration</p><p><br><br></p>         | Unconditional Social Cash Transfer                                                                          | 4. The admin verifies the potential beneficiary is correct based on details provided by the potential beneficiary                                                                                                      | <p>Rules engine (5.1.1);</p><p>User interface and flow builder (5.1.2)</p>                                                    | DS-4;                                                                                                                         |
| <p>Registration</p><p><br><br></p>         | Unconditional Social Cash Transfer                                                                          | 5. During enrolment, further data can be collected by the admin                                                                                                                                                        | <p>Rules engine (5.1.1);</p><p>User interface and flow builder (5.1.2)</p>                                                    | DS-3                                                                                                                          |
| <p>Registration</p><p><br><br><br></p>     | Unconditional Social Cash Transfer                                                                          | 6. Optional: Admin issues a family program membership ID card, e.g. barcode                                                                                                                                            | <p>Rules engine (5.1.1);</p><p>User interface and flow builder (5.1.2)</p>                                                    | DS-8                                                                                                                          |
| <p>Registration</p><p><br><br></p>         | Unconditional Social Cash Transfer                                                                          | 7. Optional: Programme specific data is often entered into a separate Beneficiary Registry associated with a Beneficiary Operations Management System (BOMS)                                                           | <p>Rules engine (5.1.1);</p><p>User interface and flow builder (5.1.2)</p>                                                    | DS-5                                                                                                                          |
| Full process                               | UC-E-USCT-001: Eligibility Determination and Benefit Package(s) Design - Unconditional Social Cash Transfer | <p>User Interface;</p><p>Activate API</p>                                                                                                                                                                              | <p>Rules engine (5.1.1);</p><p>User interface and flow builder (5.1.2)</p><p>Control configurator (5.1.3);</p>                | DS-2; DS-3; DS-4; DS-5, DS-8                                                                                                  |

## 6.2 Development Platform (OPTIONAL)

Many registration applications leverage a no-code development platform. While not required, the no-code development platform is composed of:

* Rules engine ([6.2.1](5-functional-requirements.md#6.3.1-rules-engine-functional-requirements))
* User interface and flow builder ([6.2.2](5-functional-requirements.md#6.3.2-user-interface-and-flow-builder-functional-requirements))
* Controls configurator ([6.2.3](5-functional-requirements.md#6.3.3-control-configurators-functional-requirements))

It is used by authorized personnel, called “analysts”, entrusted by the entities in charge of the registrations to develop the corresponding online services.

Pre-requirements:

* The analyst is authenticated and authorized to use the no-code development platform.
* The analyst has a computer/smartphone with an internet connection.

Post-requirements:

* When the no-code development is finished, the analyst publishes the e-service, which becomes available to users (applicants and operators);
* Applicants can submit applications;
* Operators can process the applications.

### 6.2.1 Rules Engine Functional Requirements

The Rules Engine is a module where an analyst defines:

1. Who are the subjects of the registration.
2. For each subject, the result of the registration, e.g. a credential.
3. For each subject, what are the requirements for the registration:
   * Claims required;
   * Credentials required;
   * Payments/fees required.

The rules can be:

* Entered in the rule engine by an analyst, on the basis of the regulations;
* Provided by external rules providers (e.g. rules databases at the ministries level).

### 6.2.1.1 Creation of Services (REQUIRED)

An analyst (user) must be able to create, in the rule engine, one or more services, each service encompassing one or more registrations. A “Service” is a name given to a registration, or to a combination of registrations that can be undertaken simultaneously. To create a service, an analyst will:

* Give a name to the service;
* Link one or more registrations to the service.

### 6.2.1.2 Publish service to external instance (RECOMMENDED)

Each service can be published in the same or in a separate instance, together with the rule engine. The instance must be configured and interoperable with Registration Building Block service definitions.

### 6.2.1.3 Creation of one or more “Registrations” (REQUIRED)

An analyst can create one or more registrations. For each registration, the analyst defines in clear language and in the rules engine:

* The name of the registration;
* The entity in charge of the registration.

### 6.2.1.4 Definition of the subjects of a registration (REQUIRED)

For each registration, an analyst must be able to report/input in the rule engine, in clear language, rules defining who/what are the subjects of the registration.

To this end, the analyst can select one or various of the following options:

1. The registration is mandatory for all;
2. The registration is mandatory for specific subjects;
3. The registration is optional for all;
4. The registration is optional for specific subjects.

1 and 2 can’t be selected simultaneously; 3 and 4 can’t be selected simultaneously.

Specific subjects (in 2 and 4) can be defined through determinants or a combination of determinants. Determinants can be combined by “AND” and “OR” operators. Combinations can be grouped into “groups of determinants”. A group of determinants can be combined through “AND” and “OR” operators.

Examples:

* Registration is mandatory for the attribute “resident” (all residents must register).
* Registration is mandatory for attribute “resident” AND attribute “foreigner” (all residents who are foreigners must register).
* Registration is mandatory for {attribute “resident”} AND {attribute “foreigner” OR attribute “have children”} (all foreign residents must register; national residents who have children must register).

### 6.2.1.5 Definition of the results of a registration (REQUIRED)

An analyst must be able to report/input in the rule engine, in clear language, rules defining what are the results of registration. The result of a registration has a name (for example registration number, registration certificate, permit, license, etc.). To this name, the analyst must be able to associate a template/document (see RE-11). In some cases, some subjects of the registration will receive a different result. The analyst can define through determinants (or combination of determinants) the different categories of subjects and can link each category of subjects to a specific result.

Examples:

* Future truck drivers that apply for a driving license and pass the exam will receive a driving license for “large vehicles”, while car drivers will receive a driving license for “light vehicles” (attributes: “truck driver” or “car driver”).
* Enterprises with assets below US$5,000 will receive a “Cottage Industry Certificate”; enterprises with assets above US$5,000 will receive a “Business License” when applying for an activity license (attributes: “assets below US$5,000” and “assets above US$5,000”).

### 6.2.1.6 Requirements of a registration - Documents/Credentials (REQUIRED)

An analyst must be able to report/input in the rule engine, in clear language, rules defining what are the documents/credentials that must be provided.

* A document/credential can be defined by a name.
* One registration can have several required documents/credentials.
* A document/credential can be physical or digital.
* For each required document, the analyst can select one of the following options:
  * has to be brought to the front desk;
  * has to be uploaded;
  * has to be signed in front of an Operator.

The required documents can differ according to the categories of subjects. The analyst can define, through determinants (or combination of determinants) the different categories of subjects and link them to specific required documents.

Examples:

* Married applicants must provide a copy of their wedding certificate (attribute: “married”).
* Foreigners must provide a copy of their residence permit (attribute: “foreigner”).
* Applicants that can’t provide a copy of their birth certificate must provide a certified copy of their ID (attribute: “can’t provide a copy of the birth certificate”).

### 6.2.1.7 Requirements of a registration - Fees (REQUIRED)

An analyst must be able to report/input in the rule engine, in clear language, rules defining what are the fees of a registration. The fees of a registration have a name (i.e. State fee of MCTS program, license registration fee, etc.). To this name, the analyst must be able to associate an amount and a currency.

* Fee can be calculated or fixed;
* One registration may have multiple fees;
* All fees have an assigned currency. The system may allow multiple currencies;
* A fee can have a description.

When the fee is calculated, a formula builder will allow the analyst to build the formula, using values from any field in the service and numeric values, combined with the usual operators (+, -, \*, /). In some cases, some subjects of the registration will receive a different fee. The analyst can define through determinants (or combination of determinants) the different categories of subjects and can link each category of subjects to a specific fee.&#x20;

Examples:

1. Mothers with one child that apply to a registration to MCTS program will receive an identity card for 10 EUR, while mothers with two children or more will receive an identity card for 15 EUR (attributes: “one child” or “more than one child”).
2. Farmers with farming land area > 10 000 square meters that apply for registration of farmland will receive a registration certificate for 10 EUR, while farmers with land area <= 10 000 square meters will receive a registration result/credential certificate for 5 EUR.

### 6.2.1.8 Requirements of a registration - Data/Claims (REQUIRED)

An analyst must be able to report/input in the rule engine, in clear language, rules defining what is the data (claims) that must be provided. A piece of data is defined by:

* A name (e.g. date of birth, nationality, first name, last name, etc.);
* A type (text, number, date);
* mandatory/optional (See Control configurator element for more options).

As for the other requirements, some data can be required only for a specific category of subjects. The analyst can define, through determinants (or combination of determinants) the different categories of subjects and link them to specific required documents.&#x20;

Examples:

* Married applicants must provide the first name, last name, and date of birth of their spouse (attribute: “married”).
* Owners of farmland should provide the number and date of registration of their property; applicants who rent the farmland must provide the name and ID number of the owner (attribute: “own land”, “rent land”).

### 6.2.1.9 Possibility to combine various registrations in one service (REQUIRED)

In many cases, the process for the user/applicant contains multiple pre-and post-registration steps in order to achieve the final goal (e.g. applying for a healthcare program). For example, in order to register a mother and a newborn child to the Mother and Child support program, both of the subjects must be previously registered in the Civil/Population registry. Civil registry registration service could be a separate service, but it is much user-friendlier and less time-consuming for the applicant to merge the two registrations into one service that can be filled at the same time. This service type is called Single Window or integrated registrations service.

To facilitate the combination of various registrations in one service:

* Registration requirements (documents/credentials, results, fees) must be reusable inside the service. One registration may re-use another registration result credentials as input requirements.
* Overlapping requirements and/or results must be automatically eliminated.
* Fees of all registrations must be merged into one sum so that the applicant could see and pay the total fees. Fee information is stored and segregated per registration.

In one registration the document/credential may be issued as a result and in another registration, the same document/credential may be required as an uploadable requirement. The system must eliminate the overlapping results and/or requirements if the requirements overlap inside the service.

Examples:

* One service has two registrations and both of them require a passport to be uploaded. When an applicant chooses to apply for both registrations then the system must ask for the passport upload only once.
* One service has two registrations. The first registration’s result (credential) is the second registration’s requirement. The system must not ask for this requirement from the applicant as the result will be generated during the process. However, if the user chooses to register for only the second registration then the requirement must be asked.

### 6.2.1.10 Creation and functioning of determinants (REQUIRED)

The analyst can define through determinants (or combination of determinants) the different categories of subjects and can link each category of subjects to a specific element of a service. An element of a service can be a field, block, button, message, processing role, result, requirement, etc.

Being the simplest case, is this claim data field on the screen relevant for all subjects or only for a specific category of subjects? If all then no determinant is needed as all users will see and use it. If a specific (e.g. “applicant is married”) category and this category must fill in additional information (e.g. “Spouse name”), then a determinant must be added to control the field visibility for this category of subjects. If the user is married, then the determinant is true and the “Spouse name” field is visible; if the determinant evaluates to false, then the spouse name field is not visible for the subject.

The analyst must be able to:

* Create and manage determinants (CRUD);
* Search the existing determinant;
* Reuse determinants inside the same service;
* Use formulas, calculate math functions on the form with user input value and use the calculated value in the determinant. E.g. math functions (SUM, MIN, MAX, AVG, COUNT, MEDIAN, CEILING, FLOOR, ROUND, CONCAT, CONCAT\_WS, LEN, REPLACE, UPPER\_CASE, LOWER\_CASE).

Apply determinants to:

* Any element of a service (registration, claims/data fields, screens, roles, templates, etc.);
* Any element of a registration (results/credentials, requirements/documents).

Determinants can be combined by “AND” and “OR” operators. Combinations can be grouped into “groups of determinants”. A group of determinants can be combined through “AND” and “OR” operators.

### 6.2.1.11 Definition of a template associated with the result of a registration (REQUIRED)

An analyst must be able to create an electronic template (a screen with images, text, fields, QR code) and link it to the result of a registration.

A template can be:

* Filled with values coming from fields in the service or from external databases;
* Printed as a pdf file;
* Generated and uploaded to the system as a PDF file.

On each template, an analyst can create data fields that must be filled by the system and place them on the screen of the template. Fields will have the following characteristics:

* A name (e.g. date of birth, nationality, first name, last name, select option, submit an application, etc.);
* A type (text, number, date, selector, catalog, button, etc.);
* Source of information/capture data from. Function to capture data from application screens upon creation of PDF.

In addition to fields, the analyst can create information texts and add images, and QR codes on the template screen. QR code must be generated with the ISO/IEC 18004:2015 standard.

Determinants and groups of determinants created in the rule engine can be assigned to each field on a template. A field will be displayed/printed only if the determinants assigned to it are true. Fields can be grouped into containers (blocks, tables, etc.). A container is defined by a name. Fields can be moved to and on the screen by “drag-and-drop, inside/outside of and between containers.

## 6.2.2 User Interface and Flow Builder Functional Requirements

The purpose of the **Screen and flow builder** is to define and display the screens, and the fields on each screen, in the application file and processing parts, and to pre-fill or capture the data entered by the users of these screens in:

* The **application file**, where applicants provide claims (fill out a form), credentials (upload files), and fees (pay online or upload a payment receipt) and send his/her request to one or more entities in charge of the registration.
* The **processing part**, where one or more human or automated (“robot” or “BOT”) operators can review the information (i.e. the data and documents) provided by the applicant, approve or reject an application, send claims to a registry, and issue a credential.

### 6.2.2.1 Application file and layout - Creation of screens and their sequence (REQUIRED)

An analyst must be able to create one or more screens that will allow to show information to the applicant and display fields that the applicant will have to fill in to provide the requirements of the registration. The analyst can define the sequence/order in which the screens will be displayed to the applicant. The analyst can define a one-screen e-service or create a multi-page wizard e-service supported by Breadcrumb. The number of screens in an e-service is not limited.By default, the system provides a template structure e-service screen skeleton. To this end, the analyst will be able to activate or inactivate, through a toggle, the following screens:

* **Guide** screen: this is a screen where the analyst can create text for the information of the applicants (guidelines) or ask questions (through fields) to determine what category of subjects the applicant belongs to (i.e. if the applicant is subject to the registration and what data, documents and fees are required).
* **Applicant form** screen: this is where the applicant will provide the required data.
* **Documents upload** screen: where the applicant will upload scanned copies of the required documents/credentials.
* **Payment** screen: where the applicant will see a list of fees that must be paid and can be redirected to an external online payment service.
* **Send** screen: where the applicant can be reminded of any information missing in his/her application (if some fields have not been filled or documents are not uploaded) and will be requested to confirm his/her will to apply for registration.

The above screens, when activated, will be displayed, in the predefined order (guide, applicant form, document upload, payment, send). The flow of screens can be visualized by the analyst.

### 6.2.2.2 Application file - Creation of fields on each screen (REQUIRED)

On each screen, an analyst can create data fields/claims that must be filled by the applicant and place them on the screen. Fields will have the following characteristics:

* A name (e.g. date of birth, nationality, first name, last name, select option, submit application, etc.)
* A type (text, number, date, selector, catalogue, button, radio, etc.)
* Properties:
  * Multiple values(array type).
  * Catalog reusable source. Catalogs are reusable across all services in the same instance.
  * Field/Button reusable action (e.g. activate data bot AND save form AND generate PDF AND upload PDF to application file data).
* The name of the registration(s) the field is associated with (i.e. the corresponding data is a requirement for this registration).
* Mandatory or optional.

Determinants and groups of determinants created in the rule engine can be assigned to each field. A field will be displayed only if the determinants assigned to it are true. Actions and groups of actions created in the service can be assigned to each field or button. For example, an Action can pull data to the form, submit data to external API endpoints, create PDF documents from templates, or help users to move between the forms. A field will activate action automatically upon form load once. Actions can be controlled with determinants. Every time a field is created it is recorded in the “data” part of the rules engine. Fields can be grouped into containers (blocks). A container is defined by a name. Fields can be moved to and on the screen by “drag-and-drop, inside/outside of and between containers. In addition to fields, the analyst can create information texts and images that (contrary to fields) do not expect any input from the applicant.

### 6.2.2.3 Processing part - Creation of screens/roles (REQUIRED)

The processing part relies on the flow builder because roles are part of the process flow. An analyst can create one or more screens allowing human operators to process the application files, i.e. to review the information sent by the applicant, to add data or documents to the application file (e.g. a number, a date, a credential, etc.), to approve an application, to reject it or to send it back to the applicant when more information is required. We call “processing role” (or simply “role”) each successive processing an application file will go through until final approval is given and the registration is completed. Usually, different roles are ensured by different government entities. It happens that successive roles are ensured by different units in the same entity.

Example flow:

1. Unit 1 reviews the application file, and checks that all data and documents provided seem true and correct;
2. Unit 2 approves the application;
3. Unit 3 issues and signs the credential and sends it to the applicant.

For each role, two screens are necessary:

* A first screen (list screen) where the operator will be able to,
  * see a list of application files, filtered by status (pending, validated, rejected, sent back to the applicant);
  * select a file for processing (if pending) or for consultation.
* A second screen (processing screen) where the operator will be able to,
  * review the selected application file (data and documents provided by the applicant, fees paid or not);
  * add data or documents to the file;
  * Make a decision (approve the file, reject it, or send it back to the applicant).

Therefore, an analyst must be able to create one or more roles, each role coming automatically with one list user interface and one processing screen user interface. Each role will be defined with the following elements:

* Name of the role;
* Name of the registration the role is associated with;
* Entity in charge of the role;
* Position in the process flow.

Determinants and groups of determinants created in the rule engine can be assigned to each role. A role will be displayed/activated only if the determinants assigned to it are true. If Role determinants evaluate to false, then the application file passes the processing role without stopping.

### 6.2.2.4 Processing part - Ordering of screens/roles in Flow Builder (REQUIRED)

An analyst will be able to define, for each role, a list of possible statuses, by selecting which of the following statuses are possible for the role:

* **Pending** (the file is waiting to be processed by the role).
* **Approved** (the file successfully passed the role).
* **Rejected** (the application is denied, the file is closed).
* **Send back to the applicant for correction** (the operator sends the file back to the applicant and requests that some information be corrected or added).

For each activated status, the analyst will be able to indicate where the application file will be sent in the processing flow:

* To another processing role;
* To the applicant role (for consultation or payment);
* To end (the application file is closed/ end of processing).

Therefore, the roles/screens in the processing part will come in an order specified by the analyst and this functionality is called Flow Builder. The analyst must be able to visualize the flow of roles/screens.

### 6.2.2.5 Processing part - creation of fields on processing screens (REQUIRED)

On each screen, an analyst can create fields that must be filled by the role operator and place them on the screen. Fields will have the following characteristics:

* A name (e.g. registration number, date of registration, type of registration, validate application, etc.);
* A type (text, number, date, selector, catalogue, button, etc.);
* The name of the registration(s) the field is associated with (i.e. the corresponding data is a requirement for this registration);
* Mandatory or optional.

Every time a field is created it is recorded in the “data” part of the rules engine. Fields can be grouped into blocks, columns, field sets, and other containers (tables). A container is defined by a name. Fields can be moved on the screen by “drag-and-drop, inside/outside of and between Blocks. In addition to fields, the analyst can create information texts and images that, contrary to fields, do not expect any input from the applicant. Only human roles have the option to build processing screens. Determinants and groups of determinants created in the rule engine can be assigned to each field. A field will be displayed only if the determinants assigned to it are true.

### 6.2.2.6 An analyst must be able to add QR-code/barcode scanning function to the service screen (REQUIRED)

An Analyst can add a form field element (e.g. button) to a screen and configure an action to trigger the capture of data from a QR code.

Expected result- Analyst will build a service that has a button on the screen and a field on the screen to store the captured data. An applicant/user can trigger the “Read QR code” button on the screen of a service that opens the mobile phone’s (or another device's) camera, reads the QR code and captures the data from the QR code to a field on the screen. Example data extracted from the QR-code is “MCTS123”.

QR code must be generated with the ISO/IEC 18004:2015 standard.

### 6.2.2.7 Actions (REQUIRED)

The analyst must be able to configure the triggering of actions when a user or system initiates an event on a screen of a service. A triggering event can be a button click, a form loading, a form element click, data entered into a field, or a row added to a table. Before actions can be triggered the API request must be defined in action attributes. The action attribute specifies one or more of the following data mappings (BOT):

* where to send (request) the form-data when an event is triggered and where to store the received data (response). For example, the user will enter their first name and last name into a form and after entering the last information the system will initiate a data BOT action to search data from the pre-defined external data source (via the Information Mediator Building Block) and store the answer(response) phone number to the correct data field;
* where to pull data (from an external registry API) and where to show the answer in the user interface fields;
* where to send user (screen flow action). For example, the button click will take a user to the next screen. The next screen can be an internal screen or an external URL;
* validate captured data integrity (required fields must be filled);
* save entered information, exit service form;
* send message (screen message, sms, e-mail, API message etc.).

Some actions can be activated only for a specific category of subjects. The analyst can define, through determinants (or combination of determinants) the different categories of subjects and link them to specific actions.

Examples:

* User enters a person's identifier (tax number) and a button click pulls first name, last name and date of birth from an external API on the screen.
* Married applicants must provide the first name, last name and date of birth for their spouse (attribute: “married”) and when data is entered, then the application screen will validate the entered person's name from the Population Registry and return validation answers on the screen (Success, Fail). Actions are only triggered if the user has entered the data AND “person is married” (determinant).
* User clicks the “Validate and send” button on the screen, then the system will activate three actions: Save user data action, validate user data action, send user data action.
* User clicks the “Print” button and the system triggers “Print to PDF” data action where a template is used as a base for creating a new PDF document. System will enable the user to see, print or download the generated PDF.
* User submits application and system will trigger BOT Role in the flow and it, in turn, activates the data action bot (e.g. POST/GET message to external API).

### 6.2.2.8 Formulas (REQUIRED)

Analysts must be able to add formula calculations to and between the fields. The Formulas can be added to numeric fields, int, decimal, and date. Calculated values allow calculating values based on the values in other fields of the form. E.g. If the registration subject has more than 2 children, then multiply the social payment times the number of kids.

### 6.2.2.9 Preview (REQUIRED)

Analyst must be able to preview service User Interfaces before publishing the service to the applicants.

The following preview functions must be available:

1. Preview of user interfaces one by one;
2. Preview of full service;
3. Preview of full service in test instance with the functionality to test the full service before publishing to live instance.&#x20;

### 6.2.2.10 Import/Export of service descriptions (REQUIRED)

Analyst must be able to import/export full-service description. Service descriptions must contain at least:

1. User interfaces, screens, fields;
2. Process flow;
3. Service settings.

As a result, the service can be imported with minimal effort from another instance and published for users/applicants to use. Instance-specific configurations must be done in each instance and are not target to import or export.

### 6.2.2.11 Text-to-speech feature (RECOMMENDED)

User can activate the text-to-speech feature in the user information capturing forms to read out the screen information. The goal is to help illiterate users with understanding the text on the screen. The feature can read captured information and other e-service information visible on the e-service screens.

### 6.2.2.12 Voice guide feature (RECOMMENDED)

The feature enables to capture information from voice answers and ask confirmation if captured information is correct. Voice guide enable the user to follow the e-service wizard and submit applications.

### 6.2.3 Control Configurator’s Functional Requirements

**Control configurator**, to check if the claims (claims and credentials of registers) are complete and true. This is done through:

* Define if the field is mandatory(required) or optional;
* Add input masks (e.g. only numbers, text, alphanumeric, etc.);
* Checks between fields in the screens, web services with external databases, or human revision (by an operator of the entity in charge of the registration).

Pre-requirements:

* The user is authenticated and authorized to use this administrative Control Configurator functionality.

### 6.2.3.1 Controlling the data capturing- Form field value validation (REQUIRED)

An Analyst must be able to configure field-specific validation options e.g.:

* required;
* number, bigger, smaller, min, max;
* text, regular expression, contains, mask;
* date, earlier, later, today, older than age (The age of the applicant must be >=18);
* File upload size max limit;
* File upload type allowed.

### 6.2.3.2 Controlling the data capturing- Form field value validation from external API (REQUIRED)

An analyst must be able to configure screen field(s) validation from an external API data source.

Examples:

* Applicant name and ID must match with data in the Civil Registry record;
* Subject (first name, last name, Dya of Birth) must not have been entered into the MCTS registry.

### 6.2.3.3 Controlling the data capturing- data integrity validation (REQUIRED)

The system must verify that all claims/fields are correctly captured and all required documents uploaded.

The system must generate on-screen meaningful error messages if any requirements are not fulfilled.

The system should not let the user submit an application file if screen data capturing is incomplete.
