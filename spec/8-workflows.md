# 8 Workflows

This workflow section provides a detailed view of how this building block will interact with other building blocks to support common use cases. It lists workflows that this building block must support. Other workflows may be implemented in addition to those listed.

In this section two main workflows are described:

* Creating a registration service
* Using a registration service

For each workflow interaction, a sub-section is added.

## 8.1 Workflow- Creating a Registration Service (Admin Function)

### 8.1.1 Description

Analyst/administrator as the main actor in this workflow will create a new e-service by filling the required registration requirements, create screens for the user and publish the service on the web ready to be used by internet users.

As a pre-condition the user/analyst has authentication credentials and authorization to the service builder- Rules engine. If the service needs to read or write data from external sources (Information Mediator) that requires authorization then this is already authorized for the Registration BB. Registration BB is connected to Information Mediator.

As a post-condition, the e-Service has beglossaryen published on the internet for users to use immediately. The optimal time for an Analyst to build the e-service of a simple registration service is 2h.

### 8.1.2 User Journey <a href="#docs-internal-guid-5a2b9287-7fff-e40c-0d61-101056e94a79" id="docs-internal-guid-5a2b9287-7fff-e40c-0d61-101056e94a79"></a>

User journey is the step by step journey that a user takes to reach their goal. This journey consists of a number of website pages/screens and decision points that carry the user from one step to another. The user journey is used to map out the current journey a typical user might take to reach their goal

![Illustration 6- user journey of creating a registration service. See editable file here.](<.gitbook/assets/image11 (1).png>)

### 8.1.3 Interaction with Other Building Blocks <a href="#docs-internal-guid-67b89c8a-7fff-6917-6030-b4cb08422e15" id="docs-internal-guid-67b89c8a-7fff-6917-6030-b4cb08422e15"></a>

This workflow requires interaction with following building blocks:

1. Authentication and authorization (Security BB)
2. User registration (Security BB)
3. Information Mediator (IM) BB
4. Payment BB
5. Setup for multiple Registration BB-s

For each interaction, the following information is provided:

* Name
* Sequence diagram
* Notes
* Data structures (link to data resources defined above)

**Interaction 1: Authentication and Authorization (Security BB)**

**Name**: Authentication - Existing user authentication (Security BB)

![Illustration 7 - Authentication and authorization. See editable diagram.](.gitbook/assets/image8.png)

**Notes:**\
Pre-requirements: user has passed the provisioning of user credentials and this can authenticate/log in to Govstack (sandbox) system. User roles are also added by Security (IAM) system when token is sent to the Building Block. Registration BB in this case is operating as Building Block.\
See full description of the user authentication in Security BB [documentation](https://govstack.gitbook.io/specification/building-blocks/security-requirements/5-cross-cutting-requirements#docs-internal-guid-95b38c92-7fff-abfc-b395-b64d56ed6c74).

Data structures:

| **Name**                                | **Required Data**                                                                                                 | **Notes**                                                                                                                                                                                                                   |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <p><br>Existing user authentication</p> | <p><br>Credentials: username/e-mail/ UID,</p><p>Password,</p><p>URL of client system.</p>                         | <p><br>User credentials vary depending on the country. Some countries may have additional user credentials, for example User ID number.<br><br></p><p>Precondition- user is registered in the Govstack sandbox.<br><br></p> |
| <p><br>Authorization</p>                | <p><br>Roles</p><p>Example: “Service A”; “Registration Role A”; “Institution A”; “Part A”; “Part B”; “SADMIN”</p> | <p><br>IAM integration.<br><br></p><p>Precondition- user is registered in the Govstack sandbox (IAM).</p>                                                                                                                   |

**Interaction 2: User Registration (Security BB)**

**Name**: User first time registration (Security BB)

**Sequence Diagram via Self-Registration**:

![Illustration 8- Self registration See editable diagram.](<.gitbook/assets/image5 (1).png>)

**Notes**:

Pre-requirements: user does not have user credentials to authenticate/log in to Govstack (sandbox) system.\
Registration BB in this case is operating as Building Block UI.\
See full description of the User registration in [Security BB](../security-requirements/) documentation.

**Sequence Diagram for User Self Registration via Foundational ID:**

![Illustration 9- Self registration via foundational ID. See an editable diagram.](.gitbook/assets/image12.png)

**Notes**:\
Pre-requirements: user does not have user credentials to authenticate/log in to Govstack (sandbox) system. Registration BB in this case is operating as Building Block UI. See full description of the User registration in Security BB [documentation](https://govstack.gitbook.io/specification/building-blocks/security-requirements/5-cross-cutting-requirements#docs-internal-guid-95b38c92-7fff-abfc-b395-b64d56ed6c74).

**Interaction 3: Information Mediator (IM) BB**

**Name**: Request API descriptions (Information Mediator BB)

Sequence diagram:

![Illustration 10- IM API description. See Websequencediagrams for an editable diagram.](<.gitbook/assets/image10 (1).png>)

**Data structures:**

| **Name**                                                 | **Required Data**                                                                                  | **Notes**                                                                                                                                                                                                                                                                          |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <p><br>Get list of registered institutions/databases</p> | <p><br>Return: List of data providers (institution name, system name, ID).</p>                     | <p><br>The returned list (institution ID, system name) will be given as an input to the next call to see the list of APIs.<br><br></p>                                                                                                                                             |
| <p><br>Request API descriptions</p>                      | <p><br>Datasource name, ID, URL of the service and url for the service descriptions (swagger).</p> | <p><br>Pre requirements:</p><p>*Subscription for Registration BB to use the IM system is done.</p><p>*Before the Registration BB can use API information for screen populating with data the system must import API service descriptions.<br><br></p>                              |
| <p><br>Get service descriptions</p>                      | <p><br>Input: URL of the OAPI service.</p><p>Output: OAPI descriptions</p>                         | <p><br>It works like Swagger. This endpoint may be external.</p><p><br></p><p>Example API services to integrate to Registration BB screens:</p><ol><li>Registry BB - Register of Mother and Child Program</li><li>Payment BB API to read received payments data.<br><br></li></ol> |

**Interaction 4: Payment BB**

**Name**: Get list of payment options (Payment BB)

**Sequence diagram:**

![Illustration 11- Request payment options. See https://app.diagrams.net/  for an editable diagram.](<.gitbook/assets/image1 (1) (1) (1).png>)

**Data structures:**

| **Name**                               | **Required Data**                                                                       | **Notes**                                                                                                                                               |
| -------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <p><br>Get list of payment options</p> | <p><br>Payment API descriptions,</p><p>List of payment options, details, data, url.</p> | <p><br>Before the Registration BB can use the Payment BB information for screen populating the system must import API service descriptions.<br><br></p> |

**Interaction 5: Setup for Multiple Registration BBs**

**Name**: Setup for multiple Registration BBs

**Description :**\
The Registration BB can be set up as a standalone BB facilitating multiple institutions and services in one system instance (See illustration 1 below ).\
Setup in one shared instance is required when one single window service is built together with multiple institutions (multiple registrations inside one service). This enables sharing of resources such as proceflow, screens, data, user rights, infrastructure, maintenance personnel etc.

![Illustration 14 - Domain specific  setup diagram for multiple Registration BB-s in one ecosystem.
See Diagrams.net for an editable diagram.](.gitbook/assets/image9.png)

In other cases the Registration BBs can be installed in different instances (domain specific instances- see illustration 2 below) and in this case the BBs are not sharing resources and are not communicating with the other Registration BB. In these standalone instances the BBs are communicating with Information Mediator BB and other BBs as any other BBs.

![Illustration 15 - Domain specific  setup diagram for multiple Registration BBs in one ecosystem.
See Diagrams.net for an editable diagram.](.gitbook/assets/image13.png)

## 8.2 Workflow- Using a Registration Service <a href="#docs-internal-guid-6bac7ec4-7fff-2f07-f48f-168981104eec" id="docs-internal-guid-6bac7ec4-7fff-2f07-f48f-168981104eec"></a>

### 8.2.1 Description <a href="#docs-internal-guid-461ecfeb-7fff-864b-45ae-1579ead4d1c0" id="docs-internal-guid-461ecfeb-7fff-864b-45ae-1579ead4d1c0"></a>

Citizen/ applicant, as the main actor in the process will open a web URL address and authenticate. Once authenticated, the applicant opens an e-service and fills required data fields /claims on the first screen. System/Rule engine will then validate if the user is applicable for any registrations and if so will open a list of mandatory or optional registrations for the user to select. Once selected the system will fill the form with required data fields relevant for the applicant to fill. In addition the system will show which documents are relevant for the applicant to upload and how much fees to pay. An applicant will then fill data, upload documents, select a payment method and make the payment (if required). If designed so the Control Configurator component will validate captured data against external API data and in case validation fails issue warnings to the applicant. After payment, the applicant can submit the application file for registration and processing. System validates if all required fields are correctly filled upon the submission.

Back office system registers all applications submitted. If configured so, the process flow may have bot(s) and human(s) in the flow. Bot roles process applications by validating information against external API information. When processed the BOT role will pass the processing task to the next role.

Back office operator as the main actor in the second part of the process receives a task notification message and authenticates to the web system. The system shows a list of applications assigned for the operator to process. Operator will then open the application and verify the application content and make a decision (approve, reject, send back for correction). If an application has discrepancies then the operator will mark the errors and/or explain the reasons for rejections. When the application file is positively processed by the back office operators, then the applicant will receive the credential/result of the application. If the back office processing flow has multiple roles then the approval by the first processing role operator will take the application processing task to the next role.

**Preconditions**:\
As a pre-condition, the web system is accessible from the internet and service is published, the user/applicant has user credentials for authentication. No authorization is needed for applicants if the service is usable by all users.\
The user/operator has authentication credentials and authorization to the web portal/back office system and to a service, if not open to all users. If a service needs to read or write data from an external source (IM-API) that requires authorization then this is already authorized for the Registration BB.\
As a post condition, the applicant was able to fill a registration form and submit an application. As an operator, the user was able to see the pending applications and process the applications.

**Sequence Diagram:**

![Illustration 12 - The process of filing an application file. See editable version here](<.gitbook/assets/image15 (1).png>)

### **8**.2.2 Interaction with other Building Blocks <a href="#docs-internal-guid-c743f131-7fff-938e-2c36-011d9f1ab41a" id="docs-internal-guid-c743f131-7fff-938e-2c36-011d9f1ab41a"></a>

This workflow requires interaction with following building blocks:

* Authentication and authorization (Security BB)- see “Creating a registration service”
* Information Mediator (IM) BB
* Payment BB

For each interaction, the following information is provided:

* Name
* Sequence diagram
* Data structures (link to data resources defined above)
* Notes

**Interaction 1: Voucher Pre-Activation (Payment BB)**

**Name**: Voucher pre-activation (Payment BB)

Use case: e-service user initiates a registration service to issue a payment voucher for the subject/beneficiary.\
**Pre-conditions**: Subject is identified and information is verified. User has credentials to authenticate in the Registration BB web interface. User has authorization to use the Voucher activation registration e-service. User has pre-activated vouchers printed on the paper. All communication is securely done via Information Mediator BB.\
**Post-conditions**: A subject/ beneficiary will receive activated payment voucher and the voucher is activated in the respective external registry.

**Sequence diagram**:

![Illustration 13 - Voucher issuing diagram. See https://app.diagrams.net/  for an editable diagram.](<.gitbook/assets/image14 (2).png>)

**Data structures**:

| **Name**           | **Required Data** | **Notes**                                                                                                                 |
| ------------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Voucher activation | Voucher ID        | <p>See more in <a href="https://govstack.gitbook.io/specification/building-blocks/payments">Payment BB</a></p><p><br></p> |
| Response           | Status            | The response is stored in Registration BB.                                                                                |
