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

<table data-header-hidden><thead><tr><th></th><th></th><th></th><th></th><th data-hidden></th><th data-hidden></th><th data-hidden></th></tr></thead><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td><td><strong>Notes</strong></td><td><strong>Foreign Key</strong></td><td><strong>Constraints</strong></td><td><strong>Required</strong></td></tr><tr><td></td><td></td><td></td><td></td><td> </td><td>PK</td><td>Y</td></tr></tbody></table>

### 7.2.2 Service (REQUIRED)

**Description:** Name given to a registration, or to a combination of registrations which can be undertaken simultaneously, by the entity(ies) in charge of organizing the registration process.

**Fields:**

<table data-header-hidden><thead><tr><th></th><th></th><th></th><th></th><th data-hidden></th><th data-hidden></th><th data-hidden></th></tr></thead><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td><td><strong>Notes</strong></td><td><strong>Foreign Key</strong></td><td><strong>Constraints</strong></td><td><strong>Required</strong></td></tr><tr><td></td><td></td><td></td><td></td><td> </td><td>PK</td><td>Y</td></tr></tbody></table>

### 7.2.3 Screen/form (REQUIRED)

**Description:** A service is composed of one or several screens defined in the Screen Builder by the analyst.

**Fields:**

<table data-header-hidden><thead><tr><th></th><th></th><th></th><th></th><th data-hidden></th><th data-hidden></th><th data-hidden></th></tr></thead><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td><td><strong>Notes</strong></td><td><strong>Foreign Key</strong></td><td><strong>Constraints</strong></td><td><strong>Required</strong></td></tr><tr><td></td><td></td><td></td><td></td><td> </td><td>PK</td><td>Y</td></tr></tbody></table>

### 7.2.4 Role screen/form (REQUIRED)

**Description:** One or several screens are defined in the Screen Builder. Screen(s) where a human operator will undertake actions to process an applicant file, usually enter data (e.g. registration number, or registration certificate) and press buttons (approve, send back for correction, etc.).

**Fields:**

<table data-header-hidden><thead><tr><th></th><th></th><th></th><th></th><th data-hidden></th><th data-hidden></th><th data-hidden></th></tr></thead><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td><td><strong>Notes</strong></td><td><strong>Foreign Key</strong></td><td><strong>Constraints</strong></td><td><strong>Required</strong></td></tr><tr><td></td><td></td><td></td><td></td><td> </td><td>PK</td><td>Y</td></tr></tbody></table>

### 7.2.5 Workflow (RECOMMENDED)

**Description:** A workflow provides a visual representation of a business process. Workflow Engine executes processes that are defined in [Business Process Model and Notation (BPMN)](https://camunda.com/bpmn/), the global standard for process modelling. With BPMN, the analyst can automate most complex business processes using an easy-to-adopt visual modelling language.

**Fields:**

<table data-header-hidden><thead><tr><th></th><th></th><th></th><th></th><th data-hidden></th><th data-hidden></th><th data-hidden></th></tr></thead><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td><td><strong>Notes</strong></td><td><strong>Foreign Key</strong></td><td><strong>Constraints</strong></td><td><strong>Required</strong></td></tr><tr><td></td><td></td><td></td><td></td><td> </td><td>PK</td><td>Y</td></tr></tbody></table>

### 7.2.6 Role (RECOMMENDED)

**Description:** Human or bot actor in the workflow who must process the application file in the order set in the workflow.

A role is defined by 4 properties: Name of the role; Who is in charge of the role- Institution entity; Type: Action that will take place in the context of the role, either human or BOT; Status decision options of the application file in relation to the role (0=pending, 1=passed successfully, 2=send back for correction, 3=rejected).

**Fields:**

<table data-header-hidden><thead><tr><th></th><th></th><th></th><th></th><th data-hidden></th><th data-hidden></th><th data-hidden></th></tr></thead><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td><td><strong>Notes</strong></td><td><strong>Foreign Key</strong></td><td><strong>Constraints</strong></td><td><strong>Required</strong></td></tr><tr><td></td><td></td><td></td><td></td><td> </td><td>PK</td><td>Y</td></tr></tbody></table>

### 7.2.7 Institution/entity (REQUIRED)

**Description:** Institution in charge of Registration and/or Role.

**Fields:**

<table data-header-hidden><thead><tr><th></th><th></th><th></th><th></th><th data-hidden></th><th data-hidden></th><th data-hidden></th></tr></thead><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td><td><strong>Notes</strong></td><td><strong>Foreign Key</strong></td><td><strong>Constraints</strong></td><td><strong>Required</strong></td></tr><tr><td></td><td></td><td></td><td></td><td> </td><td>PK</td><td>Y</td></tr></tbody></table>

### 7.2.8 Field/claim/data (RECOMMENDED)

**Description:** An attribute asserted by an entity, about itself or another entity.

**Fields:**

<table data-header-hidden><thead><tr><th></th><th></th><th></th><th></th><th data-hidden></th><th data-hidden></th><th data-hidden></th></tr></thead><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td><td><strong>Notes</strong></td><td><strong>Foreign Key</strong></td><td><strong>Constraints</strong></td><td><strong>Required</strong></td></tr><tr><td></td><td></td><td></td><td></td><td> </td><td>PK</td><td>Y</td></tr></tbody></table>

### 7.2.9 Result/credential (RECOMMENDED)

**Description:** The result of a registration, in addition to the recording of information in a registry, is usually a credential (sometimes called: a certificate, license, permit, card, etc.) proving the registration.

**Fields:**

<table data-header-hidden><thead><tr><th></th><th></th><th></th><th></th><th data-hidden></th><th data-hidden></th><th data-hidden></th></tr></thead><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td><td><strong>Notes</strong></td><td><strong>Foreign Key</strong></td><td><strong>Constraints</strong></td><td><strong>Required</strong></td></tr><tr><td></td><td></td><td></td><td></td><td> </td><td>PK</td><td>Y</td></tr></tbody></table>

### 7.2.10 Required document (RECOMMENDED)

**Description:** Information (i.e. claims and credentials) which must be provided in a registration process. The requirements may vary according to each subject.

**Fields:**

<table data-header-hidden><thead><tr><th></th><th></th><th></th><th></th><th data-hidden></th><th data-hidden></th><th data-hidden></th></tr></thead><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td><td><strong>Notes</strong></td><td><strong>Foreign Key</strong></td><td><strong>Constraints</strong></td><td><strong>Required</strong></td></tr><tr><td></td><td></td><td></td><td></td><td> </td><td>PK</td><td>Y</td></tr></tbody></table>

### 7.2.11 Payment/fee (RECOMMENDED)

**Description:** Amount of money to be paid in relation to a registration.

**Fields:**

<table data-header-hidden><thead><tr><th></th><th></th><th></th><th></th><th data-hidden></th><th data-hidden></th><th data-hidden></th></tr></thead><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td><td><strong>Notes</strong></td><td><strong>Foreign Key</strong></td><td><strong>Constraints</strong></td><td><strong>Required</strong></td></tr><tr><td></td><td></td><td></td><td></td><td> </td><td>PK</td><td>Y</td></tr></tbody></table>

### 7.2.12 Determinant (RECOMMENDED)

**Description:** A determinant is an attribute, defined in the rule, which determines/triggers if (1) an entity is subject to a registration and/or (2) what requirements this entity must provide to register.

**Fields:**

<table data-header-hidden><thead><tr><th></th><th></th><th></th><th></th><th data-hidden></th><th data-hidden></th><th data-hidden></th></tr></thead><tbody><tr><td><strong>Name</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td><td><strong>Notes</strong></td><td><strong>Foreign Key</strong></td><td><strong>Constraints</strong></td><td><strong>Required</strong></td></tr><tr><td></td><td></td><td></td><td></td><td> </td><td>PK</td><td>Y</td></tr></tbody></table>
