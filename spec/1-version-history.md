---
description: >-
  The version history table describes the major changes to the specifications
  between published versions.
---

# 1 Version History

| Version | Authors                                                                                                                                                                                                                                                                                                                                        | Comment                                                                         |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 0.7     | Frank Grozel, Ingmar Vali, Tambet Artma, Saurav Bhattarai, Dr. P. S. Ramkumar, Rauno Kulla                                                                                                                                                                                                                                                     | Initial Revision                                                                |
| 0.8     | <p>Frank Grozel, Ingmar Vali, Tambet Artma, Saurav Bhattarai, Dr. P. S. Ramkumar, Rauno Kulla.</p><p>Reviewers:</p><p>Neil Roy, Aare Lapõnin, Sasa Kovacevic, Fergal Marrinan, Surendrasingh Sucharia</p><p><br></p>                                                                                                                           | Applied feedback from technical review.                                         |
| 0.9     | <p>Ingmar Vali, Sebastian Leidig, Frank Grozel</p><p></p><p>Technical Reviewers: Tony Shannon, Saša Kovačević, Riham Moawad, Riham Fahmi, Aare Laponin, Manish Srivastava, Palab Saha, Surendra Singh Sucharia, Arvind Gupta, Gayatri. P., Shivank Singh Chauhan, Gavin Lyons</p><p><br>Reviewers: Steve Conrad, Wes Brown, Valeria Tafoya</p> | New requirements added. Review feedback.                                        |
| 1.0     | Wesley Brown, Steve Conrad, Valeria Tafoya                                                                                                                                                                                                                                                                                                     | Final edits to align content to specification template for GovStack 1.0 release |
| **2.0.0**<br><em>(previously known as 23Q4)</em><br><sup><em>November 2023</em></sup> | <p>Sebastian Leidig, Ingmar Vali, Steve Conrad, Valeria Tafoya</p><p>Test suite: Łukasz Ruzicki, Karolina Kopacz, Mateusz Sobolak</p> | Functional Requirements and Service APIs restructured to follow the Key Digital Functionalities. Statistics API path changed. Test suite extended. See [release notes](#2.0.0). |
| **2.1.0**<br><sup><em>not yet released</em></sup> | Steve Conrad | Functional Requirements formatted for the test harness. Two requirement levels relaxed. See [release notes](#2.1.0). |

## Release Notes

### 2.1.0 <a href="#2.1.0" id="2.1.0"></a>

_Not yet released. Changes since 2.0.0._

This is a minor version: requirement levels were only relaxed, so a solution that conforms to 2.0.0 also conforms to 2.1.0. Only chapter 6 changed. The other chapters, the API definitions and the test suite are unchanged.

#### 6 Functional Requirements

* Requirements are formatted for the test harness: each requirement is a list item with its level, instead of a numbered heading. Their order is unchanged, so the 2.0.0 numbers (for example 6.1.10) still identify them.
* Two requirement levels were relaxed:
  * 6.1.10 Read information from QR-code/barcode: REQUIRED → RECOMMENDED.
  * 6.3.2.12 Voice guide feature: RECOMMENDED → OPTIONAL.
* Some requirement titles were reworded without changing their meaning: 6.1.1, 6.1.3, 6.1.4, 6.1.6, 6.1.9, 6.1.10 and 6.3.3.1–6.3.3.3.
* 6.1.7 Pay fees for application now states that the system allows the user to pay the fees it shows.

### 2.0.0 (previously known as 23Q4) <a href="#2.0.0" id="2.0.0"></a>

_Released in November 2023 as "23Q4". Changes since 1.0._

This is a major version: requirements were restructured, renumbered and partly removed, and the path of the statistics API changed.

#### 2 Description

* The payment step refers to the GovStack Payments Building Block (REG-113).

#### 4 Key Digital Functionalities

* Online registration e-services and their processing are now separate functionalities: 4.1 Online Registration e-services and 4.2 Processing of Registrations. The Development Platform moved to 4.3 and the Out-of-Scope Assumptions to 4.4 (REG-114).
* 4.1 lists the applicant's steps and 4.2 the operator's steps, which 1.0 described together in one list.
* 4.1 and 4.4 refer to the Payments Building Block (REG-113).

#### 5 Cross-Cutting Requirements

* The requirements are grouped under 5.1 Requirements (5.1.1–5.1.4), followed by a new 5.2 Standards section (TECH-823).
* 5.1.1 and 5.1.2 refer to the exact sections of the Security Requirements specification. 5.1.1 also refers to the logging services of the Information Mediator Building Block (REG-115).

#### 6 Functional Requirements

* The chapter follows the structure of chapter 4: 6.1 Online Registration e-services (6.1.1–6.1.10), 6.2 Processing of Registrations (6.2.1–6.2.6) and 6.3 Development Platform (REG-114, REG-116).
* The applicant and operator requirements of 1.0 (6.1.1.1–6.1.1.10 and 6.1.1.12–6.1.1.17) were rewritten for the new sections 6.1 and 6.2.
* The Development Platform requirements are unchanged. Only their numbers changed, from 6.2.x.y to 6.3.x.y.
* Removed:
  * the System Audit Log requirement (1.0: 6.1.1.11), which duplicated 5.1.1 (REG-118);
  * the External API functional requirements (1.0: 6.1.2.1–6.1.2.5), as chapter 8 Service APIs defines the APIs (REG-120);
  * the list of Generic Registration Functionalities (1.0: 6.1.3);
  * the undefined term "A0" for the user account page (REG-116).

#### 8 Service APIs

* The sections follow chapter 4: 8.1 Online Registration e-services, 8.2 Processing of Registrations and 8.3 Development Platform (REG-102).
* The chapter shows the updated API definitions (TECH-943).
* The statistics endpoint is `GET /data/statistics`, previously `GET /data/statistics/1.0` (TECH-943).
* The API definitions no longer contain a fixed Information Mediator server address, and the example payload uses camelCase (TECH-943).

#### Test suite

* New Cucumber test for `PUT /applications/{fileId}`, with response schema and test data (TECH-569).
* Fixes to the Gherkin tests, the test entrypoint and the request media type (TECH-866).
