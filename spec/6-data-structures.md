---
description: >-
  This section provides information on the core data structures/data models that
  are used by this Building Block.
---

# 7 Data Structures

The following standards are applicable to data structures in the Registration Building Block in addition to the general Architecture Requirements:

* QR code must be generated with the ISO/IEC 18004:2015 standard

## 7.1 Resource Model

The resource model provides a basic description of each data object that is used by the Building Block. It also shows the relationship between the data objects.

![Illustration 4 - Resource model.](<.gitbook/assets/image16 (1).png>)

## &#x20;<a href="#docs-internal-guid-719783cd-7fff-5c75-35f4-db5323cd903f" id="docs-internal-guid-719783cd-7fff-5c75-35f4-db5323cd903f"></a>

## 7.2 Data Structures <a href="#docs-internal-guid-719783cd-7fff-5c75-35f4-db5323cd903f" id="docs-internal-guid-719783cd-7fff-5c75-35f4-db5323cd903f"></a>

The data elements provide detail for the resource model defined above. This section will list the core/required fields for each resource. Note that the data elements can be extended for a particular use case, but they must always contain at least the fields defined here.

### 7.2.1 Registration (REQUIRED)

**Description:** Process through which an entity gets claims recorded in a registry and a credential proving the registration, in exchange for providing some requirements.

**Fields:**

<table data-header-hidden><thead><tr><th></th><th></th><th></th><th></th><th data-hidden></th><th data-hidden></th><th data-hidden></th></tr></thead><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td><td><strong>Notes</strong></td><td><strong>Foreign Key</strong></td><td><strong>Constraints</strong></td><td><strong>Required</strong></td></tr><tr><td>id</td><td>varchar</td><td>identity of the registration</td><td></td><td></td><td></td><td></td></tr><tr><td>name</td><td>varchar</td><td>nhe name of the registration</td><td></td><td> </td><td>PK</td><td>Y</td></tr><tr><td>entity</td><td>varchar</td><td>the entity in charge of the registration.</td><td></td><td></td><td></td><td></td></tr><tr><td>determinants</td><td>object</td><td>determines if applicant is eligible for the registration</td><td></td><td></td><td></td><td></td></tr><tr><td>Results</td><td>object</td><td>results that this registration is creating/issuing</td><td></td><td></td><td></td><td></td></tr><tr><td>Requirements</td><td>object</td><td>requirements that this registration is requesting</td><td></td><td></td><td></td><td></td></tr><tr><td>Fees</td><td>object</td><td>fees that apply to receive the registraiton</td><td></td><td></td><td></td><td></td></tr><tr><td>properties</td><td>object</td><td>additional properties</td><td></td><td></td><td></td><td></td></tr></tbody></table>

### 7.2.2 Service (REQUIRED)

**Description:** Name given to a registration, or to a combination of registrations which can be undertaken simultaneously, by the entity(ies) in charge of organizing the registration process.

**Fields:**

<table data-header-hidden><thead><tr><th></th><th></th><th></th><th></th><th data-hidden></th><th data-hidden></th><th data-hidden></th></tr></thead><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td><td><strong>Notes</strong></td><td><strong>Foreign Key</strong></td><td><strong>Constraints</strong></td><td><strong>Required</strong></td></tr><tr><td>serviceId</td><td>varchar</td><td>service identifier</td><td></td><td> </td><td>PK</td><td>Y</td></tr><tr><td>name</td><td>varchar</td><td>name of a service</td><td></td><td></td><td></td><td></td></tr><tr><td>version</td><td>varchar</td><td>version of the service</td><td></td><td></td><td></td><td></td></tr><tr><td>type</td><td>varchar</td><td>used for grouping</td><td></td><td></td><td></td><td></td></tr><tr><td>isExecutable</td><td>boolean</td><td>defines if service is active</td><td></td><td></td><td></td><td></td></tr><tr><td>isClosed</td><td>boolean</td><td>defines if service is closed </td><td></td><td></td><td></td><td></td></tr><tr><td>description</td><td>varchar</td><td>additional information about the service </td><td></td><td></td><td></td><td></td></tr><tr><td>serviceBody</td><td>object</td><td>additional information about the service</td><td></td><td></td><td></td><td></td></tr></tbody></table>

### 7.2.3 Screen/form (REQUIRED)

**Description:** A service is composed of one or several screens defined in the Screen Builder by the analyst.

**Fields:**

<table data-header-hidden><thead><tr><th></th><th></th><th></th><th></th><th data-hidden></th><th data-hidden></th><th data-hidden></th></tr></thead><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td><td><strong>Notes</strong></td><td><strong>Foreign Key</strong></td><td><strong>Constraints</strong></td><td><strong>Required</strong></td></tr><tr><td>eFormId</td><td>varchar</td><td>form identifier</td><td></td><td> </td><td>PK</td><td>Y</td></tr><tr><td>name</td><td>varchar</td><td>name of the form</td><td></td><td></td><td></td><td></td></tr><tr><td>description</td><td>varchar</td><td>descriptions of the form</td><td></td><td></td><td></td><td></td></tr><tr><td>version</td><td>varchar</td><td>schema version number</td><td></td><td></td><td></td><td></td></tr><tr><td>latest</td><td>boolean</td><td>true if latest version</td><td></td><td></td><td></td><td></td></tr><tr><td>schema</td><td>object</td><td>schema of the form</td><td></td><td></td><td></td><td></td></tr></tbody></table>

### 7.2.4 Role screen/form (REQUIRED)

**Description:** One or several screens are defined in the Screen Builder. Screen(s) where a human operator will undertake actions to process an applicant file, usually enter data (e.g. registration number, or registration certificate) and press buttons (approve, send back for correction, etc.).

**Fields:**

<table data-header-hidden><thead><tr><th></th><th></th><th></th><th></th><th data-hidden></th><th data-hidden></th><th data-hidden></th></tr></thead><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td><td><strong>Notes</strong></td><td><strong>Foreign Key</strong></td><td><strong>Constraints</strong></td><td><strong>Required</strong></td></tr><tr><td>eFormId</td><td>varchar</td><td>form identifier</td><td></td><td> </td><td>PK</td><td>Y</td></tr><tr><td>name</td><td>varchar</td><td>name of the form</td><td></td><td></td><td></td><td></td></tr><tr><td>description</td><td>varchar</td><td>descriptions of the form</td><td></td><td></td><td></td><td></td></tr><tr><td>version</td><td>varchar</td><td>schema version number</td><td></td><td></td><td></td><td></td></tr><tr><td>latest</td><td>boolean</td><td>true if latest version</td><td></td><td></td><td></td><td></td></tr><tr><td>schema</td><td>object</td><td>schema of the form</td><td></td><td></td><td></td><td></td></tr></tbody></table>

### 7.2.5 Workflow (RECOMMENDED)

**Description:** A workflow provides a visual representation of a business process. Workflow Engine executes processes that are defined in [Business Process Model and Notation (BPMN)](https://camunda.com/bpmn/), the global standard for process modelling. With BPMN, the analyst can automate most complex business processes using an easy-to-adopt visual modelling language.

**Fields:**

<table data-header-hidden><thead><tr><th></th><th></th><th></th><th></th><th data-hidden></th><th data-hidden></th><th data-hidden></th></tr></thead><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td><td><strong>Notes</strong></td><td><strong>Foreign Key</strong></td><td><strong>Constraints</strong></td><td><strong>Required</strong></td></tr><tr><td>taskId</td><td>varchar</td><td>task identifier</td><td>Tasks are processed by operator role.</td><td> </td><td>PK</td><td>Y</td></tr><tr><td>mainTaskId</td><td>varchar</td><td>main task identifier</td><td>groups all role tasks into group (parallel and in sequence)</td><td></td><td></td><td></td></tr><tr><td>name</td><td>varchar</td><td>name of the task</td><td></td><td></td><td></td><td></td></tr><tr><td>assigneeId</td><td>varchar</td><td>user identifier who has been assigened to process the task</td><td>may be empty</td><td></td><td></td><td></td></tr><tr><td>roleId</td><td>varchar</td><td>role name that is in charge of the processing</td><td>We call “processing role” (or simply “role”) each successive processing an application file will go through until final approval is given and the registration is completed.</td><td></td><td></td><td></td></tr><tr><td>created</td><td>datetime</td><td>time of creation</td><td></td><td></td><td></td><td></td></tr><tr><td>description</td><td>varchar</td><td>role description</td><td></td><td></td><td></td><td></td></tr><tr><td>serviceId</td><td>varchar</td><td>service identifier where this role belongs to</td><td></td><td></td><td></td><td></td></tr><tr><td>fileId</td><td>varchar</td><td>file identifier that this task is linked to</td><td></td><td></td><td></td><td></td></tr><tr><td>eFormId</td><td>varchar</td><td>reference to a form that this task role must process</td><td></td><td></td><td></td><td></td></tr><tr><td>formVariables</td><td>object</td><td>additional properties</td><td></td><td></td><td></td><td></td></tr><tr><td>status</td><td>object</td><td>task status code</td><td></td><td></td><td></td><td></td></tr><tr><td>data</td><td>object</td><td>data of the task</td><td></td><td></td><td></td><td></td></tr></tbody></table>

### 7.2.6 Role (REQUIRED)

**Description:** Human or bot actor in the workflow who must process the application file in the order set in the workflow.

A role is defined by 4 properties: Name of the role; Who is in charge of the role- Institution entity; Type: Action that will take place in the context of the role, either human or BOT; Status decision options of the application file in relation to the role (0=pending, 1=passed successfully, 2=send back for correction, 3=rejected).

**Fields:**

<table data-header-hidden><thead><tr><th></th><th></th><th></th><th></th><th data-hidden></th><th data-hidden></th><th data-hidden></th></tr></thead><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td><td><strong>Notes</strong></td><td><strong>Foreign Key</strong></td><td><strong>Constraints</strong></td><td><strong>Required</strong></td></tr><tr><td>id</td><td>varchar</td><td>role identifier</td><td></td><td> </td><td>PK</td><td>Y</td></tr><tr><td>name</td><td>varchar</td><td>role name</td><td>e.g. verifier, registrar</td><td></td><td></td><td></td></tr><tr><td>registration</td><td>varchar</td><td>registration identifier that this role is serving</td><td></td><td></td><td></td><td></td></tr><tr><td>entity</td><td>varchar</td><td>name of the entity-institution in charge of this role</td><td>Operators are linked to Institutions (or sub-units) and roles, thus can only see the tasks relevant for their role and Institution.</td><td></td><td></td><td></td></tr><tr><td>position</td><td>object</td><td>position in the workflow </td><td></td><td></td><td></td><td></td></tr><tr><td>determinant</td><td>object</td><td>defines if the task is applicable for the role</td><td></td><td></td><td></td><td></td></tr></tbody></table>

### 7.2.7 Institution/entity (REQUIRED)

**Description:** Institution in charge of Registration and/or Role.

**Fields:**

<table data-header-hidden><thead><tr><th></th><th></th><th></th><th></th><th data-hidden></th><th data-hidden></th><th data-hidden></th></tr></thead><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td><td><strong>Notes</strong></td><td><strong>Foreign Key</strong></td><td><strong>Constraints</strong></td><td><strong>Required</strong></td></tr><tr><td>id</td><td>varchar</td><td>identitifier of the institution entity</td><td></td><td> </td><td>PK</td><td>Y</td></tr><tr><td>name</td><td>varchar</td><td>name of the institution</td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>

### 7.2.8 Field/claim/data (REQUIRED)

**Description:** An attribute asserted by an entity, about itself or another entity.

**Fields:**

<table data-header-hidden><thead><tr><th></th><th></th><th></th><th></th><th data-hidden></th><th data-hidden></th><th data-hidden></th></tr></thead><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td><td><strong>Notes</strong></td><td><strong>Foreign Key</strong></td><td><strong>Constraints</strong></td><td><strong>Required</strong></td></tr><tr><td>id</td><td>varchar</td><td>identifier of a field</td><td></td><td> </td><td>PK</td><td>Y</td></tr><tr><td>name</td><td>varchar</td><td>name of the field</td><td>e.g. First name</td><td></td><td></td><td></td></tr><tr><td>type</td><td>varchar</td><td>type of the field</td><td></td><td></td><td></td><td></td></tr><tr><td>properties</td><td>object</td><td>properties of the field</td><td>determinants, actions, validation/controls</td><td></td><td></td><td></td></tr><tr><td>registration</td><td>object</td><td>registration(s) requestiong the claim/data</td><td></td><td></td><td></td><td></td></tr></tbody></table>

### 7.2.9 Result/credential (REQUIRED)

**Description:** The result of a registration, in addition to the recording of information in a registry, is usually a credential (sometimes called: a certificate, license, permit, card, etc.) proving the registration.

**Fields:**

<table data-header-hidden><thead><tr><th></th><th></th><th></th><th></th><th data-hidden></th><th data-hidden></th><th data-hidden></th></tr></thead><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td><td><strong>Notes</strong></td><td><strong>Foreign Key</strong></td><td><strong>Constraints</strong></td><td><strong>Required</strong></td></tr><tr><td>id</td><td>varchar</td><td>result identifier</td><td></td><td> </td><td>PK</td><td>Y</td></tr><tr><td>name</td><td>varchar</td><td>name of the result</td><td>e.g. Program certificate</td><td></td><td></td><td></td></tr><tr><td>templateId</td><td>varchar</td><td>template reference  if applicable</td><td></td><td></td><td></td><td></td></tr><tr><td>determinant</td><td>object</td><td>determinant(s) that determine if result is applicable. </td><td></td><td></td><td></td><td></td></tr><tr><td>description</td><td>varchar</td><td>description of the result</td><td></td><td></td><td></td><td></td></tr><tr><td>properties</td><td>object</td><td>additional properties</td><td></td><td></td><td></td><td></td></tr></tbody></table>

### 7.2.10 Required document (REQUIRED)

**Description:** Information (i.e. claims and credentials) which must be provided in a registration process. The requirements may vary according to each subject.

**Fields:**

<table data-header-hidden><thead><tr><th></th><th></th><th></th><th></th><th data-hidden></th><th data-hidden></th><th data-hidden></th></tr></thead><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td><td><strong>Notes</strong></td><td><strong>Foreign Key</strong></td><td><strong>Constraints</strong></td><td><strong>Required</strong></td></tr><tr><td>id</td><td>varchar</td><td>document identifier</td><td></td><td> </td><td>PK</td><td>Y</td></tr><tr><td>name</td><td>varchar</td><td>name of the document</td><td>e.g. Program certificate</td><td></td><td></td><td></td></tr><tr><td>templateId</td><td>varchar</td><td>template reference  if applicable</td><td></td><td></td><td></td><td></td></tr><tr><td>determinant</td><td>object</td><td>determinant(s) that determine if requirement is applicable. </td><td></td><td></td><td></td><td></td></tr><tr><td>description</td><td>varchar</td><td>description of the result</td><td></td><td></td><td></td><td></td></tr><tr><td>properties</td><td>object</td><td>additional properties</td><td></td><td></td><td></td><td></td></tr></tbody></table>

### 7.2.11 Payment/fee (RECOMMENDED)

**Description:** Amount of money to be paid in relation to a registration.

**Fields:**

<table data-header-hidden><thead><tr><th></th><th></th><th></th><th></th><th data-hidden></th><th data-hidden></th><th data-hidden></th></tr></thead><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td><td><strong>Notes</strong></td><td><strong>Foreign Key</strong></td><td><strong>Constraints</strong></td><td><strong>Required</strong></td></tr><tr><td>id</td><td>varchar</td><td>identifier of a fee</td><td></td><td> </td><td>PK</td><td>Y</td></tr><tr><td>type</td><td>varchar</td><td>type of the fee</td><td>e.g. fixed/calculated</td><td></td><td></td><td></td></tr><tr><td>formula</td><td>object</td><td>rules of fee calculation</td><td></td><td></td><td></td><td></td></tr><tr><td>currency</td><td>varchar</td><td>currency identifier</td><td>e.g. EUR, USD</td><td></td><td></td><td></td></tr><tr><td>description</td><td>varchar</td><td>description of the fee</td><td></td><td></td><td></td><td></td></tr></tbody></table>

### 7.2.12 Determinant (REQUIRED)

**Description:** A determinant is an attribute, defined in the rule, which determines/triggers if (1) an entity is subject to a registration and/or (2) what requirements this entity must provide to register.

**Fields:**

<table data-header-hidden><thead><tr><th></th><th></th><th></th><th></th><th data-hidden></th><th data-hidden></th><th data-hidden></th></tr></thead><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td><td><strong>Notes</strong></td><td><strong>Foreign Key</strong></td><td><strong>Constraints</strong></td><td><strong>Required</strong></td></tr><tr><td>id</td><td>varchar</td><td>identifier</td><td></td><td> </td><td>PK</td><td>Y</td></tr><tr><td>name</td><td>varchar</td><td>name of the determinant</td><td></td><td></td><td></td><td></td></tr><tr><td>source</td><td>varchar</td><td>field or object where the source information is taken</td><td></td><td></td><td></td><td></td></tr><tr><td>rules</td><td>object</td><td>math rules </td><td></td><td></td><td></td><td></td></tr><tr><td>properties</td><td>object</td><td>additional business rules</td><td></td><td></td><td></td><td></td></tr></tbody></table>
