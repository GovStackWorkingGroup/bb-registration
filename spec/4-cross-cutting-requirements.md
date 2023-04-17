---
description: >-
  This section will highlight important requirements or describe any additional
  cross-cutting requirements that apply to this Building Block.
---

# 5 Cross-Cutting Requirements

The cross-cutting requirements described in this section are an extension of the cross-cutting requirements defined in the [Architecture specification](https://govstack.gitbook.io/specification/architecture-and-nonfunctional-requirements) and [Security requirements](https://govstack.gitbook.io/specification/security-requirements). This section will highlight important requirements or describe any additional cross-cutting requirements that apply to this Building Block.

## 5.1 System Audit Log Functionality (REQUIRED) <a href="#docs-internal-guid-5b083c0e-7fff-0396-fba2-8a081b3bbff8" id="docs-internal-guid-5b083c0e-7fff-0396-fba2-8a081b3bbff8"></a>

Each Building Block must implement access and authorization audit, logging, tracing, and tracking with alerts (minimally proxied or implemented through the API Management and Gateway services).

* The system must log all user activity in the system.
* User action log is visible for admin users.
* By default user action log is stored for 1 year after which the system will delete the log automatically. The storage length is configurable in the rules engine.

See detailed Audit logging requirements in the [Security Requirements specification](https://govstack.gitbook.io/specification/security-requirements).

## 5.2 Manage Identities and Access (REQUIRED) <a href="#docs-internal-guid-5b083c0e-7fff-0396-fba2-8a081b3bbff8" id="docs-internal-guid-5b083c0e-7fff-0396-fba2-8a081b3bbff8"></a>

Each building block must implement the ability to provision, de-provision, and manage Identities and access rights (this may or may not be centralized for the whole architecture as a unified provisioning process).

See the [Security Requirements specification](https://govstack.gitbook.io/specification/building-blocks/security-requirements).

## 5.3 Support for Accessibility and Context (REQUIRED)

The design of the building block should be inclusive, allowing for multiple languages/translations, as well as following all accessibility guidelines.

## 5.4 Secure Ingress and Egress access mechanisms (REQUIRED)

Egress, in the world of networking, implies traffic that exits an entity or a network boundary, while Ingress is traffic that enters the boundary of a network. Any ingress or egress traffic must leverage an Information Mediator or secure API gateway.
